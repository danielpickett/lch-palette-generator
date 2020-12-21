import { ActionType, StateType } from 'types'

export const reducer = (state: StateType, action: ActionType) => {
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
                  11.572
                ],
              }
            : scale
        ),
      }
    }

    case 'textChroma': {
      const { scaleIndex, value, min, max } = action
      return {
        ...state,
        scales: state.scales.map((scale, index) => {
          if (index === scaleIndex) {
            let newTextChroma: number
            if (scale.textChroma + value < min) newTextChroma = min
            else if (scale.textChroma + value > max) newTextChroma = max
            else newTextChroma = scale.textChroma + value
            return { ...scale, textChroma: newTextChroma }
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
    default:
      return {
        ...state,
        scales: [...state.scales],
      }
  }
}
