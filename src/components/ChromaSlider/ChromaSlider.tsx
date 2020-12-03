import React, { useCallback, useEffect, useState } from 'react'
import './ChromaSlider.scss'
import { CanvasSizeType } from 'types'

export const ChromaSlider = ({
  chroma,
  onChromaChange,
  size,
}: {
  chroma: number
  onChromaChange: (chromaChange: number) => void
  size: CanvasSizeType
}) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = useCallback(() => setIsDragging(false), [])
  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => onChromaChange(e.movementX / size),
    [onChromaChange, size]
  )

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

  return (
    <div
      className={
        'ChromaSlider' + (isDragging ? ' ChromaSlider--is-dragging' : '')
      }
      style={{ width: `${150 * size}px` }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="ChromaSlider__dot"
        style={{
          left: `${chroma * size}px`,
        }}
      />
      <div className="ChromaSlider__output">{chroma.toFixed(1)}</div>
    </div>
  )
}
