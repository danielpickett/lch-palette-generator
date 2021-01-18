import { LCHColor, StateType } from 'types'
import { getTextColor, lch } from 'utils'
import {
  luminances,
  shadeNames,
  regularTextColorConfig,
  vividTextColorConfig,
  safeTextOnChromaticColors,
  // greyscaleTextColorConfig,
} from 'config'
import { faSquare, faCircle } from '@fortawesome/pro-solid-svg-icons'

export type TextColorType = {
  tokenName: string
  lch: LCHColor
  hex: string
  contrast: number
  plotLabel: string
  plotMarker: JSX.Element
}

export type BGColorType = {
  tokenName: string
  lch: {
    l: number
    c: number
    h: number
  }
  hex: string
}

export type ChromaticShadeTextColorsType = {
  shadeName: string
  bgColor: BGColorType
  textColor: TextColorType
  textColorSubdued: TextColorType
  vividTextColor: TextColorType
  vividTextColorSubdued: TextColorType
}

export type TextColorsType = {
  scaleName: string
  shades: ChromaticShadeTextColorsType[]
}

export const getDerivedColors = (state: StateType): TextColorsType[] => {
  return state.scales.map((scale, scaleIndex) => {
    return {
      scaleName: scale.scaleName,
      shades: scale.chromas.map((chroma, shadeIndex) => {
        const bgColorLCH = {
          l: luminances[shadeIndex],
          c: chroma,
          h: scale.hue,
        }
        const color = lch(bgColorLCH)
        const bgColorHex = color.hex()

        const textColors = getTextColor({
          bgColorLCH: bgColorLCH,
          lum: regularTextColorConfig[shadeIndex].lum,
          chroma: scale.chromaticTextChroma,
          mix: regularTextColorConfig[shadeIndex].mix,
          icon: faCircle,
          label: 'regular',
        })

        const vividTextColors = getTextColor({
          bgColorLCH: bgColorLCH,
          lum: vividTextColorConfig[shadeIndex].lum,
          minLum: vividTextColorConfig[shadeIndex].minLum,
          chroma: scale.vividTextChroma,
          mix: vividTextColorConfig[shadeIndex].mix,
          maximizeChroma: true,
          icon: faSquare,
          label: 'vivid',
        })

        const token =
          scaleIndex === 0 && shadeIndex === 0
            ? 'white'
            : scale.scaleName.toLowerCase() + '-' + shadeNames[shadeIndex]

        const isSafe = (
          key: 'default' | 'subdued' | 'vivid' | 'vivid-subdued'
        ) => {
          return safeTextOnChromaticColors[shadeIndex][key]
            ? ''
            : '--UNSAFE'
        }

        // + isSafe('default')

        return {
          scaleName: scale.scaleName,
          shadeName: shadeNames[shadeIndex],
          bgColor: {
            tokenName: 'color-' + token,
            lch: bgColorLCH,
            hex: bgColorHex,
          },
          textColor: {
            tokenName: 'text-on-' + token + isSafe('default'),
            lch: textColors.regular.lch,
            hex: textColors.regular.hex,
            contrast: textColors.regular.contrast,
            plotLabel: textColors.label,
            plotMarker: textColors.marker,
          },
          textColorSubdued: {
            tokenName: 'text-on-' + token + '--subdued' + isSafe('subdued'),
            lch: textColors.subdued.lch,
            hex: textColors.subdued.hex,
            contrast: textColors.subdued.contrast,
            plotLabel: textColors.label,
            plotMarker: textColors.marker,
          },
          vividTextColor: {
            tokenName: 'text-on-' + token + '--vivid' + isSafe('vivid'),
            lch: vividTextColors.regular.lch,
            hex: vividTextColors.regular.hex,
            contrast: vividTextColors.regular.contrast,
            plotLabel: vividTextColors.label,
            plotMarker: vividTextColors.marker,
          },
          vividTextColorSubdued: {
            tokenName:
              'text-on-' + token + '--vivid-subdued' + isSafe('vivid-subdued'),
            lch: vividTextColors.subdued.lch,
            hex: vividTextColors.subdued.hex,
            contrast: vividTextColors.subdued.contrast,
            plotLabel: vividTextColors.label,
            plotMarker: vividTextColors.marker,
          },
        }
      }),
    }
  })
}
