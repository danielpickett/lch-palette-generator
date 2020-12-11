import React from 'react'
import { ActionType } from 'types'
import './HueSlider.scss'

export const HueSlider = ({
  hue,
  onChange,
  scaleIndex,
}: {
  hue: number
  onChange: (action: ActionType) => void
  scaleIndex: number
}) => {
  return (
    <div className="HueSlider">
      <span className="HueSlider__label">Hue: {hue} </span>
      <input
        className="HueSlider__input"
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
    </div>
  )
}
