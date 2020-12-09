import React from 'react'
import './ScaleGenerator.scss'
import { Plotter } from 'components'
import { Swatches } from 'components/Swatches'
import { ScaleType, ScalesActionType } from 'App'

export const ScaleGenerator = ({
  scale,
  hue,
  onChange,
  maxChroma,
  size,
  scaleIndex,
}: {
  scale: ScaleType
  hue: number
  onChange: (action: ScalesActionType) => void

  maxChroma: number
  size: number
  scaleIndex: number
}) => {
  const handleChromaChange = (chromaChange: number, pointIndex: number) => {
    onChange({
      changeType: 'chroma',
      scaleIndex: scaleIndex,
      pointIndex,
      value: chromaChange,
    })
  }

  return (
    <div className="ScaleGenerator">
      <div className="ScaleGenerator__controls">
        <Plotter scale={scale} size={size} onChange={handleChromaChange} />
        <div
          className="ScaleGenerator__max-chroma-line"
          style={{ left: `${maxChroma * size}px` }}
        />

        <label className="ScaleGenerator__hue">
          <span>Hue: {hue} </span>
          <input
            className="ScaleGenerator__input"
            onChange={(e) =>
              onChange({
                changeType: 'hue',
                scaleIndex: scaleIndex,
                value: +e.target.value,
              })
            }
            value={hue}
            type="range"
            step="1"
            min="0"
            max="360"
          />
        </label>
      </div>
      <Swatches hue={hue} scale={scale} />
    </div>
  )
}
