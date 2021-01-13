import { TextSamples } from 'components'
import { luminances, shadeNames } from 'config'
import React from 'react'
import { ActionType, ScaleType } from 'types'
import { VividTextColorsForGreyShadeType } from 'utils/extractVividTextColorsForGreyScale'
import { ChromaticShadeTextColorsType } from 'utils/getDerivedColors'
import chromajs from 'chroma-js'
import './Swatch.scss'
import { lch } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'

export const Swatch = ({
  scale,
  shadeTextColors,
  vividTextColorsForGreyShade,
  shadeIndex,
  scaleIndex,
  showTextPlots,
  showTextDetails,
  defaultShade,
  onChange,
}: {
  scale: ScaleType
  shadeTextColors: ChromaticShadeTextColorsType
  vividTextColorsForGreyShade?: VividTextColorsForGreyShadeType
  shadeIndex: number
  scaleIndex: number
  showTextPlots: boolean
  showTextDetails: boolean
  defaultShade: boolean
  onChange: (action: ActionType) => void
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
  const handleMakeDefaultShade = () => {
    onChange({ changeType: 'defaultShade', scaleIndex, shadeIndex })
  }

  return (
    <div
      key={shadeIndex}
      className={'Swatch' + (defaultShade ? ' Swatch--default-shade' : '')}
      style={{
        color: shadeTextColors.textColor.hex,
        backgroundColor: swatchColor,
        flexBasis: `${(1 / scale.chromas.length) * 100}%`,
      }}
      onClick={handleClick}
    >
      <div className="Swatch__label" onClick={handleMakeDefaultShade}>
        <div
          className="Swatch__hover-background"
          style={{
            backgroundColor: shadeTextColors.textColor.hex,
          }}
        />
        <span>
          {scale.scaleName} {shadeNames?.[shadeIndex]}
        </span>
        {defaultShade && (
          <span>
            <FontAwesomeIcon className="Swatch__check" icon={faCheckCircle} />
          </span>
        )}
      </div>

      {swatchColor && (
        <TextSamples
          shadeTextColors={shadeTextColors}
          vividTextColorsForGreyShade={vividTextColorsForGreyShade}
          showPlot={showTextPlots}
          showDetails={showTextDetails}
        />
      )}
      <div className="Swatch__outputs">
        <div>{swatchColor}</div>
        {!!swatchColor && <div>{chromajs(swatchColor).css()}</div>}
      </div>
    </div>
  )
}
