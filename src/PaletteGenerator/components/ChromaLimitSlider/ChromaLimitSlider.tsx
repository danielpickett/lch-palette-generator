import { Slider } from '../../components'
import React from 'react'
import './ChromaLimitSlider.scss'

export const ChromaLimitSlider = ({
  value,
  size,
  onChange,
}: {
  value: number
  size: number
  onChange: (value: number, diff: number) => void
}) => {
  return (
    <div className="ChromaLimitSlider">
      <Slider
        value={value}
        min={0}
        max={150}
        width={150 * size + 'px'}
        onChange={onChange}
        renderBackground={() => <div className="ChromaLimitSlider__background" />}
      />
    </div>
  )
}
