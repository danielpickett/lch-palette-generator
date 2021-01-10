import React from 'react'
import { LCHColor } from 'types'
import './TextSamples.scss'
import { TextSample, TextSamplesPlot } from 'components'
import { faSquare, faCircle } from '@fortawesome/pro-solid-svg-icons'
import { getTextColor } from 'utils'
import {
  greyscaleTextColorConfig,
  regularTextColorConfig,
  vividTextColorConfig,
} from 'config'
import { lch } from 'utils'
// import { SetTextColorsType } from 'App'

export const TextSamples = ({
  bgColorLCH,
  textChroma,
  vividTextChroma,
  scaleIndex,
  pointIndex,
  highestFoundChromaInScale,
  showPlot,
  showDetails,
  scaleName,
  // setTextColors,
}: {
  bgColorLCH: LCHColor
  textChroma: number
  vividTextChroma: number
  scaleIndex: number
  pointIndex: number
  highestFoundChromaInScale: number
  showPlot: boolean
  showDetails: boolean
  scaleName: string
  // setTextColors: SetTextColorsType
}) => {
  const greyOnGrey =
    scaleIndex === 0
      ? getTextColor({
          bgColorLCH: bgColorLCH,
          lum: greyscaleTextColorConfig[pointIndex].lum,
          chroma: highestFoundChromaInScale,
          mix: greyscaleTextColorConfig[pointIndex].mix,
          icon: faCircle,
          label: 'greyscale',
        })
      : null

  const chromaticText = getTextColor({
    bgColorLCH: bgColorLCH,
    lum: regularTextColorConfig[pointIndex].lum,
    chroma: textChroma,
    mix: regularTextColorConfig[pointIndex].mix,
    icon: faCircle,
    label: 'regular',
  })

  const vividText = getTextColor({
    bgColorLCH: bgColorLCH,
    lum: vividTextColorConfig[pointIndex].lum,
    minLum: vividTextColorConfig[pointIndex].minLum,
    chroma: vividTextChroma,
    mix: vividTextColorConfig[pointIndex].mix,
    maximizeChroma: true,
    icon: faSquare,
    label: 'vivid',
  })

  const textColorConfigs = greyOnGrey
    ? [greyOnGrey]
    : [chromaticText, vividText]

  return (
    <div className="TextSamples">
      {textColorConfigs.map((config, index) => (
        <div className="TextSamples__samples" key={index}>
          <TextSample
            bgColorHex={lch(config.bgColorLCH).hex()}
            colorLCH={config.regular.lch}
            contrast={config.regular.contrast}
            showDetails={showDetails}
            scaleIndex={scaleIndex}
            pointIndex={pointIndex}
            scaleName={scaleName}
            textVariantLabel={config.label === 'regular' ? config.label : ''}
            // setTextColors={setTextColors}
          />
          <TextSample
            bgColorHex={lch(config.bgColorLCH).hex()}
            colorLCH={config.subdued.lch}
            contrast={config.subdued.contrast}
            showDetails={showDetails}
            scaleIndex={scaleIndex}
            pointIndex={pointIndex}
            scaleName={scaleName}
            textVariantLabel={config.label + '-subdued'}
            // setTextColors={setTextColors}
          />
        </div>
      ))}

      {showPlot && (
        <div className="TextSamples__plot">
          <TextSamplesPlot textColorConfigs={textColorConfigs} />
        </div>
      )}
    </div>
  )
}
