import { Color } from 'chroma-js'

// type ButtonPropsType = {
//   foo: 'normal' | 'primary' | 'plain-text' | 'danger'
// }

// type TextPropsType = {
//   foo: 'normal' | 'subdued' | 'high-contrast' | 'vivid'
// }

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
  scaleName: string
  chromaticTextChroma: number
  vividTextChroma: number
  hue: number
  chromas: number[]
}

export type StateType = {
  scales: ScaleType[]
}

export type ActionType =
  | {
      changeType: 'hue'
      scaleIndex: number
      value: number
      min: number
      max: number
    }
  | {
      changeType: 'chroma'
      scaleIndex: number
      pointIndex: number
      value: number
      min: number
      max: number
    }
  | {
      changeType: 'chromaticTextChroma'
      scaleIndex: number
      value: number
      min: number
      max: number
    }
  | {
      changeType: 'vividTextChroma'
      scaleIndex: number
      value: number
      min: number
      max: number
    }
  | {
      changeType: 'chromaReset'
      scaleIndex: number
      value: number
    }
