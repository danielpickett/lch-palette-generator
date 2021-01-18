import React, { useCallback, useReducer, useRef, useState } from 'react'
import { mainReducer } from 'reducers'
import './PaletteGenerator.scss'
import { Outputs, ScaleGenerator, Toolbar } from './components'
import { useDragHandle } from 'hooks'
import theme from 'config/beewo-theme.json'
import { extractVividTextColorsForGreyScale, getDerivedColors } from 'utils'
import ReactDOM from 'react-dom'

export const PaletteGenerator = () => {
  const defaults = {
    showText: true,
    showTextDetails: false,
    showTextPlots: false,
    showTextChromaControls: false,
    showColorOutputs: false,
    fullscreen: false,
    size: 1,
    outputInitialHeight: 42
  }

  const [state, handleStateChanges] = useReducer(mainReducer, theme)

  const [showText, setShowText] = useState(defaults.showText) // showText
  const handleShowTextChange = useCallback(() => setShowText(!showText), [
    setShowText,
    showText,
  ])

  const [showTextDetails, setShowTextDetails] = useState(
    defaults.showTextDetails
  ) // showTextDetails
  const handleShowTextDetailsChange = useCallback(
    () => setShowTextDetails(!showTextDetails),
    [setShowTextDetails, showTextDetails]
  )

  const [showTextPlots, setShowTextPlots] = useState(defaults.showTextPlots) // showTextPlots
  const handleShowTextPlotsChange = useCallback(
    () => setShowTextPlots(!showTextPlots),
    [setShowTextPlots, showTextPlots]
  )

  const [showTextChromaControls, setShowTextChromaControls] = useState(
    defaults.showTextChromaControls
  ) // showTextChromaControls
  const handleShowTextChromaControlsChange = useCallback(
    () => setShowTextChromaControls(!showTextChromaControls),
    [setShowTextChromaControls, showTextChromaControls]
  )

  const [showColorOutputs, setShowColorOutputs] = useState(
    defaults.showColorOutputs
  ) // showColorOutputs
  const handleShowColorOutputsChange = useCallback(
    () => setShowColorOutputs(!showColorOutputs),
    [setShowColorOutputs, showColorOutputs]
  )

  const [fullscreen, setFullscreen] = useState(defaults.fullscreen) // fullscreen
  const handleFullscreenChange = useCallback(() => setFullscreen(!fullscreen), [
    setFullscreen,
    fullscreen,
  ])

  const outputDragHandleRef = useRef<HTMLDivElement>(null)
  const outputHeightPx = useDragHandle(outputDragHandleRef, defaults.outputInitialHeight, 42) // 45

  const computedTextColors = getDerivedColors(state)

  const vividTextColorsForGreyShades = extractVividTextColorsForGreyScale(
    computedTextColors
  )

  const [size, setSize] = useState(defaults.size)
  const handleCanvasSizeChange = (size: number) => {
    setSize(size)
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={
            'PaletteGenerator' +
            (fullscreen ? ' PaletteGenerator--is-fullscreen' : '')
          }
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
