import { ActionType, StateType } from 'types'

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.changeType) {
    case 'chromaLimit': {
      return { ...state, chromaLimit: action.value }
    }
    case 'chromaReset': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? {
                ...scale,
                chromas: [
                  3.7,
                  10.8,
                  21.3,
                  30.4,
                  31.0,
                  28.4,
                  24.3,
                  20.4,
                  15.7,
                  11.4,
                ],
              }
            : scale
        ),
      }
    }

    case 'textChroma': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? { ...scale, textChroma: scale.textChroma + action.value }
            : scale
        ),
      }
    }
    case 'hue': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? { ...scale, hue: scale.hue + action.value }
            : scale
        ),
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
    case 'luminance': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === action.scaleIndex
            ? {
                ...scale,
                luminances: scale.luminances.map((lum, index) => {
                  if (index === action.pointIndex) {
                    if (lum + action.value < action.min) return action.min
                    if (lum + action.value > action.max) return action.max
                    return lum + action.value
                  }
                  return lum
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
