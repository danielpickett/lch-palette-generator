import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { mainReducer } from 'reducers'
import './App.scss'
import { IconButton, Output, ScaleGenerator } from 'components'
import { parseConfig, parseScales } from 'utils'
import theme from 'config/beewo-theme.json'
import { faChartScatter, faInfoCircle } from '@fortawesome/pro-light-svg-icons'

export type SetTextColorsType = React.Dispatch<
  React.SetStateAction<{
    [key: string]: string
  }>
>

function App() {
  const [state, handleStateChanges] = useReducer(mainReducer, theme)
  const [textColors, setTextColors] = useState<{
    [key: string]: string
  }>({})

  const cssOutput =
    ':root {\n' +
    parseScales(
      state.scales,
      (x) => `  --color-${x.scaleNameKebab}-${x.colorName}: ${x.colorHex}`
    ) +
    '\n}\n'

  const cssTextColorsOutput =
    ':root {\n' +
    Object.entries(textColors)
      .map((entry) => {
        const [key, value] = entry
        return '  ' + key + ': ' + value + ';'
      })
      .join('\n') +
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

  const [handleIsDragging, setHandleIsDragging] = useState(false)
  const [outputHeightPx, setOutputHeightPx] = useState(200)

  const handleMouseDown = () => setHandleIsDragging(true)
  const handleMouseUp = useCallback(() => setHandleIsDragging(false), [
    setHandleIsDragging,
  ])
  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    let heightChange = e.movementY

    setOutputHeightPx((prev) => {
      const newHeight = prev + heightChange * -1
      return newHeight < 100 ? 100 : newHeight
    })
  }, [])

  useEffect(() => {
    if (handleIsDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'auto'
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleIsDragging, handleMouseUp, handleMouseMove])

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
            setTextColors={setTextColors}
            size={size}
          />
        ))}
        <div className="App__the-end"></div>
      </div>

      <div
        className="App__outputs"
        style={{ flexBasis: outputHeightPx + 'px' }}
      >
        <div className="App__drag-handle" onMouseDown={handleMouseDown} />
        <Output heading="Palette Color CSS" content={cssOutput} />
        <Output heading="Text Color CSS" content={cssTextColorsOutput} />
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
