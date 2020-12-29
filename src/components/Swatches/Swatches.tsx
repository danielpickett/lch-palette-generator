import React from 'react'
import './Swatches.scss'
import { ScaleType } from 'types'
import chromajs from 'chroma-js'
import { TextSamples } from 'components'
import { luminances, colorNames } from 'config'
import { lch } from 'utils'

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

    const highestFoundChromaInScale = (() => {
      let result = 0
      scale.chromas.forEach((chroma) => {
        if (chroma > result) result = chroma
      })
      return result
    })()

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
            <SwatchesSwatch
              scale={scale}
              pointIndex={pointIndex}
              scaleIndex={scaleIndex}
              highestFoundChromaInScale={highestFoundChromaInScale}
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

const SwatchesSwatch = ({
  scale,
  pointIndex,
  scaleIndex,
  highestFoundChromaInScale,
  showTextPlots,
  showTextDetails,
}: {
  scale: ScaleType
  pointIndex: number
  scaleIndex: number
  highestFoundChromaInScale: number
  showTextPlots: boolean
  showTextDetails: boolean
}) => {
  const color = lch({
    l: luminances[pointIndex],
    c: scale.chromas[pointIndex],
    h: scale.hue,
  })
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
          textChroma={scale.chromaticTextChroma}
          highestFoundChromaInScale={highestFoundChromaInScale}
          vividTextChroma={scale.vividTextChroma}
          showPlot={showTextPlots}
          showDetails={showTextDetails}
        />
      )}
      <div className="Swatches__outputs">
        <div>{swatchColor}</div>
        {!!swatchColor && <div>{chromajs(swatchColor).css()}</div>}
      </div>
    </div>
  )
}
