import React from 'react'
import { ChromaticShadeTextColorsType } from 'utils/getDerivedColors'
import './TextSamples.scss'
import { TextSample, TextSamplesPlot } from '../../components'
import { VividTextColorsForGreyShadeType } from 'utils/extractVividTextColorsForGreyScale'
import chromajs from 'chroma-js'

export const TextSamples = ({
  shadeTextColors,
  vividTextColorsForGreyShade,
  showPlot,
  showDetails,
}: {
  shadeTextColors: ChromaticShadeTextColorsType
  vividTextColorsForGreyShade?: VividTextColorsForGreyShadeType
  showPlot: boolean
  showDetails: boolean
}) => {
  return (
    <div className="TextSamples">
      <div className="TextSamples__samples">
        <TextSample
          bgColorHex={shadeTextColors.bgColor.hex}
          textColor={shadeTextColors.textColor}
          showDetails={showDetails}
        />
        <TextSample
          bgColorHex={shadeTextColors.bgColor.hex}
          textColor={shadeTextColors.textColorSubdued}
          showDetails={showDetails}
        />
      </div>
      {vividTextColorsForGreyShade ? (
        <div className="TextSamples__foo">
          {vividTextColorsForGreyShade.vividTextColorSets.map(
            (vividTextColorSet, indexKey) => {
              return (
                <div className="TextSamples__samples" key={indexKey}>
                  <TextSample
                    bgColorHex={shadeTextColors.bgColor.hex}
                    textColor={{
                      ...vividTextColorSet.vividTextColor,
                      contrast: chromajs.contrast(
                        shadeTextColors.bgColor.hex,
                        vividTextColorSet.vividTextColor.hex
                      ),
                    }}
                    showDetails={showDetails}
                  />
                  <TextSample
                    bgColorHex={shadeTextColors.bgColor.hex}
                    textColor={{
                      ...vividTextColorSet.vividTextColorSubdued,
                      contrast: chromajs.contrast(
                        shadeTextColors.bgColor.hex,
                        vividTextColorSet.vividTextColorSubdued.hex
                      ),
                    }}
                    showDetails={showDetails}
                  />
                </div>
              )
            }
          )}
        </div>
      ) : (
        <div className="TextSamples__samples">
          <TextSample
            bgColorHex={shadeTextColors.bgColor.hex}
            textColor={shadeTextColors.vividTextColor}
            showDetails={showDetails}
          />
          <TextSample
            bgColorHex={shadeTextColors.bgColor.hex}
            textColor={shadeTextColors.vividTextColorSubdued}
            showDetails={showDetails}
          />
        </div>
      )}

      {showPlot && (
        <div className="TextSamples__plot">
          <TextSamplesPlot
            bgColorLCH={shadeTextColors.bgColor.lch}
            textColors={[
              shadeTextColors.textColor,
              shadeTextColors.textColorSubdued,
              shadeTextColors.vividTextColor,
              shadeTextColors.vividTextColorSubdued,
            ]}
          />
        </div>
      )}
    </div>
  )
}
