import chromajs from 'chroma-js'
import {ColorExtended, LCHColor} from 'types'

type LCHTuple = [number, number, number]
// type LCHObject = { l: number; c: number; h: number }

export function lch(lch: LCHTuple): LCHColor
export function lch(lch: LCHColor): ColorExtended

export function lch(lch: LCHTuple | LCHColor) {
  if (Array.isArray(lch)) {
    return { l: lch[0], c: lch[1], h: isNaN(lch[2]) ? 0 : lch[2] } as LCHColor
  } else {
    return chromajs.lch(lch.l, lch.c, lch.h) as ColorExtended
  }
}

