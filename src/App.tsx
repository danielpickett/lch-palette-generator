import React, { useCallback, useReducer, useState } from 'react'
import { reducer } from 'reducer'
import './App.scss'
import { IconButton, Output, ScaleGenerator } from 'components'
import { parseConfig, parseScales } from 'utils'
import theme from 'config/initial-theme.json'
import { faChartScatter, faInfoCircle } from '@fortawesome/pro-light-svg-icons'

function App() {
  const [state, handleStateChanges] = useReducer(reducer, theme)

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

  const [showTextDetails, setShowTextDetails] = useState(false)
  const handleShowTextDetailsChange = useCallback(
    () => setShowTextDetails(!showTextDetails),
    [setShowTextDetails, showTextDetails]
  )

  const [showTextPlots, setShowTextPlots] = useState(true)
  const handleShowTextPlotsChange = useCallback(
    () => setShowTextPlots(!showTextPlots),
    [setShowTextPlots, showTextPlots]
  )

  return (
    <div className="App">
      <AppToolbar
        onShowTextDetailsChange={handleShowTextDetailsChange}
        onShowTextPlotsChange={handleShowTextPlotsChange}
      />
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

const AppToolbar = React.memo(
  ({
    onShowTextDetailsChange,
    onShowTextPlotsChange,
  }: {
    onShowTextDetailsChange: () => void
    onShowTextPlotsChange: () => void
  }) => {
    return (
      <div className="App__toolbar">
        <div className="App__buttons">
          <div className="App__button">
            <IconButton
              onClick={onShowTextDetailsChange}
              faIcon={faInfoCircle}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="App__button">
            <IconButton
              onClick={onShowTextPlotsChange}
              faIcon={faChartScatter}
              title="Show plot of text color on LCH canvas"
            />
          </div>
        </div>
      </div>
    )
  }
)
