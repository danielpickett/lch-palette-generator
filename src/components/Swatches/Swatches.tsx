import React from 'react'
import './Swatches.scss'
import { ScaleType } from 'types'
import { DerivedColorType, DerivedShadeType } from 'utils/getDerivedColors'
import chromajs from 'chroma-js'
import { TextSamples } from 'components'
import { luminances, colorNames } from 'config'
import { lch } from 'utils'

export const Swatches = React.memo(
  ({
    scale,
    derivedColor,
    scaleIndex,
    showTextPlots,
    showTextDetails,
  }: {
    scale: ScaleType
    derivedColor: DerivedColorType
    scaleIndex: number
    showTextPlots: boolean
    showTextDetails: boolean
  }) => {
    // console.log('rendered - Swatches')
    return (
      <div className="Swatches">
        {scale.chromas.map((_, shadeIndex) => {
          const hide = false // index === 0
          return hide ? (
            <div
              key={shadeIndex}
              className="Swatches__swatch"
              style={{
                backgroundColor: 'white',
                flexBasis: `${(1 / scale.chromas.length) * 100}%`,
              }}
            />
          ) : (
            <SwatchesSwatch
              scale={scale}
              derivedShadeColors={derivedColor.shades[shadeIndex]}
              shadeIndex={shadeIndex}
              scaleIndex={scaleIndex}
              key={shadeIndex}
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
  derivedShadeColors,
  shadeIndex,
  scaleIndex,
  showTextPlots,
  showTextDetails,
}: {
  scale: ScaleType
  derivedShadeColors: DerivedShadeType
  shadeIndex: number
  scaleIndex: number
  showTextPlots: boolean
  showTextDetails: boolean
}) => {
  const color = lch({
    l: luminances[shadeIndex],
    c: scale.chromas[shadeIndex],
    h: scale.hue,
  })
  const swatchColor = color._rgb._clipped ? undefined : color.hex()

  const handleClick = () => {
    const sliderHandle = document.querySelector(
      `[data-slider-handle="scale${scaleIndex}-point${shadeIndex}"]`
    ) as HTMLDivElement
    if (sliderHandle) sliderHandle.focus()
  }

  return (
    <div
      key={shadeIndex}
      className="Swatches__swatch"
      style={{
        color:
          luminances[shadeIndex] > 60 || !swatchColor
            ? 'rgba(0, 0, 0, .7)'
            : 'rgba(255, 255, 255, .7)',
        backgroundColor: swatchColor,
        flexBasis: `${(1 / scale.chromas.length) * 100}%`,
      }}
      onClick={handleClick}
    >
      <div className="Swatches__label">
        {scale.scaleName} {colorNames?.[shadeIndex]}
      </div>

      {swatchColor && (
        <TextSamples
          shadeColors={derivedShadeColors}
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
