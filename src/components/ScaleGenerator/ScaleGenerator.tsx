import React from 'react'
import './ScaleGenerator.scss'
import { Plotter } from 'components'
import { Swatches } from 'components/Swatches'
import { CanvasSizeType } from 'types'

export const ScaleGenerator = ({
  hue,
  luminances,
  chromas,
  onChromaChange,
  onHueChange,
  maxChroma,
  size,
}: {
  hue: number
  luminances: number[]
  chromas: number[]
  onChromaChange: (chromaChang: number, pointIndex: number) => void
  onHueChange: (hue: number) => void
  maxChroma: number
  size: CanvasSizeType
}) => {
  return (
    <div className="ScaleGenerator">
      <div className="ScaleGenerator__controls">
        <Plotter
          hue={hue}
          chromas={chromas}
          luminances={luminances}
          size={size}
          onChange={onChromaChange}
        />
        <div
          className="ScaleGenerator__max-chroma-line"
          style={{ left: `${maxChroma * size}px` }}
        ></div>

        <label className="ScaleGenerator__hue">
          <span>Hue: {hue} </span>
          <input
            className="ScaleGenerator__input"
            onChange={(e) => onHueChange(+e.target.value)}
            value={hue}
            type="range"
            step="1"
            min="0"
            max="360"
          />
        </label>
      </div>
      <Swatches
        hue={hue}
        washes={chromas.map((chroma, index) => ({
          luminance: luminances[index],
          chroma: chroma,
        }))}
      />
    </div>
  )
}
