import chroma from 'chroma-js'
import React, { useCallback, useEffect, useState } from 'react'
import { CanvasSizeType, ColorExtended, WashType } from 'types'
import './PlotterPoint.scss'

export const PlotterPoint = ({
  wash,
  hue,
  onChromaChange,
  size = 3,
}: {
  wash: WashType
  hue: number
  onChromaChange: (chroma: number) => void
  size?: CanvasSizeType
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [chromaOffset, setChromaOffset] = useState(0)

  const snapToMax = () => {
    const color = chroma.lch(
      wash.luminance / size,
      wash.chroma / size,
      hue
    ) as ColorExtended
    const gradientArr = (() => {
      return 0
    })()
    console.log('snap', wash.luminance, wash.chroma, hue, color._rgb._clipped)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.altKey) {
      snapToMax()
    } else {
      setIsDragging(true)
    }
  }
  const handleMouseUp = useCallback(() => {
    const newChroma = wash.chroma + chromaOffset
    onChromaChange(newChroma < 0 ? 0 : newChroma)
    setChromaOffset(0)
    setIsDragging(false)
  }, [onChromaChange, wash.chroma, chromaOffset])

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
      className={
        'PlotterPoint' + (isDragging ? ' PlotterPoint--is-dragging' : '')
      }
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
      <div className="PlotterPoint__output">
        {(wash.chroma + chromaOffset).toFixed(1)}
      </div>
    </div>
  )
}
