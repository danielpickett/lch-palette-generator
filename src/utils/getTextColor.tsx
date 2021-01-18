import React from 'react'
import { LCHColor } from 'types'
import { getMaxChroma, lch } from 'utils'
import chromajs from 'chroma-js'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// export type TextColorType = {
//   lch: LCHColor
//   hex: string
//   contrast: number
// }

export const getTextColor = ({
  bgColorLCH,
  lum,
  minLum,
  chroma,
  mix,
  maximizeChroma,
  icon,
  label,
}: {
  bgColorLCH: LCHColor
  lum: number
  minLum?: number
  chroma: number
  mix: number
  maximizeChroma?: boolean
  icon: IconDefinition
  label: string
}) => {
  const bgColorObj = lch(bgColorLCH)

  const color = { l: lum, c: chroma, h: bgColorLCH.h } as LCHColor

  const maxChroma = getMaxChroma(color)
  if (color.c > maxChroma) color.c = maxChroma

  if (maximizeChroma && minLum && color.c < chroma) {
    let incrementor = 1
    let hasTriedBothWays = false

    while (color.l >= minLum) {
      const maxChroma = getMaxChroma({
        l: color.l + incrementor,
        c: color.c,
        h: color.h,
      })
      if (maxChroma > color.c) {
        color.l = color.l + incrementor
        if (maxChroma > chroma) break
        else color.c = maxChroma
      } else {
        if (hasTriedBothWays) break
        incrementor = incrementor * -1
        hasTriedBothWays = true
      }
    }
  }

  const textColorRegularObj = lch(color)
  const textColorRegularHex = textColorRegularObj.hex()

  const textColorSubduedObj = chromajs.mix(
    textColorRegularObj,
    bgColorObj,
    mix,
    'lch'
  )
  const textColorSubduedHex = textColorSubduedObj.hex()

  return {
    bgColorLCH,
    regular: {
      lch: color,
      hex: textColorRegularHex,
      contrast: chromajs.contrast(bgColorObj, textColorRegularObj),
    },
    subdued: {
      lch: lch(textColorSubduedObj.lch()),
      hex: textColorSubduedHex,
      contrast: chromajs.contrast(textColorSubduedObj, bgColorObj),
    },
    marker: <FontAwesomeIcon icon={icon} />,
    label,
  }
}
