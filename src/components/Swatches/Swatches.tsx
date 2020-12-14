import React from 'react'
import './Swatches.scss'
import { ColorExtended } from 'types'
import { ScaleType } from 'types'
import chromajs from 'chroma-js'
import { Text } from 'components'

export const Swatches = ({ scale }: { scale: ScaleType }) => {
  return (
    <div className="Swatches">
      {scale.chromas.map((chroma, index) => {
        const color = chromajs.lch(
          scale.luminances[index],
          chroma,
          scale.hue
        ) as ColorExtended
        const swatchColor = color._rgb._clipped ? undefined : color.css()
        return (
          <div
            key={index}
            className="Swatches__swatch"
            style={{
              color:
                scale.luminances[index] > 60 || !swatchColor
                  ? 'rgba(0, 0, 0, .7)'
                  : 'rgba(255, 255, 255, .7)',
              backgroundColor: swatchColor,
              flexBasis: `${(1 / scale.chromas.length) * 100}%`,
            }}
          >
            <div className="Swatches__label">
              {scale.scaleName} {scale.colorNames?.[index]}
              {swatchColor && (
                <Text
                  bgColor={{
                    l: scale.luminances[index],
                    c: scale.chromas[index],
                    h: scale.hue,
                  }}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
