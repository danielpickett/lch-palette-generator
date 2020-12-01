import React, { useCallback, useState } from 'react'
import './ScaleGenerator.scss'
import { Plotter } from 'components'
import { Swatches } from 'components/Swatches'
import { CanvasSizeType } from 'types'
import {initialWashes} from 'config-data'

export const ScaleGenerator = ({
  hue,
  onHueChange,
  size = 3,
}: {
  hue: number
  onHueChange: (hue: number) => void
  size?: CanvasSizeType
}) => {
  const [washes, setWashes] = useState(initialWashes)

  const handleOnChange = useCallback((changedWashes) => {
    setWashes(changedWashes)
  }, [])

  return (
    <div className="ScaleGenerator">
      <div>
        <Plotter
          hue={hue}
          washes={washes}
          size={size}
          onChange={handleOnChange}
        />

        <label className="ScaleGenerator__hue">
          <span>Hue: </span>
          <input
            className="ScaleGenerator__input"
            onChange={(e) => onHueChange(+e.target.value)}
            type="range"
            step="5"
            min="0"
            max="360"
          />
        </label>
      </div>
      <Swatches hue={hue} washes={washes} />
    </div>
  )
}
