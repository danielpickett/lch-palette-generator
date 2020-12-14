import React, { useEffect, useReducer } from 'react'
import { reducer } from 'reducer'
import './App.scss'
import { ChromaSlider, Output, ScaleGenerator, Toolbar } from 'components'
import { parseConfig, parseScales } from 'utils'
import initialTheme from 'themes/initial.json'

function App() {
  const [state, handleStateChanges] = useReducer(reducer, initialTheme)

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

  const cssOutput =
    ':root {\n' +
    parseScales(
      state.scales,
      (x) => `  --color-${x.scaleNameKebab}-${x.colorName}: ${x.colorHex}`
    ) +
    '\n}\n'

  const scssOutput =
    parseScales(
      state.scales,
      (x) =>
        `$color-${x.scaleNameKebab}-${x.colorName}: var(--color-${x.scaleNameKebab}-${x.colorName});`
    ) + '\n'

  const configOutput = parseConfig(state) + '\n'

  const size = 2

  useEffect(() => {
    // console.log(getMaxChroma({l:50, c:100, h:268}))
    // getMaxChroma({l:50, c:100, h:268})
  })

  return (
    <div className="App">
      <div className="App__toolbar">
        <Toolbar>
          <div style={{ width: '48px', padding: '0 4px' }}>
            {state.chromaLimit.toFixed(1)}
          </div>
          {/* <ChromaSlider
            chroma={state.chromaLimit}
            onChromaChange={handleChromaLimitChange}
            index={0}
            size={size}
          /> */}
        </Toolbar>
      </div>

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
          // style={{ maxWidth: '325px' }}
        />
        <Output
          heading="SCSS Aliases"
          content={scssOutput}
          // style={{ maxWidth: '500px' }}
        />
        <Output
          heading="Config"
          content={configOutput}
          // style={{ maxWidth: '675px' }}
        />
      </div>
    </div>
  )
}

export default App
