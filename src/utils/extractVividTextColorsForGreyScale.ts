import { TextColorsType, TextColorType } from './getDerivedColors'
import { shadeNames } from 'config'
import { kbob } from './kbob'

type ScaleColorsClone = {
  scaleName: string
  shades: {
    srcShade: string
    textColor: TextColorType
    textColorSubdued: TextColorType
    vividTextColor: TextColorType
    vividTextColorSubdued: TextColorType
  }[]
}

export type VividOnGreyShadeTextColorsType = TextColorType[]

type VividTextColorSetType = {
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
  const chromaticScalesTextColors = textColors.map((scale, scaleIndex) => {
    const temp: ScaleColorsClone = {
      scaleName: scale.scaleName,
      shades: scale.shades.map((shade, shadeIndex) => {
        return {
          srcShade: kbob(scale.scaleName) + '-' + shade.shadeName,
          textColor: {
            ...shade.textColor,
            lch: { ...shade.textColor.lch },
          },
          textColorSubdued: {
            ...shade.textColorSubdued,
            lch: { ...shade.textColorSubdued.lch },
          },
          vividTextColor: {
            ...shade.vividTextColor,
            lch: { ...shade.vividTextColor.lch },
          },
          vividTextColorSubdued: {
            ...shade.vividTextColorSubdued,
            lch: { ...shade.vividTextColorSubdued.lch },
          },
        }
      }),
    }
    console.log('temp', temp)
    return temp
  })
  const greyScaleTextColors = chromaticScalesTextColors.shift() as ScaleColorsClone

  console.log('chromaticScalesVividTextColors', chromaticScalesTextColors)

  const finalResult = greyScaleTextColors.shades.reduce(
    (
      prev: VividTextColorsForGreyShadeType[],
      greyscaleShadeTextColors,
      shadeIndex
    ) => {
      const temp = {
        shadeName: shadeNames[shadeIndex],
        vividTextColorSets: chromaticScalesTextColors.map((scale) => {
          const currShade = scale.shades[shadeIndex]
          return {
            srcShade: currShade.srcShade,
            vividTextColor: currShade.vividTextColor,
            vividTextColorSubdued: currShade.vividTextColorSubdued,
          }
        }),
      }
      return [...prev, temp]
    },
    []
  )
  console.log('finalResult', finalResult)

  return finalResult

  // ^^^^^^^^^^^^^^^^^^^^^^^^ GET THOSE VIVID ON GREY COLORS WORKING!!!!
}
