import React from 'react'
import { LCHColor } from 'types'
import './TextSamples.scss'
import { TextSample, TextColorsPlot } from 'components'
import { getTextColor } from './getTextColor'

const defaultConfig = [
  { lum: 15, chroma: 20, mix: 0.7 }, // 000 white
  { lum: 20, mix: 0.65 }, // 050
  { lum: 20, mix: 0.7 }, // 100
  { lum: 20, mix: 0.6 }, // 200
  { lum: 20, mix: 0.5 }, // 300
  { lum: 100, mix: 0.5 }, // 400
  { lum: 100, mix: 0.5 }, // 500
  { lum: 100, mix: 0.5 }, // 600
  { lum: 100, mix: 0.5 }, // 700
  { lum: 100, mix: 0.5 }, // 800
  { lum: 100, mix: 0.5 }, // 900 darkest
]

const vividConfig = [
  { lum: 50, mix: 0.6 }, // 000 white
  { lum: 50, mix: 0.6 }, // 050
  { lum: 50, mix: 0.6 }, // 100
  { lum: 50, mix: 0.6 }, // 200
  { lum: 50, mix: 0.5 }, // 300
  { lum: 50, mix: 0.5 }, // 400
  { lum: 50, mix: 0.5 }, // 500
  { lum: 50, mix: 0.5 }, // 600
  { lum: 50, mix: 0.5 }, // 700
  { lum: 50, mix: 0.5 }, // 800
  { lum: 50, mix: 0.5 }, // 900 darkest
]

export const TextSamples = ({
  bgColor,
  textChroma,
  scaleIndex,
  pointIndex,
  showPlot,
  showDetails,
}: {
  bgColor: LCHColor
  textChroma: number
  scaleIndex: number
  pointIndex: number
  showPlot: boolean
  showDetails: boolean
}) => {
  const defaultText = getTextColor(
    bgColor,
    defaultConfig[pointIndex].lum,
    textChroma,
    defaultConfig[pointIndex].mix
  )

  const vividText = getTextColor(
    bgColor,
    vividConfig[pointIndex].lum,
    textChroma,
    vividConfig[pointIndex].mix
  )

  return (
    <div className="TextSamples">
      <div className="TextSamples__samples">
        <TextSample
          colorLCH={defaultText.regular.lch}
          contrast={defaultText.regular.contrast}
          showDetails={showDetails}
        />
        <TextSample
          colorLCH={defaultText.subdued.lch}
          contrast={defaultText.subdued.contrast}
          showDetails={showDetails}
        />
        <br />
        <TextSample
          colorLCH={vividText.regular.lch}
          contrast={vividText.regular.contrast}
          showDetails={showDetails}
        />
        <TextSample
          colorLCH={vividText.subdued.lch}
          contrast={vividText.subdued.contrast}
          showDetails={showDetails}
        />
      </div>

      {showPlot && (
        <div className="TextSamples__plot">
          <TextColorsPlot
            colors={[
              bgColor,
              defaultText.regular.lch,
              defaultText.subdued.lch,
              vividText.regular.lch,
              vividText.subdued.lch,
            ]}
            labels={[
              'bg',
              'regular',
              'subdued',
              'vivid-regular',
              'vivid- subdued',
            ]}
            canvasHue={bgColor.h}
          />
        </div>
      )}
    </div>
  )
}
