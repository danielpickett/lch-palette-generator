import React, { useCallback, useEffect, useState } from 'react'
import { CanvasSizeType, WashType } from 'types'
import './PlotterPoint.scss'

export const PlotterPoint = ({
  wash,
  size = 3,
  onChange,
}: {
  wash: WashType
  size?: CanvasSizeType
  onChange: (chroma: number) => void
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [chromaOffset, setChromaOffset] = useState(0)

  const handleMouseDown = () => {
    setIsDragging(true)
  }
  const handleMouseUp = useCallback(() => {
    const newChroma = wash.chroma + chromaOffset
    onChange(newChroma < 0 ? 0 : newChroma)
    setChromaOffset(0)
    setIsDragging(false)
  }, [onChange, wash.chroma, chromaOffset])

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      setChromaOffset(
        (prevChromaOffset) => prevChromaOffset + e.movementX / size
      )
    },
    [setChromaOffset, size]
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
      className="PlotterPoint"
      style={{
        width: `${150 * size}px`,
        top: `${(100 - wash.luminance) * size}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="PlotterPoint__point"
        style={{ left: `${(wash.chroma + chromaOffset) * size}px` }}
      />
      <div className="PlotterPoint__output">{(wash.chroma + chromaOffset).toFixed(1)}</div>
    </div>
  )
}
