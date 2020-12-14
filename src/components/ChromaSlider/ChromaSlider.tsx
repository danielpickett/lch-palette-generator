import React, { useCallback, useEffect, useState } from 'react'
import './ChromaSlider.scss'

export const ChromaSlider = React.memo(
  ({
    chroma,
    index,
    onChromaChange,
    onLuminanceChange,
    size,
  }: {
    chroma: number
    index: number
    onChromaChange: (chromaChange: number, pointIndex: number) => void
    onLuminanceChange?: (luminanceChange: number, pointIndex: number) => void
    size: number
  }) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = useCallback(() => setIsDragging(false), [])
    const handleMouseMove = useCallback(
      (e: globalThis.MouseEvent) => {
        if (e.shiftKey) {
          if (onLuminanceChange) {
            onLuminanceChange((e.movementY * -1) / size, index)
          }
        } else {
          onChromaChange(e.movementX / size, index)
        }
      },
      [onChromaChange, onLuminanceChange, size, index]
    )
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        let sign = e.key === 'ArrowLeft' ? -1 : 1
        if (e.altKey) {
          onChromaChange(chroma + 0.1 * sign, index)
        } else if (e.shiftKey) {
          onChromaChange(chroma + 10 * sign, index)
        } else {
          onChromaChange(chroma + 1 * sign, index)
        }
      }

      if (onLuminanceChange && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        let sign = e.key === 'ArrowDown' ? -1 : 1
        if (e.altKey) {
          onLuminanceChange(chroma + 0.1 * sign, index)
        } else if (e.shiftKey) {
          onLuminanceChange(chroma + 10 * sign, index)
        } else {
          onLuminanceChange(chroma + 1 * sign, index)
        }
      }
    }

    useEffect(() => {
      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
      } else {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }, [isDragging, handleMouseUp, handleMouseMove])

    // console.log('rendered - ChromaSlider')

    return (
      <div
        className={
          'ChromaSlider' + (isDragging ? ' ChromaSlider--is-dragging' : '')
        }
        style={{ width: `${150 * size}px` }}
        onMouseDown={handleMouseDown}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className="ChromaSlider__dot"
          style={{
            left: `${chroma * size}px`,
          }}
        >
          <div className="ChromaSlider__tooltip">{chroma.toFixed(1)}</div>
        </div>
      </div>
    )
  }
)
