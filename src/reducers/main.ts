import { ActionType, ScaleType } from 'types'

import { getMaxChroma } from 'utils'

export const reducerMain = (
  state: { chromaLimit: number; scales: ScaleType[] },
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
                    const maxChroma = getMaxChroma({
                      l: scale.luminances[pointIndex],
                      c: scale.chromas[pointIndex],
                      h: scale.hue,
                    })
                    if (
                      chroma + value > maxChroma ||
                      chroma + value > state.chromaLimit
                    )
                      return state.chromaLimit < maxChroma
                        ? state.chromaLimit
                        : maxChroma
                    return chroma + value
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
