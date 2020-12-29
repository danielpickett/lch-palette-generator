import React from 'react'
import { LCHColor } from 'types'
import { getMaxChroma, lch } from 'utils'
import chromajs from 'chroma-js'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getTextColor = ({
  bgColor,
  lum,
  minLum,
  chroma,
  mix,
  maximizeChroma,
  icon,
  label,
}: {
  bgColor: LCHColor
  lum: number
  minLum?: number
  chroma: number
  mix: number
  maximizeChroma?: boolean
  icon: IconDefinition
  label: string
}) => {
  const bgColorObj = lch(bgColor)

  const color = { l: lum, c: chroma, h: bgColor.h }

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

  const colorRegularObj = lch(color)
  const colorSubduedObj = chromajs.mix(bgColorObj, colorRegularObj, mix, 'lch')

  return {
    bgColor,
    regular: {
      lch: color,
      contrast: chromajs.contrast(bgColorObj, colorRegularObj),
    },
    subdued: {
      lch: lch(colorSubduedObj.lch()),
      contrast: chromajs.contrast(colorSubduedObj, bgColorObj),
    },
    marker: <FontAwesomeIcon icon={icon} />,
    label,
  }
}
