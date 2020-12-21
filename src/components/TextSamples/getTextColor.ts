import { LCHColor } from 'types'
import { getMaxChroma, lch } from 'utils'
import chromajs from 'chroma-js'

export const getTextColor = (
  bgColor: LCHColor,
  textLuminance: number,
  textChroma: number,
  mixRatio: number
) => {
  const bgColorObj = chromajs.lch(bgColor.l, bgColor.c, bgColor.h)

  let maxChroma = getMaxChroma({
    l: textLuminance,
    c: textChroma,
    h: bgColor.h,
  })

  let _textChroma = textChroma
  if (textChroma > maxChroma) _textChroma = maxChroma

  const colorRegularObj = chromajs.lch(
    ...lch({ l: textLuminance, c: _textChroma, h: bgColor.h })
  )

  const colorSubduedObj = chromajs.mix(
    bgColorObj,
    colorRegularObj,
    mixRatio,
    'lch'
  )

  const result = {
    regular: {
      lch: { l: textLuminance, c: _textChroma, h: bgColor.h },
      contrast: chromajs.contrast(bgColorObj, colorRegularObj),
    },
    subdued: {
      lch: lch(colorSubduedObj.lch()),
      contrast: chromajs.contrast(colorSubduedObj, bgColorObj),
    },
  }

  return result
}
