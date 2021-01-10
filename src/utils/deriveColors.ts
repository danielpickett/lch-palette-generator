import { StateType } from 'types'
import { getTextColor, lch } from 'utils'
import { luminances, colorNames } from 'config'
import { faSquare, faCircle } from '@fortawesome/pro-solid-svg-icons'
import {
  regularTextColorConfig,
  vividTextColorConfig,
  // greyscaleTextColorConfig,
} from 'config'

export const deriveColors = (state: StateType) => {
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
        const bgColorHex = color._rgb._clipped ? null : color.hex()

        // const highestFoundChromaInScale = (() => {
        //   let result = 0
        //   scale.chromas.forEach((chroma) => {
        //     if (chroma > result) result = chroma
        //   })
        //   return result
        // })()

        // const greyOnGreyTextColors =
        //   scaleIndex === 0
        //     ? getTextColor({
        //         bgColorLCH: bgColorLCH,
        //         lum: greyscaleTextColorConfig[shadeIndex].lum,
        //         chroma: highestFoundChromaInScale,
        //         mix: greyscaleTextColorConfig[shadeIndex].mix,
        //         icon: faCircle,
        //         label: 'greyscale',
        //       })
        //     : null

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

        const nameKebab =
          scale.scaleName.toLowerCase().replace(/\s+/g, '-') +
          '-' +
          colorNames[shadeIndex]

        return {
          shadeName: colorNames[shadeIndex],
          bgColor: {
            tokenName: 'color-' + nameKebab,
            lch: bgColorLCH,
            hex: bgColorHex,
          },
          textColor: {
            tokenName: 'text-color-on' + nameKebab,
            lch: textColors.regular.lch,
            hex: textColors.regular.hex,
            contrast: textColors.regular.contrast,
            plotLabel: textColors.label,
            plotMarker: textColors.marker,
          },
          textColorSubdued: {
            tokenName: 'text-color-on' + nameKebab + '-subdued',
            lch: textColors.subdued.lch,
            hex: textColors.subdued.hex,
            contrast: textColors.subdued.contrast,
            plotLabel: textColors.label,
            plotMarker: textColors.marker,
          },
          vividTextColor: {
            tokenName: 'text-color-on' + nameKebab + '-subdued',
            lch: vividTextColors.regular.lch,
            hex: vividTextColors.regular.hex,
            contrast: vividTextColors.regular.contrast,
            plotLabel: vividTextColors.label,
            plotMarker: vividTextColors.marker,
          },
          vividTextColorSubdued: {
            tokenName: 'text-color-on' + nameKebab + '-subdued',
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
