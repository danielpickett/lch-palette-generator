import React, { useReducer } from 'react'
import { reducer } from 'reducer'
import './App.scss'
import { Output, ScaleGenerator } from 'components'
import { parseConfig, parseScales } from 'utils'
import initialTheme from 'themes/initial.json'

function App() {
  const [state, handleStateChanges] = useReducer(reducer, initialTheme)

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

  return (
    <div className="App">
      <div className="App__scales">
        {state.scales.map((scale, scaleIndex) => (
          <ScaleGenerator
            key={scaleIndex}
            scaleIndex={scaleIndex}
            scale={scale}
            onChange={handleStateChanges}
            chromaLimit={state.chromaLimit}
            size={size}
          />
        ))}
      </div>

      <div className="App__output">
        <Output heading="Root CSS Variables" content={cssOutput} />
        <Output heading="SCSS Aliases" content={scssOutput} />
        <Output heading="Config" content={configOutput} />
      </div>
    </div>
  )
}

export default App
