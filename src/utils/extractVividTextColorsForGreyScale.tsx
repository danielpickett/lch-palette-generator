import { TextColorsType, TextColorType } from './getDerivedColors'
import { shadeNames, vividTextColorConfig } from 'config'
import { kbob } from './kbob'
import chromajs from 'chroma-js'
import { lch } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'
import React from 'react'

export type VividOnGreyShadeTextColorsType = TextColorType[]

type VividTextColorSetType = {
  srcScaleKebab: string
  srcShade: string
  vividTextColor: TextColorType
  vividTextColorSubdued: TextColorType
}

export type VividTextColorsForGreyShadeType = {
  shadeName: string
  vividTextColorSets: VividTextColorSetType[]
}

export const extractVividTextColorsForGreyScale = (
  textColors: TextColorsType[]
) => {
  const greyScaleTextColors = textColors[0]

  const chromaticScalesTextColors = textColors
    .slice(1)
    .map((scale, scaleIndex) => {
      return {
        scaleName: scale.scaleName,
        shades: scale.shades.map((shade, shadeIndex) => {
          return {
            srcScale: scale.scaleName,
            srcShade: shade.shadeName,
            vividTextColorLCH: { ...shade.vividTextColor.lch },
          }
        }),
      }
    })

  const finalResult = greyScaleTextColors.shades.reduce(
    (
      prev: VividTextColorsForGreyShadeType[],
      greyShadeTextColors,
      shadeIndex
    ) => {
      const greyBgColorHex = greyShadeTextColors.bgColor.hex

      return [
        ...prev,
        {
          shadeName: shadeNames[shadeIndex],
          vividTextColorSets: chromaticScalesTextColors.map(
            (scale): VividTextColorSetType => {
              const currGreyShade = scale.shades[shadeIndex]

              const vividText = lch(currGreyShade.vividTextColorLCH)

              const vividTextSubdued = chromajs.mix(
                greyBgColorHex,
                vividText.hex(),
                vividTextColorConfig[shadeIndex].mix
              )

              const scaleKebab = kbob(currGreyShade.srcScale)
              const shadeName = currGreyShade.srcShade

              const vividContrast = chromajs.contrast(
                vividText.hex(),
                greyBgColorHex
              )
              // const vivid_UNSAFE = vividContrast < 4.5 ? '--UNSAFE' : ''

              const vividSubduedContrast = chromajs.contrast(
                vividTextSubdued.hex(),
                greyBgColorHex
              )
              // const vividSubdued_UNSAFE =
              //   vividSubduedContrast < 4.5 ? '--UNSAFE' : ''

              const vividtokenName = 
                `text-on-grey-${shadeName}--${scaleKebab}--vivid` // prettier-ignore
              const vividSubduedtokenName =
                `text-on-grey-${shadeName}--${scaleKebab}--vivid--subdued` // prettier-ignore

              return {
                srcScaleKebab: scaleKebab,
                srcShade: shadeName,
                vividTextColor: {
                  tokenName: vividtokenName,
                  lch: currGreyShade.vividTextColorLCH,
                  hex: vividText.hex(),
                  contrast: vividContrast,
                  plotLabel: vividtokenName,
                  plotMarker: <FontAwesomeIcon icon={faCircle} />,
                },
                vividTextColorSubdued: {
                  tokenName: vividSubduedtokenName,
                  lch: lch(vividTextSubdued.lch()),
                  hex: vividTextSubdued.hex(),
                  contrast: vividSubduedContrast,
                  plotLabel: vividSubduedtokenName,
                  plotMarker: <FontAwesomeIcon icon={faCircle} />,
                },
              }
            }
          ),
        },
      ]
    },
    []
  )

  return finalResult
}
