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
  scaleName: string
  targetColorString?: string
  targetColorNickname?: string
  chromaticTextChroma: number
  vividTextChroma: number
  hue: number
  chromas: number[]
}

export type StateType = {
  scales: ScaleType[]
}

export type ThemeActionType =
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
  | {
      changeType: 'targetColorString'
      scaleIndex: number
      value: string | undefined
    }

export type TextColorsType = {
  [key: string]: string
}

export type TextColorsActionType = {
  key: string
  value: string
}
