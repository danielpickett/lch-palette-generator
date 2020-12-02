import React, { useCallback, useState } from 'react'
import './ScaleGenerator.scss'
import { ArrOf10Nums, Plotter } from 'components'
import { Swatches } from 'components/Swatches'
import { CanvasSizeType } from 'types'
import { initialLuminances, initialChromas } from 'config-data'

export const ScaleGenerator = ({
  hue,
  maxChroma,
  onHueChange,
  size = 3,
}: {
  hue: number
  maxChroma: number
  onHueChange: (hue: number) => void
  size?: CanvasSizeType
}) => {
  const [luminances] = useState<ArrOf10Nums>([...initialLuminances])
  const [chromas, setChromas] = useState<ArrOf10Nums>([...initialChromas])

  const handleOnChange = useCallback((chromaChange, i) => {
    console.log('changed?', chromaChange, i)
    setChromas((prevChromas) => {
      return prevChromas.map((prevChroma, j) => {
        if (i === j)
          return prevChroma + chromaChange < 0 ? 0 : prevChroma + chromaChange
        return prevChroma
      }) as ArrOf10Nums
    })
  }, [])

  return (
    <div className="ScaleGenerator">
      <div className="ScaleGenerator__controls">
        <Plotter
          hue={hue}
          chromas={chromas}
          luminances={luminances}
          size={size}
          onChange={handleOnChange}
        />
        <div
          className="ScaleGenerator__max-chroma-line"
          style={{ left: `${maxChroma * size}px` }}
        ></div>

        <label className="ScaleGenerator__hue">
          <span>Hue: </span>
          <input
            className="ScaleGenerator__input"
            onChange={(e) => onHueChange(+e.target.value)}
            value={hue}
            type="range"
            step="5"
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
