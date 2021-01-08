import chromajs from 'chroma-js'
import {ColorExtended} from 'types'

type LCHTuple = [number, number, number]
type LCHObject = { l: number; c: number; h: number }

export function lch(lch: LCHTuple): LCHObject
export function lch(lch: LCHObject): ColorExtended

export function lch(lch: LCHTuple | LCHObject) {
  if (Array.isArray(lch)) {
    return { l: lch[0], c: lch[1], h: isNaN(lch[2]) ? 0 : lch[2] } as LCHObject
  } else {
    return chromajs.lch(lch.l, lch.c, lch.h) as ColorExtended
  }
}

