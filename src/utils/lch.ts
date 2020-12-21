type LCHTuple = [number, number, number]
type LCHObject = { l: number; c: number; h: number }

export function lch(lch: LCHTuple): LCHObject
export function lch(lch: LCHObject): LCHTuple

export function lch(lch: LCHTuple | LCHObject) {
  if (Array.isArray(lch)) {
    return { l: lch[0], c: lch[1], h: lch[2] } as LCHObject
  } else {
    return [lch.l, lch.c, lch.h] as LCHTuple
  }
}
