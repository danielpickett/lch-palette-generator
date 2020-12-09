import chromajs from 'chroma-js'
import { ColorExtended, LCHColor } from 'types'

export const getMaxChroma = (color: LCHColor) => {
  let newChroma = color.c
  let clipped = (chromajs.lch(color.l, color.c, color.h) as ColorExtended)._rgb._clipped

  const isClipped = (color: LCHColor) =>
    (chromajs.lch(color.l, color.c, color.h) as ColorExtended)._rgb._clipped

  const incrementor = 0.1

  if (clipped) {
    while (isClipped({l:color.l, c:newChroma - incrementor, h:color.h})) {
      newChroma = newChroma - incrementor
    }
    newChroma = newChroma - incrementor
  } else {
    while (!isClipped({l:color.l, c:newChroma + incrementor, h:color.h})) {
      newChroma = newChroma + incrementor
    }
  }

  return newChroma
}
