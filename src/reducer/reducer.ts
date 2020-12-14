import { ActionType, StateType } from 'types'

export const reducer = (
  state: StateType,
  { changeType, scaleIndex, pointIndex, value }: ActionType
) => {
  switch (changeType) {
    case 'chromaLimit': {
      return { ...state, chromaLimit: value }
    }
    case 'chromaReset': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === scaleIndex
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
    case 'hue': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === scaleIndex ? { ...scale, hue: value } : scale
        ),
      }
    }
    case 'chroma': {
      return {
        ...state,
        scales: state.scales.map((scale, index) =>
          index === scaleIndex
            ? {
                ...scale,
                chromas: scale.chromas.map((chroma, index) => {
                  if (index === pointIndex) {
                    if (chroma + value < 0) return 0
                    if (chroma + value > 150) return 150
                    return chroma + value
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
          index === scaleIndex
            ? {
                ...scale,
                luminances: scale.luminances.map((lum, index) => {
                  if (index === pointIndex) {
                    if (lum + value < 0) return 0
                    if (lum + value > 100) return 100
                    return lum + value
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
