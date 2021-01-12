import React from 'react'
import './Swatches.scss'
import { ScaleType } from 'types'
import {
  TextColorsType,
  ChromaticShadeTextColorsType,
} from 'utils/getDerivedColors'
import chromajs from 'chroma-js'
import { TextSamples } from 'components'
import { luminances, shadeNames } from 'config'
import { lch, VividTextColorsForGreyShadeType } from 'utils'

export const Swatches = React.memo(
  ({
    scale,
    scaleTextColors,
    vividTextColorsForGreyShades,
    scaleIndex,
    showTextPlots,
    showTextDetails,
  }: {
    scale: ScaleType
    scaleTextColors: TextColorsType
    vividTextColorsForGreyShades?: VividTextColorsForGreyShadeType[]
    scaleIndex: number
    showTextPlots: boolean
    showTextDetails: boolean
  }) => {
    return (
      <div className="Swatches">
        {scale.chromas.map((_, shadeIndex) => (
          <SwatchesSwatch
            scale={scale}
            shadeTextColors={scaleTextColors.shades[shadeIndex]}
            vividTextColorsForGreyShade={
              vividTextColorsForGreyShades?.[shadeIndex]
            }
            shadeIndex={shadeIndex}
            scaleIndex={scaleIndex}
            key={shadeIndex}
            showTextPlots={showTextPlots}
            showTextDetails={showTextDetails}
          />
        ))}
      </div>
    )
  }
)

const SwatchesSwatch = ({
  scale,
  shadeTextColors,
  vividTextColorsForGreyShade,
  shadeIndex,
  scaleIndex,
  showTextPlots,
  showTextDetails,
}: {
  scale: ScaleType
  shadeTextColors: ChromaticShadeTextColorsType
  vividTextColorsForGreyShade?: VividTextColorsForGreyShadeType
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
        {scale.scaleName} {shadeNames?.[shadeIndex]}
      </div>

      {swatchColor && (
        <TextSamples
          shadeTextColors={shadeTextColors}
          vividTextColorsForGreyShade={vividTextColorsForGreyShade}
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
