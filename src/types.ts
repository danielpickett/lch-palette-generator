import { Color } from 'chroma-js'

export type LCHColor = { l: number; c: number; h: number }

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

export type ScaleType = {
  scaleName?: string
  colorNames?: string[]
  hue: number
  luminances: number[]
  chromas: number[]
}

export type StateType = {
  chromaLimit: number
  scales: ScaleType[]
}

export type ActionType =
  | {
      changeType: 'hue'
      scaleIndex: number
      pointIndex?: undefined
      value: number
    }
  | {
      changeType: 'chroma'
      scaleIndex: number
      pointIndex: number
      value: number
    }
  | {
      changeType: 'luminance'
      scaleIndex: number
      pointIndex: number
      value: number
    }
  | {
      changeType: 'chromaLimit'
      scaleIndex?: undefined
      pointIndex?: undefined
      value: number
    }
  | {
      changeType: 'chromaReset'
      scaleIndex: number
      pointIndex?: undefined
      value: number
    }
