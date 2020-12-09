import React from 'react'
import './Swatches.scss'
import { ColorExtended } from 'types'
import { ScaleType } from 'App'
import chromajs from 'chroma-js'
// import { getMaxChroma } from 'utils'

export const Swatches = ({ hue, scale }: { hue: number; scale: ScaleType }) => {
  // useEffect(()=> {
  //   getMaxChroma(scale.chromas[2], scale.luminances[2], hue)
  // }, [scale.chromas[2]])
  return (
    <div className="Swatches">
      {scale.chromas.map((chroma, index) => {
        const color = chromajs.lch(
          scale.luminances[index],
          chroma,
          hue
        ) as ColorExtended
        const swatchColor = color._rgb._clipped ? undefined : color.css()
        return (
          <div
            key={index}
            className={
              'Swatches__swatch' +
              (!swatchColor ? ' Swatches__swatch--is-impossible-color' : '')
            }
            style={{
              color:
                scale.luminances[index] > 60
                  ? 'rgba(0, 0, 0, .7)'
                  : 'rgba(255, 255, 255, .7)',
              backgroundColor: swatchColor,
              flexBasis: `${(1 / scale.chromas.length) * 100}%`,
            }}
          >
            {scale.scaleName} {scale.colorNames?.[index]}
          </div>
        )
      })}
    </div>
  )
}
