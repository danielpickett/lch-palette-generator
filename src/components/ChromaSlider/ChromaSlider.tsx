import React, { useCallback, useEffect, useState } from 'react'
import { ActionType, LCHColor } from 'types'
import { getMaxChroma, getMinMaxLuminance } from 'utils'
import './ChromaSlider.scss'

type ChromaSliderPropsType = {
  color: LCHColor
  scaleIndex: number
  pointIndex: number
  onChange: (action: ActionType) => void
  size: number
}

export const ChromaSlider = React.memo(
  ({
    color,
    scaleIndex,
    pointIndex,
    onChange,
    size,
  }: ChromaSliderPropsType) => {
    const [isDragging, setIsDragging] = useState(false)

    const maxChroma = getMaxChroma(color)
    const minMaxLum = getMinMaxLuminance(color)
    const minLum = minMaxLum?.[0]
    const maxLum = minMaxLum?.[1]

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = useCallback(() => setIsDragging(false), [])
    const handleMouseMove = useCallback(
      (e: globalThis.MouseEvent) => {
        if (e.shiftKey) {
          const min = minLum || 0
          const max = maxLum || 100

          onChange({
            changeType: 'luminance',
            scaleIndex,
            pointIndex,
            value: (e.movementY * -1) / size,
            min,
            max,
          })
        } else {
          let chromaChange = e.movementX / size
          onChange({
            changeType: 'chroma',
            scaleIndex,
            pointIndex,
            value: chromaChange,
            min: 0,
            max: maxChroma,
          })
        }
      },
      [size, scaleIndex, pointIndex, maxChroma, minLum, maxLum, onChange]
    )
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault() // stops page from scrolling on up/down arrow keys

        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          let sign = e.key === 'ArrowLeft' ? -1 : 1
          let chromaChange: number

          if (e.altKey) chromaChange = 0.1 * sign
          else if (e.shiftKey) chromaChange = 10 * sign
          else chromaChange = 1 * sign

          onChange({
            changeType: 'chroma',
            scaleIndex,
            pointIndex,
            value: chromaChange,
            min: 0,
            max: maxChroma,
          })
        }

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          let sign = e.key === 'ArrowDown' ? -1 : 1
          let lumChange: number

          if (e.altKey) {
            lumChange = 0.1 * sign
          } else if (e.shiftKey) {
            lumChange = 10 * sign
          } else {
            lumChange = 1 * sign
          }

          const min = minLum || 0
          const max = maxLum || 100

          onChange({
            changeType: 'luminance',
            scaleIndex,
            pointIndex,
            value: lumChange,
            min: min,
            max: max,
          })
        }
      },
      [scaleIndex, pointIndex, maxChroma, minLum, maxLum, onChange]
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
            left: `${color.c * size}px`,
          }}
        >
          <div className="ChromaSlider__tooltip">{color.c.toFixed(1)}</div>
        </div>
      </div>
    )
  }
)
