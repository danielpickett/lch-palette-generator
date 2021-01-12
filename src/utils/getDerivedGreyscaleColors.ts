// I'M ABANDONING THIS APPROACH FOR NOW
// Instead of calculating all of the vivid text colors again
// against the greyscale shade, I should just pass in the
// already calculated text colors and pull out the vivid
// text colors to use against the grey shades.

// starting a new file with function for that approach.

import { StateType } from 'types'
import { getTextColor, kbob, lch } from 'utils'
import { luminances, shadeNames } from 'config'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'
import {
  regularTextColorConfig,
  // vividTextColorConfig,
  // greyscaleTextColorConfig,
} from 'config'
import { TextColorType, BGColorType } from './getDerivedColors'

export type GreyscaleShadeTextColorsType = {
  shadeName: string
  bgColor: BGColorType
  textColor: TextColorType
  textColorSubdued: TextColorType
  vividTextColors: TextColorType[]
}

export type GreyscaleTextColorsType = {
  scaleName: string
  shades: GreyscaleShadeTextColorsType[]
}

export const getDerivedGreyscaleColors = (state: StateType) => {
  const greyScale = state.scales[0]
  const chromaticScales = [...state.scales]
  chromaticScales.shift()

  return {
    scaleName: greyScale.scaleName,
    shades: greyScale.chromas.map((chroma, shadeIndex) => {
      const bgColorLCH = {
        l: luminances[shadeIndex],
        c: chroma,
        h: greyScale.hue,
      }
      const color = lch(bgColorLCH)
      const bgColorHex = color._rgb._clipped ? null : color.hex()

      const highestFoundChromaInScale = (() => {
        let result = 0
        greyScale.chromas.forEach((chroma) => {
          if (chroma > result) result = chroma
        })
        return result
      })()

      const textColors = getTextColor({
        bgColorLCH: bgColorLCH,
        lum: regularTextColorConfig[shadeIndex].lum,
        chroma: highestFoundChromaInScale, //greyScale.chromaticTextChroma,
        mix: regularTextColorConfig[shadeIndex].mix,
        icon: faCircle,
        label: 'regular',
      })

      const vividTextColors = chromaticScales.map((scale, scaleIndex) => {
        const temp = scale.chromas[shadeIndex]

        return temp
      })

      const nameKebab = `${kbob(greyScale.scaleName)}-${shadeNames[shadeIndex]}`

      return {
        shadeName: shadeNames[shadeIndex],
        bgColor: {
          tokenName: 'color-' + nameKebab,
          lch: bgColorLCH,
          hex: bgColorHex,
        },
        textColor: {
          tokenName: 'text-color-on-' + nameKebab,
          lch: textColors.regular.lch,
          hex: textColors.regular.hex,
          contrast: textColors.regular.contrast,
          plotLabel: textColors.label,
          plotMarker: textColors.marker,
        },
        textColorSubdued: {
          tokenName: 'text-color-on-' + nameKebab + '-subdued',
          lch: textColors.subdued.lch,
          hex: textColors.subdued.hex,
          contrast: textColors.subdued.contrast,
          plotLabel: textColors.label,
          plotMarker: textColors.marker,
        },
        vividOnGreyTextColors: vividTextColors,
      }
    }),
  }
}
