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
  const outputHeightPx = useDragHandle(dragHandleRef, 200) // 45

  const derivedColors = getDerivedColors(state)
  // const derivedGreyscaleColors = getDerivedGreyscaleColors(state)
  // console.log(derivedGreyscaleColors)

  const vividTextColorsForGreyShades = extractVividTextColorsForGreyScale(
    derivedColors
  )

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
            scaleTextColors={derivedColors[scaleIndex]}
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
        <Outputs state={state} derivedColors={derivedColors} />
      </div>
    </div>
  )
}

export default App
