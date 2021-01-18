import React from 'react'
import { ChromaticShadeTextColorsType } from 'utils/getDerivedColors'
import './TextSamples.scss'
import { TextSample, TextSamplesPlot } from '../../components'
import { VividTextColorsForGreyShadeType } from 'utils/extractVividTextColorsForGreyScale'
import chromajs from 'chroma-js'
import {
  safeTextOnChromaticColors,
  //safeTextOnGreyColors
} from 'config'

export const TextSamples = ({
  bgColorHex,
  shadeTextColors,
  vividTextColorsForGreyShade,
  showPlot,
  showDetails,
  shadeIndex,
}: {
  bgColorHex: string
  shadeTextColors: ChromaticShadeTextColorsType
  vividTextColorsForGreyShade?: VividTextColorsForGreyShadeType
  showPlot: boolean
  showDetails: boolean
  shadeIndex: number
}) => {
  return (
    <div className="TextSamples">
      <div className="TextSamples__samples">
        <TextSample
          bgColorHex={bgColorHex}
          textColor={shadeTextColors.textColor}
          showDetails={showDetails}
          isSafeInConfig={safeTextOnChromaticColors?.[shadeIndex]?.default}
        />
        <TextSample
          bgColorHex={bgColorHex}
          textColor={shadeTextColors.textColorSubdued}
          showDetails={showDetails}
          isSafeInConfig={safeTextOnChromaticColors?.[shadeIndex]?.subdued}
        />
      </div>
      {vividTextColorsForGreyShade ? (
        <>
          {showPlot && (
            <div className="TextSamples__plot">
              <TextSamplesPlot
                bgColorLCH={shadeTextColors.bgColor.lch}
                textColors={[
                  shadeTextColors.textColor,
                  shadeTextColors.textColorSubdued,
                ]}
              />
            </div>
          )}
          {vividTextColorsForGreyShade.vividTextColorSets.map(
            (vividTextColorSet, indexKey) => {
              return (
                <React.Fragment key={indexKey}>
                  <div className="TextSamples__samples">
                    <TextSample
                      bgColorHex={bgColorHex}
                      textColor={{
                        ...vividTextColorSet.vividTextColor,
                        contrast: chromajs.contrast(
                          bgColorHex,
                          vividTextColorSet.vividTextColor.hex
                        ),
                      }}
                      showDetails={showDetails}
                      isSafeInConfig={
                        safeTextOnChromaticColors?.[shadeIndex]?.vivid
                      }
                    />
                    <TextSample
                      bgColorHex={bgColorHex}
                      textColor={{
                        ...vividTextColorSet.vividTextColorSubdued,
                        contrast: chromajs.contrast(
                          bgColorHex,
                          vividTextColorSet.vividTextColorSubdued.hex
                        ),
                      }}
                      showDetails={showDetails}
                      isSafeInConfig={
                        safeTextOnChromaticColors?.[shadeIndex]?.[
                          'vivid-subdued'
                        ]
                      }
                    />
                  </div>
                  {showPlot && (
                    <div className="TextSamples__plot">
                      <TextSamplesPlot
                        bgColorLCH={vividTextColorSet.vividTextColor.lch}
                        textColors={[
                          vividTextColorSet.vividTextColor,
                          vividTextColorSet.vividTextColorSubdued,
                        ]}
                      />
                    </div>
                  )}
                </React.Fragment>
              )
            }
          )}
        </>
      ) : (
        <>
          <div
            className="TextSamples__samples"
            style={{ backgroundColor: bgColorHex }}
          >
            <TextSample
              bgColorHex={bgColorHex}
              textColor={shadeTextColors.vividTextColor}
              showDetails={showDetails}
              isSafeInConfig={safeTextOnChromaticColors?.[shadeIndex]?.vivid}
            />
            <TextSample
              bgColorHex={bgColorHex}
              textColor={shadeTextColors.vividTextColorSubdued}
              showDetails={showDetails}
              isSafeInConfig={
                safeTextOnChromaticColors?.[shadeIndex]?.['vivid-subdued']
              }
            />
          </div>
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
        </>
      )}
    </div>
  )
}
