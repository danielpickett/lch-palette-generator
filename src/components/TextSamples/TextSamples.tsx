import React from 'react'
import { DerivedShadeType } from 'utils/getDerivedColors'
import './TextSamples.scss'
import { TextSample, TextSamplesPlot } from 'components'

export const TextSamples = ({
  shadeColors,
  showPlot,
  showDetails,
}: {
  shadeColors: DerivedShadeType
  showPlot: boolean
  showDetails: boolean
}) => {
  return (
    <div className="TextSamples">
      <div className="TextSamples__samples">
        <TextSample
          bgColorHex={shadeColors.bgColor.hex}
          textColors={shadeColors.textColor}
          showDetails={showDetails}
        />
        <TextSample
          bgColorHex={shadeColors.bgColor.hex}
          textColors={shadeColors.textColorSubdued}
          showDetails={showDetails}
        />
      </div>
      <div className="TextSamples__samples">
        <TextSample
          bgColorHex={shadeColors.bgColor.hex}
          textColors={shadeColors.vividTextColor}
          showDetails={showDetails}
        />
        <TextSample
          bgColorHex={shadeColors.bgColor.hex}
          textColors={shadeColors.vividTextColorSubdued}
          showDetails={showDetails}
        />
      </div>

      {showPlot && (
        <div className="TextSamples__plot">
          <TextSamplesPlot
            bgColorLCH={shadeColors.bgColor.lch}
            textColors={[
              shadeColors.textColor,
              shadeColors.textColorSubdued,
              shadeColors.vividTextColor,
              shadeColors.vividTextColorSubdued,
            ]}
          />
        </div>
      )}
    </div>
  )
}
