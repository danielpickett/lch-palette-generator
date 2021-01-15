import React, { useState } from 'react'
import './HueSliderBackground.scss'
import backgroundImage from './lch-hue-picker-background.png'

export const HueSliderBackground = ({ active }: { active: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={
        'HueSliderBackground' +
        (!active && !isHovered ? ' HueSliderBackground--is-hidden' : '')
      }
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    />
  )
}
