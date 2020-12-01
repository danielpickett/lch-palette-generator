import React from 'react'
import './Swatches.scss'
import { WashType, ColorExtended } from 'types'
import { sortWashesByLuminance } from 'utils'
import chroma from 'chroma-js'

export const Swatches = ({
  hue,
  washes,
}: {
  hue: number
  washes: WashType[]
}) => {
  // const sortedWashes = sortWashesByLuminance(washes)

  return (
    <div className="Swatches">
      {washes.map((wash, index) => {
        const color = chroma.lch(
          wash.luminance,
          wash.chroma,
          hue
        ) as ColorExtended
        const swatchColor = color._rgb._clipped ? 'transparent' : color.css()
        return (
          <div
            key={index}
            className="Swatches__swatch"
            style={{ backgroundColor: swatchColor }}
          />
        )
      })}
    </div>
  )
}
