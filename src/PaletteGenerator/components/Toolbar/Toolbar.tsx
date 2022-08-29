import React from 'react'
import './Toolbar.scss'
import {
  faProjectDiagram,
  faGlasses,
  faHashtag,
  faFont,
  faSlidersH,
  faExpand,
} from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '../../components'

export const Toolbar = React.memo(
  ({
    onShowTextDetailsChange,
    onShowTextPlotsChange,
    onShowTextChange,
    onShowColorOutputsChange,
    onShowTextChromaControlsChange,
    onFullscreenChange,
    onCanvasSizeChange,
    canvasSize,
  }: {
    onShowTextDetailsChange: () => void
    onShowTextPlotsChange: () => void
    onShowTextChange: () => void
    onShowColorOutputsChange: () => void
    onShowTextChromaControlsChange: () => void
    onFullscreenChange: () => void
    onCanvasSizeChange: (arg: number) => void
    canvasSize: number
  }) => {
    return (
      <div className="Toolbar">
        <div
          className="Toolbar__buttons"
          style={{ flex: `0 0 ${150 * canvasSize + 48 - 8}px` }}
        >
          <input
            className="Toolbar__number-input"
            title="Change the size of the canvas"
            type="number"
            min={1}
            max={6}
            value={canvasSize}
            onChange={(e) => onCanvasSizeChange(+e.target.value)}
          />

          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextChromaControlsChange}
              faIcon={faSlidersH}
              title="Show text sample"
            />
          </div>

          {/* <div className="Toolbar__divider" /> */}
        </div>
        <div className="Toolbar__buttons" style={{ flexGrow: 1 }}>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextChange}
              faIcon={faFont}
              title="Show text samples"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowColorOutputsChange}
              faIcon={faHashtag}
              title="show hex code for swatch colors"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextPlotsChange}
              faIcon={faProjectDiagram}
              title="Show plot of text color on LCH canvas"
            />
          </div>

          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextDetailsChange}
              faIcon={faGlasses}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="Toolbar__comment">
            use these toolbar buttons to display or hide the nerdy data stuff
          </div>
          <div className="Toolbar__button" style={{ marginLeft: 'auto' }}>
            <IconButton
              onClick={onFullscreenChange}
              faIcon={faExpand}
              title="Make full screen"
            />
          </div>
        </div>
      </div>
    )
  }
)
