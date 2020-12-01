import { Color } from 'chroma-js'

export type WashType = { luminance: number; chroma: number }

export type CanvasSizeType = 1 | 2 | 3 | 4 | 5 | 6

export type ColorExtended = Color & {
  _rgb: {
    0: number
    1: number
    2: number
    3: number
    _clipped: boolean
    _unclipped: {
      0: number
      1: number
      2: number
      3: number
    }
  }
}
