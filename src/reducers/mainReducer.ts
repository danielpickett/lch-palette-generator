import { ThemeActionType, StateType } from 'types'
import chromajs from 'chroma-js'

export const mainReducer = (state: StateType, action: ThemeActionType) => {
  switch (action.changeType) {
    case 'chromaReset': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? {
                ...scale,
                chromas: [
                  0,
                  3.882,
                  10.84,
                  21.46,
                  39.99,
                  34.351,
                  29.004,
                  24.976,
                  20.508,
                  16.04,
                  11.572,
                ],
              }
            : scale
        ),
      }
    }

    case 'chromaticTextChroma': {
      const { scaleIndex, value, min, max } = action
      return {
        ...state,
        scales: state.scales.map((scale, index) => {
          if (index === scaleIndex) {
            let newChromaticTextChroma: number
            if (scale.chromaticTextChroma + value < min)
              newChromaticTextChroma = min
            else if (scale.chromaticTextChroma + value > max)
              newChromaticTextChroma = max
            else newChromaticTextChroma = scale.chromaticTextChroma + value
            return { ...scale, chromaticTextChroma: newChromaticTextChroma }
          } else {
            return scale
          }
        }),
      }
    }
    case 'vividTextChroma': {
      const { scaleIndex, value, min, max } = action
      return {
        ...state,
        scales: state.scales.map((scale, index) => {
          if (index === scaleIndex) {
            let newVividTextChroma: number
            if (scale.vividTextChroma + value < min) newVividTextChroma = min
            else if (scale.vividTextChroma + value > max)
              newVividTextChroma = max
            else newVividTextChroma = scale.vividTextChroma + value
            return { ...scale, vividTextChroma: newVividTextChroma }
          } else {
            return scale
          }
        }),
      }
    }
    case 'hue': {
      const { scaleIndex, value, min, max } = action
      return {
        ...state,
        scales: state.scales.map((scale, index) => {
          if (index === scaleIndex) {
            let newHue: number
            if (scale.hue + value < min) newHue = min
            else if (scale.hue + value > max) newHue = max
            else newHue = scale.hue + value
            return { ...scale, hue: newHue }
          } else {
            return scale
          }
        }),
      }
    }
    case 'chroma': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? {
                ...scale,
                chromas: scale.chromas.map((chroma, index) => {
                  if (index === action.pointIndex) {
                    if (chroma + action.value < action.min) return action.min
                    if (chroma + action.value > action.max) return action.max
                    return chroma + action.value
                  }
                  return chroma
                }),
              }
            : scale
        ),
      }
    }
    case 'targetColorString': {
      let hue: number | null
      if (action.value) {
        try {
          hue = chromajs(action.value).lch()[2]
        } catch (error) {
          hue = null
        }
      }
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? {
                ...scale,
                targetColorString: action.value,
                hue: hue ? hue : scale.hue,
              }
            : scale
        ),
      }
    }
    default:
      return state
  }
}
