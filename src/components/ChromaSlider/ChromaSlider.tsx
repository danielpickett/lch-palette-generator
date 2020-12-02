import React, { useCallback, useEffect, useState } from 'react'
import './ChromaSlider.scss'
import {
  CanvasSizeType,
  // ColorExtended,
  // WashType
} from 'types'
// import chroma from 'chroma-js'

export const ChromaSlider = ({
  chroma,
  onChromaChange,
  onInstantChromaChange,
  size = 3,
}: {
  chroma: number
  onChromaChange?: (chroma: number) => void
  onInstantChromaChange?: (chromaChange: number) => void
  size?: CanvasSizeType
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [chromaOffset, setChromaOffset] = useState(0)

  useEffect(() => {
    console.log('----------chroma', chroma)
  })

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
  }
  const handleMouseUp = useCallback(() => {
    const newChroma = chroma + chromaOffset
    if (onChromaChange) onChromaChange(newChroma < 0 ? 0 : newChroma)
    setChromaOffset(0)
    setIsDragging(false)
  }, [onChromaChange, chroma, chromaOffset])

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      setChromaOffset(
        (prevChromaOffset) => prevChromaOffset + e.movementX / size
      )
      if (onInstantChromaChange) onInstantChromaChange(e.movementX / size)
    },
    [setChromaOffset, onInstantChromaChange, size]
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
          left: `${
            chroma *
            //  + chromaOffset
            size
          }px`,
        }}
      />
      <div className="ChromaSlider__output">
        {(chroma
          //  + chromaOffset
           ).toFixed(1)}
      </div>
    </div>
  )
}
