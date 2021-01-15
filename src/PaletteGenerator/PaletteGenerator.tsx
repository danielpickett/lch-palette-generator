import React, { useCallback, useReducer, useRef, useState } from 'react'
import { mainReducer } from 'reducers'
import './PaletteGenerator.scss'
import { Outputs, ScaleGenerator, Toolbar } from './components'
import { useDragHandle } from 'hooks'
import theme from 'config/beewo-theme.json'
import {
  extractVividTextColorsForGreyScale,
  getDerivedColors,
  // getDerivedGreyscaleColors,
} from 'utils'
import ReactDOM from 'react-dom'

export const PaletteGenerator = () => {
  const [state, handleStateChanges] = useReducer(mainReducer, theme)

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

  const [showText, setShowText] = useState(false)
  const handleShowTextChange = useCallback(() => setShowText(!showText), [
    setShowText,
    showText,
  ])

  const [showTextChromaControls, setShowTextChromaControls] = useState(false)
  const handleShowTextChromaControlsChange = useCallback(
    () => setShowTextChromaControls(!showTextChromaControls),
    [setShowTextChromaControls, showTextChromaControls]
  )

  const [showColorOutputs, setShowColorOutputs] = useState(false)
  const handleShowColorOutputsChange = useCallback(
    () => setShowColorOutputs(!showColorOutputs),
    [setShowColorOutputs, showColorOutputs]
  )

  const [fullscreen, setFullscreen] = useState(false)
  const handleFullscreenChange = useCallback(() => setFullscreen(!fullscreen), [
    setFullscreen,
    fullscreen,
  ])

  const outputDragHandleRef = useRef<HTMLDivElement>(null)
  const outputHeightPx = useDragHandle(outputDragHandleRef, 45) // 45

  const computedTextColors = getDerivedColors(state)

  const vividTextColorsForGreyShades = extractVividTextColorsForGreyScale(
    computedTextColors
  )

  const [size, setSize] = useState(1.25)
  const handleCanvasSizeChange = (size: number) => {
    setSize(size)
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="PaletteGenerator"
          style={
            fullscreen
              ? { height: '100vh', width: '100vw', right: 0, bottom: 0 }
              : undefined
          }
        >
          <Toolbar
            onShowTextDetailsChange={handleShowTextDetailsChange}
            onShowTextPlotsChange={handleShowTextPlotsChange}
            onShowTextChange={handleShowTextChange}
            onShowColorOutputsChange={handleShowColorOutputsChange}
            onShowTextChromaControlsChange={handleShowTextChromaControlsChange}
            onCanvasSizeChange={handleCanvasSizeChange}
            onFullscreenChange={handleFullscreenChange}
            canvasSize={size}
          />
          <div className="PaletteGenerator__scales">
            {state.scales.map((scale, scaleIndex) => (
              <ScaleGenerator
                showText={showText}
                showTextPlots={showTextPlots}
                showTextDetails={showTextDetails}
                showColorOutputs={showColorOutputs}
                showTextChromaControls={showTextChromaControls}
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
            <div className="PaletteGenerator__the-end"></div>
          </div>

          <div
            className="PaletteGenerator__outputs"
            style={{
              // minHeight: outputHeightPx + 'px',
              // maxHeight: outputHeightPx + 'px',
              flexBasis: outputHeightPx + 'px',
            }}
          >
            <div
              className="PaletteGenerator__drag-handle"
              ref={outputDragHandleRef}
            />
            <Outputs
              state={state}
              textColors={computedTextColors}
              vividTextColorsForGreyShades={vividTextColorsForGreyShades}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
