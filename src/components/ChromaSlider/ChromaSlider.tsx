import React, { useCallback, useEffect, useState } from 'react'
import './ChromaSlider.scss'

export const ChromaSlider = React.memo(
  ({
    chroma,
    index,
    onChromaChange,
    size,
  }: {
    chroma: number
    index: number
    onChromaChange: (chromaChange: number, pointIndex: number) => void
    size: number
  }) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = useCallback(() => setIsDragging(false), [])
    const handleMouseMove = useCallback(
      (e: globalThis.MouseEvent) => onChromaChange(e.movementX / size, index),
      [onChromaChange, size, index]
    )
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        let sign = e.key === 'ArrowLeft' ? -1 : 1
        if (e.altKey) {
          onChromaChange(0.1 * sign, index)
        } else if (e.shiftKey) {
          onChromaChange(10 * sign, index)
        } else {
          onChromaChange(1 * sign, index)
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
        />
        {/* <div className="ChromaSlider__output">{chroma.toFixed(1)}</div> */}
      </div>
    )
  }
)
