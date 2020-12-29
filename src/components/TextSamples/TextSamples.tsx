import React from 'react'
import { LCHColor } from 'types'
import './TextSamples.scss'
import { TextSample, TextSamplesPlot } from 'components'
import { faSquare, faCircle } from '@fortawesome/pro-solid-svg-icons'
import { getTextColor } from './getTextColor'
import {
  greyscaleTextColorConfig,
  chromaticTextColorConfig,
  vividTextColorConfig,
} from 'config'
import { lch } from 'utils'


export const TextSamples = ({
  bgColor,
  textChroma,
  vividTextChroma,
  scaleIndex,
  pointIndex,
  highestFoundChromaInScale,
  showPlot,
  showDetails,
}: {
  bgColor: LCHColor
  textChroma: number
  vividTextChroma: number
  scaleIndex: number
  pointIndex: number
  highestFoundChromaInScale: number
  showPlot: boolean
  showDetails: boolean
}) => {
  const greyOnGrey =
    scaleIndex === 0
      ? getTextColor({
          bgColor: bgColor,
          lum: greyscaleTextColorConfig[pointIndex].lum,
          chroma: highestFoundChromaInScale,
          mix: greyscaleTextColorConfig[pointIndex].mix,
          icon: faCircle,
          label: 'greyscale',
        })
      : null

  const chromaticText = getTextColor({
    bgColor: bgColor,
    lum: chromaticTextColorConfig[pointIndex].lum,
    chroma: textChroma,
    mix: chromaticTextColorConfig[pointIndex].mix,
    icon: faCircle,
    label: 'chromatic',
  })

  const vividText = getTextColor({
    bgColor: bgColor,
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
            bgColorHex={lch(config.bgColor).hex()}
            colorLCH={config.regular.lch}
            contrast={config.regular.contrast}
            showDetails={showDetails}
          />
          <TextSample
            bgColorHex={lch(config.bgColor).hex()}
            colorLCH={config.subdued.lch}
            contrast={config.subdued.contrast}
            showDetails={showDetails}
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