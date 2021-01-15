import React from 'react'
import './Toolbar.scss'
import {
  faChartScatter,
  faInfoCircle,
  faInfoSquare,
  faText,
  faTextWidth,
  faExpand
} from '@fortawesome/pro-light-svg-icons'
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
        <div className="Toolbar__buttons">
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextDetailsChange}
              faIcon={faInfoCircle}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowColorOutputsChange}
              faIcon={faInfoSquare}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextPlotsChange}
              faIcon={faChartScatter}
              title="Show plot of text color on LCH canvas"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextChange}
              faIcon={faText}
              title="Show text sample"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextChromaControlsChange}
              faIcon={faTextWidth}
              title="Show text sample"
            />
          </div>

          <input
            className="Toolbar__number-input"
            title="Change the size of the canvas"
            type="number"
            min={1}
            max={6}
            value={canvasSize}
            onChange={(e) => onCanvasSizeChange(+e.target.value)}
          />
          <div className="Toolbar__button" style={{marginLeft: 'auto'}}>
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
