import React, { useReducer, useState } from 'react'
import './App.scss'
import {
  ChromaSlider,
  MaxChromaTester,
  Output,
  ScaleGenerator,
  Toolbar,
} from 'components'
import { getMaxChroma, parseConfig, parseScales } from 'utils'

export type ScaleType = {
  scaleName?: string
  colorNames?: string[]
  hue: number
  luminances: number[]
  chromas: number[]
}

export type ActionType = {
  changeType: 'luminance' | 'chroma' | 'hue' | 'chromaLimit'
  value: number
} & (
  | { changeType: 'hue'; scaleIndex: number; pointIndex?: undefined }
  | {
      changeType: 'luminance' | 'chroma'
      scaleIndex: number
      pointIndex: number
    }
  | {
      changeType: 'chromaLimit'
      scaleIndex?: undefined
      pointIndex?: undefined
    }
)

const reducer = (
  state: { chromaLimit: number; scales: ScaleType[] },
  { changeType, scaleIndex, pointIndex, value }: ActionType
) => {
  switch (changeType) {
    case 'chromaLimit': {
      return { ...state, chromaLimit: value }
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

function App() {
  const luminances = [97, 92, 85, 74, 61, 50, 40, 30, 20, 10],
    initChromas = [3.7, 10.8, 21.3, 30.4, 31.0, 28.4, 24.3, 20.4, 15.7, 11.4],
    colorNames = [
      '050',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ]

  const [state, handleStateChanges] = useReducer(reducer, {
    chromaLimit: 50,
    scales: [
      {
        scaleName: 'Primary',
        colorNames: colorNames,
        luminances: luminances,
        chromas: [...initChromas],
        hue: 21,
      },
      {
        scaleName: 'Secondary',
        colorNames: colorNames,
        luminances: luminances,
        chromas: [...initChromas],
        hue: 332,
      },
      {
        scaleName: 'Success',
        colorNames: colorNames,
        luminances: luminances,
        chromas: [...initChromas],
        hue: 332,
      },
      {
        scaleName: 'Warning',
        colorNames: colorNames,
        luminances: luminances,
        chromas: [...initChromas],
        hue: 332,
      },
      {
        scaleName: 'Danger',
        colorNames: colorNames,
        luminances: luminances,
        chromas: [...initChromas],
        hue: 332,
      },
    ],
  })

  // const [maxChroma, setMaxChroma] = useState(132)

  const handleChromaLimitChange = (chromaChange: number) => {
    handleStateChanges({
      changeType: 'chromaLimit',
      value:
        state.chromaLimit + chromaChange > 150
          ? 150
          : state.chromaLimit + chromaChange < 0
          ? 0
          : state.chromaLimit + chromaChange,
    })
  }

  const cssOutput = parseScales(
    state.scales,
    (x) => `  --color-${x.scaleNameKebab}-${x.colorName}: ${x.colorHex}`
  )

  const scssOutput = parseScales(
    state.scales,
    (x) =>
      `$color-${x.scaleNameKebab}-${x.colorName}: var(--color-${x.scaleNameKebab}-${x.colorName});`
  )

  const configOutput = parseConfig(state.scales)

  const size = 2

  return (
    <div className="App">
      <MaxChromaTester />
      <Toolbar>
        <ChromaSlider
          chroma={state.chromaLimit}
          onChromaChange={handleChromaLimitChange}
          size={size}
        />
      </Toolbar>

      <div className="App__scales">
        {state.scales.map((scale, scaleIndex) => (
          <ScaleGenerator
            key={scaleIndex}
            scaleIndex={scaleIndex}
            scale={scale}
            hue={scale.hue}
            onChange={handleStateChanges}
            maxChroma={state.chromaLimit}
            size={size}
          />
        ))}
      </div>

      <div className="App__output">
        <Output
          heading="Root CSS Variables"
          content={cssOutput}
          style={{ maxWidth: '325px' }}
        />
        <Output
          heading="SCSS Aliases"
          content={scssOutput}
          style={{ maxWidth: '500px' }}
        />
        <Output
          heading="Config"
          content={configOutput}
          style={{ maxWidth: '675px' }}
        />
      </div>
    </div>
  )
}

export default App
