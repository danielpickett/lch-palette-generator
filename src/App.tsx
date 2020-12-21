import React, { useReducer, useState } from 'react'
import { reducer } from 'reducer'
import './App.scss'
import { HueSliderBackground, IconButton, Output, ScaleGenerator } from 'components'
import { parseConfig, parseScales } from 'utils'
import { initialTheme } from 'config'
import { faChartScatter, faInfoCircle } from '@fortawesome/pro-light-svg-icons'

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

  const [showTextPlots, setShowTextPlots] = useState(false)
  const [showTextDetails, setShowTextDetails] = useState(false)

  return (
    <div className="App">
      <div className="App__toolbar">
        <div className="App__buttons">
          <div className="App__button">
            <IconButton
              onClick={() => setShowTextDetails(!showTextDetails)}
              faIcon={faInfoCircle}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="App__button">
            <IconButton
              onClick={() => setShowTextPlots(!showTextPlots)}
              faIcon={faChartScatter}
              title="Show plot of text color on LCH canvas"
            />
          </div>
        </div>
      </div>
      <div className="App__scales">
        {state.scales.map((scale, scaleIndex) => (
          <ScaleGenerator
            showTextPlots={showTextPlots}
            showTextDetails={showTextDetails}
            key={scaleIndex}
            scaleIndex={scaleIndex}
            scale={scale}
            onChange={handleStateChanges}
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
