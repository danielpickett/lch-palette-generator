import React, { useCallback, useEffect, useState } from 'react'
import { ActionType, LCHColor } from 'types'
import { getMaxChroma } from 'utils'
import './ChromaSlider.scss'

type ChromaSliderPropsType = {
  color: LCHColor
  scaleIndex: number
  shadeIndex: number
  onChange: (action: ActionType) => void
  size: number
  defaultShade?: boolean
}

export const ChromaSlider = React.memo(
  ({
    color,
    scaleIndex,
    shadeIndex,
    onChange,
    size,
    defaultShade,
  }: ChromaSliderPropsType) => {
    const [isDragging, setIsDragging] = useState(false)
    const maxChroma = getMaxChroma(color)

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = useCallback(() => setIsDragging(false), [])
    const handleMouseMove = useCallback(
      (e: globalThis.MouseEvent) => {
        let chromaChange = e.movementX / size
        onChange({
          changeType: 'chroma',
          scaleIndex,
          shadeIndex,
          value: chromaChange,
          min: 0,
          max: maxChroma,
        })
      },
      [size, scaleIndex, shadeIndex, maxChroma, onChange]
    )
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault() // stops page from scrolling on up/down arrow keys
          let sign = e.key === 'ArrowLeft' ? -1 : 1
          let chromaChange: number

          if (e.altKey) chromaChange = 0.1 * sign
          else if (e.shiftKey) chromaChange = 10 * sign
          else chromaChange = 1 * sign

          onChange({
            changeType: 'chroma',
            scaleIndex,
            shadeIndex,
            value: chromaChange,
            min: 0,
            max: maxChroma,
          })
        }
      },
      [scaleIndex, shadeIndex, maxChroma, onChange]
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
        data-slider-handle={`scale${scaleIndex}-point${shadeIndex}`}
      >
        <div
          className={
            'ChromaSlider__dot' +
            (defaultShade ? ' ChromaSlider__dot--default-shade' : '')
          }
          style={{
            left: `${color.c * size}px`,
          }}
        >
          <div
            className={
              'ChromaSlider__tooltip' +
              (defaultShade ? ' ChromaSlider__tooltip--default-shade' : '')
            }
          >
            {color.c.toFixed(1)}
          </div>
        </div>
      </div>
    )
  }
)
