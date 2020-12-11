import React, { useReducer } from 'react'

import { reducerMain } from 'reducers'
import './App.scss'
import { ChromaSlider, Output, ScaleGenerator, Toolbar } from 'components'
import { parseConfig, parseScales } from 'utils'

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

  const [state, handleStateChanges] = useReducer(reducerMain, {
    chromaLimit: 150,
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
      <Toolbar>
        <div style={{ width: '48px', padding: '0 4px' }}>{state.chromaLimit.toFixed(1)}</div>
        <ChromaSlider
          chroma={state.chromaLimit}
          onChromaChange={handleChromaLimitChange}
          index={0}
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
            chromaLimit={state.chromaLimit}
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
