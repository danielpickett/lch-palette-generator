import { TextSamples } from '../../components'
import { luminances, shadeNames } from 'config'
import React from 'react'
import { ActionType, ScaleType } from 'types'
import { VividTextColorsForGreyShadeType } from 'utils/extractVividTextColorsForGreyScale'
import { ChromaticShadeTextColorsType } from 'utils/getDerivedColors'
import './Swatch.scss'
import { lch } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Swatch = ({
  scale,
  shadeTextColors,
  vividTextColorsForGreyShade,
  shadeIndex,
  scaleIndex,
  showTextPlots,
  showTextDetails,
  showColorOutputs,
  showText,
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
  showColorOutputs: boolean
  showText: boolean
  defaultShade: boolean
  onChange: (action: ActionType) => void
}) => {
  const chroma = scale.chromas[shadeIndex]
  const bgColorLCH = {
    l: luminances[shadeIndex],
    c: chroma,
    h: scale.hue,
  }
  const color = lch(bgColorLCH)
  const swatchBGColor = color._rgb._clipped ? undefined : color.hex()

  const handleMakeDefaultShade = () => {
    onChange({ changeType: 'defaultShade', scaleIndex, shadeIndex })
  }

  if (!showText && shadeIndex === 0) return null
  const flexBasis = `${
    (1 / (!showText ? scale.chromas.length - 1 : scale.chromas.length)) * 100
  }%`

  const black = '#1e1e1e'

  return (
    <div
      key={shadeIndex}
      className={
        'Swatch' +
        (!swatchBGColor ? '  Swatch--is-impossible-color' : '') +
        (shadeIndex !== 0 && scaleIndex !== 0
          ? ' Swatch--is-eligible-as-default'
          : '') +
        (shadeIndex !== 0 && scaleIndex !== 0 ? ' Swatch--is-clickable' : '') +
        (defaultShade ? ' Swatch--is-default-shade' : '') +
        (scale.scaleName === 'Grey' ? ' Swatch--grey-scale' : '')
      }
      style={{
        color: swatchBGColor ? shadeTextColors.textColor.hex : black,
        backgroundColor: swatchBGColor,
        flexBasis,
      }}
    >
      {(scaleIndex === 0 || shadeIndex > 0) && ( // only show the first shade (white) for the grey scale
        <>
          <div className="Swatch__label">
            <span>
              {scaleIndex === 0 && shadeIndex === 0 ? 'White' : scale.scaleName}
            </span>

            {!(scaleIndex === 0 && shadeIndex === 0) && (
              <span>{shadeNames[shadeIndex]}</span>
            )}
          </div>
          {scaleIndex !== 0 && (
            <div
              className="Swatch__check-wrapper"
              style={{
                color: swatchBGColor || 'white',
              }}
              onClick={handleMakeDefaultShade}
            >
              <div
                className="Swatch__check-background"
                style={{
                  backgroundColor: swatchBGColor
                    ? shadeTextColors.textColor.hex
                    : black,
                }}
              />
              <FontAwesomeIcon className="Swatch__check-icon" icon={faCheck} />
            </div>
          )}

          {swatchBGColor && showText && (
            <TextSamples
              bgColorHex={swatchBGColor}
              shadeTextColors={shadeTextColors}
              vividTextColorsForGreyShade={vividTextColorsForGreyShade}
              showPlot={showTextPlots}
              showDetails={showTextDetails}
              shadeIndex={shadeIndex}
            />
          )}
          {showColorOutputs && (
            <div className="Swatch__outputs">
              <div>{swatchBGColor}</div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
