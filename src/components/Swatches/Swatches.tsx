import React from 'react'
import './Swatches.scss'
import { ColorExtended } from 'types'
import { ScaleType } from 'types'
import chromajs from 'chroma-js'
import { TextSamples } from 'components'
import { luminances, colorNames } from 'config'

export const Swatches = React.memo(
  ({
    scale,
    scaleIndex,
    showTextPlots,
    showTextDetails,
  }: {
    scale: ScaleType
    scaleIndex: number
    showTextPlots: boolean
    showTextDetails: boolean
  }) => {
    // console.log('rendered - Swatches')
    return (
      <div className="Swatches">
        {scale.chromas.map((_, pointIndex) => {
          const hide = false // index === 0
          return hide ? (
            <div
              key={pointIndex}
              className="Swatches__swatch"
              style={{
                backgroundColor: 'white',
                flexBasis: `${(1 / scale.chromas.length) * 100}%`,
              }}
            />
          ) : (
            <Swatch
              scale={scale}
              pointIndex={pointIndex}
              scaleIndex={scaleIndex}
              key={pointIndex}
              showTextPlots={showTextPlots}
              showTextDetails={showTextDetails}
            />
          )
        })}
      </div>
    )
  }
)

const Swatch = ({
  scale,
  pointIndex,
  scaleIndex,
  showTextPlots,
  showTextDetails,
}: {
  scale: ScaleType
  pointIndex: number
  scaleIndex: number
  showTextPlots: boolean
  showTextDetails: boolean
}) => {
  const color = chromajs.lch(
    luminances[pointIndex],
    scale.chromas[pointIndex],
    scale.hue
  ) as ColorExtended
  const swatchColor = color._rgb._clipped ? undefined : color.hex()
  return (
    <div
      key={pointIndex}
      className="Swatches__swatch"
      style={{
        color:
          luminances[pointIndex] > 60 || !swatchColor
            ? 'rgba(0, 0, 0, .7)'
            : 'rgba(255, 255, 255, .7)',
        backgroundColor: swatchColor,
        flexBasis: `${(1 / scale.chromas.length) * 100}%`,
      }}
    >
      <div className="Swatches__label">
        {scale.scaleName} {colorNames?.[pointIndex]}
      </div>

      {swatchColor && (
        <TextSamples
          bgColor={{
            l: luminances[pointIndex],
            c: scale.chromas[pointIndex],
            h: scale.hue,
          }}
          pointIndex={pointIndex}
          scaleIndex={scaleIndex}
          textChroma={scale.textChroma}
          showPlot={showTextPlots}
          showDetails={showTextDetails}
        />
      )}
      <div className="Swatches__hex-color">{swatchColor}</div>
    </div>
  )
}
