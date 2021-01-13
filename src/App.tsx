import React, { useCallback, useReducer, useRef, useState } from 'react'
import { mainReducer } from 'reducers'
import './App.scss'
import { Outputs, ScaleGenerator, Toolbar } from 'components'
import { useDragHandle } from 'hooks'
import theme from 'config/beewo-theme.json'
import {
  extractVividTextColorsForGreyScale,
  getDerivedColors,
  // getDerivedGreyscaleColors,
} from 'utils'

function App() {
  const [state, handleStateChanges] = useReducer(mainReducer, theme)

  const size = 2

  const [showTextDetails, setShowTextDetails] = useState(false)
  const handleShowTextDetailsChange = useCallback(
    () => setShowTextDetails(!showTextDetails),
    [setShowTextDetails, showTextDetails]
  )

  const [showTextPlots, setShowTextPlots] = useState(false)
  const handleShowTextPlotsChange = useCallback(
    () => setShowTextPlots(!showTextPlots),
    [setShowTextPlots, showTextPlots]
  )

  const dragHandleRef = useRef<HTMLDivElement>(null)
  const outputHeightPx = useDragHandle(dragHandleRef, 800) // 45

  const computedTextColors = getDerivedColors(state)

  const vividTextColorsForGreyShades = extractVividTextColorsForGreyScale(
    computedTextColors
  )

  // console.log('vividTextColorsForGreyShades', vividTextColorsForGreyShades)

  return (
    <div className="App">
      <Toolbar
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
            scaleTextColors={computedTextColors[scaleIndex]}
            vividTextColorsForGreyShades={
              scaleIndex === 0 ? vividTextColorsForGreyShades : undefined
            }
            onChange={handleStateChanges}
            size={size}
          />
        ))}
        <div className="App__the-end"></div>
      </div>

      <div
        className="App__outputs"
        style={{
          minHeight: outputHeightPx + 'px',
          maxHeight: outputHeightPx + 'px',
        }}
      >
        <div className="App__drag-handle" ref={dragHandleRef} />
        <Outputs
          state={state}
          textColors={computedTextColors}
          vividTextColorsForGreyShades={vividTextColorsForGreyShades}
        />
      </div>
    </div>
  )
}

export default App
