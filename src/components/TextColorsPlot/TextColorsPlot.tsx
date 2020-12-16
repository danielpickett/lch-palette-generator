import { Canvas } from 'components'
import React from 'react'
import { LCHColor } from 'types'
import './TextColorsPlot.scss'

export const TextColorsPlot = ({
  colors,
  labels,
  canvasHue,
}: {
  colors: LCHColor[]
  labels?: string[]
  canvasHue: number
}) => {
  const size = 1
  return (
    <div className="TextColorsPlot">
      <Canvas hue={canvasHue} size={size} />
      {colors.map((color, index) => (
        <div
          key={index}
          className="TextColorsPlot__dot Text__dot"
          style={{ left: color.c * size, bottom: color.l * size }}
        >
          <div className="TextColorsPlot__dot-label">
            {!!labels && !!labels[index] && labels[index]}
          </div>
        </div>
      ))}
    </div>
  )
}