import React, { useState } from 'react'
import './ScaleGenerator.scss'
import { Plotter, Slider } from 'components'
import { Swatches } from 'components/Swatches'
import { ScaleType, ActionType } from 'types'
import { IconButton } from 'components'
import { ChromaSlider } from 'components/ChromaSlider'
import { colorNames, luminances } from 'config'
import chromajs from 'chroma-js'
import {
  faArrowToRight,
  faArrowToLeft,
  faUndo,
  faFillDrip,
} from '@fortawesome/pro-light-svg-icons'
import { getMaxChroma, lch } from 'utils'
import { HueSliderBackground } from 'components/HueSliderBackground'
import { ChromaLimitSlider } from 'components/ChromaLimitSlider'
import { TargetColorInput } from 'components/TargetColorInput'

export const ScaleGenerator = React.memo(
  ({
    scale,
    onChange,
    size,
    scaleIndex,
    showTextPlots,
    showTextDetails,
  }: {
    scale: ScaleType
    onChange: (action: ActionType) => void
    size: number
    scaleIndex: number
    showTextPlots: boolean
    showTextDetails: boolean
  }) => {
    const handleSnapChroma = (value: number) => {
      scale.chromas.forEach((chroma, pointIndex) => {
        const maxChroma = getMaxChroma({
          l: luminances[pointIndex],
          c: chroma,
          h: scale.hue,
        })
        onChange({
          changeType: 'chroma',
          scaleIndex: scaleIndex,
          pointIndex: pointIndex,
          value: value,
          min: 0,
          max: maxChroma,
        })
      })
    }

    const handleChromaReset = () => {
      scale.chromas.forEach(() => {
        onChange({
          changeType: 'chromaReset',
          scaleIndex: scaleIndex,
          value: 0,
        })
      })
    }

    const handleHueChange = (value: number, diff: number) => {
      onChange({ changeType: 'hue', scaleIndex, value: diff, min: 0, max: 360 })
    }

    const handleTextChromaChange = (value: number, diff: number) => {
      onChange({
        changeType: 'chromaticTextChroma',
        scaleIndex,
        value: diff,
        min: 0,
        max: 150,
      })
    }
    const handleVividTextChromaChange = (value: number, diff: number) => {
      onChange({
        changeType: 'vividTextChroma',
        scaleIndex,
        value: diff,
        min: 0,
        max: 150,
      })
    }

    const [showTargetColorInput, setShowTargetColorInput] = useState(false)
    const handleToggleTargetColorInput = () => {
      setShowTargetColorInput(!showTargetColorInput)
    }

    // console.log('rendered - ScaleGenerator')

    const targetColor = (() => {
      if (scale.targetColorString) {
        try {
          const c = chromajs(scale.targetColorString)
          return { lch: lch(c.lch()), hex: c.hex() }
        } catch (error) {
          return null
        }
      }
    })()

    return (
      <div className="ScaleGenerator">
        <div className="ScaleGenerator__points">
          <div
            className="ScaleGenerator__target-color-sample"
            style={{ backgroundColor: scale.targetColorString }}
          />
          <div className="ScaleGenerator__target-color-nickname">
            {scale.targetColorNickname}
          </div>
          <div className="ScaleGenerator__toolbar">
            <div className="ScaleGenerator__buttons">
              <div
                className="ScaleGenerator__button"
                style={{ position: 'relative' }}
              >
                <IconButton
                  onClick={handleToggleTargetColorInput}
                  faIcon={faFillDrip}
                  title="Enter a target color for this scale"
                />
                {showTargetColorInput && (
                  <div className="ScaleGenerator__target-color-input">
                    <TargetColorInput
                      value={scale.targetColorString || ''}
                      scaleIndex={scaleIndex}
                      onChange={onChange}
                      onBlur={() => setShowTargetColorInput(false)}
                    />
                  </div>
                )}
              </div>
              <div
                className="ScaleGenerator__button"
                style={{ marginLeft: 'auto' }}
              >
                <IconButton
                  onClick={handleChromaReset}
                  faIcon={faUndo}
                  title="Reset chromas to a curve that is safe for all hues"
                />
              </div>
              <div className="ScaleGenerator__button">
                <IconButton
                  onClick={() => handleSnapChroma(-150)}
                  faIcon={faArrowToLeft}
                  title="Snap all chromas to zero"
                />
              </div>
              <div className="ScaleGenerator__button">
                <IconButton
                  onClick={() => handleSnapChroma(150)}
                  faIcon={faArrowToRight}
                  title="Snap all chromas to maximum"
                />
              </div>
            </div>
            <div className="ScaleGenerator__toolbar-sliders">
              <div className="ScaleGenerator__toolbar-slider">
                <div>reg</div>
                <ChromaLimitSlider
                  value={scale.chromaticTextChroma}
                  onChange={handleTextChromaChange}
                  size={size}
                />
              </div>
              <div className="ScaleGenerator__toolbar-slider">
                <div>vivid</div>
                <ChromaLimitSlider
                  value={scale.vividTextChroma}
                  onChange={handleVividTextChromaChange}
                  size={size}
                />
              </div>
            </div>
          </div>
          <div className="ScaleGenerator__plot">
            <div className="ScaleGenerator__chroma-details">
              {colorNames.map((colorName, index) =>
                index === 0 ? null : (
                  <div
                    className="ScaleGenerator__chroma-detail"
                    key={index}
                    style={{ top: `${(100 - luminances[index]) * size}px` }}
                  >
                    {colorName}
                  </div>
                )
              )}
            </div>

            <Plotter scale={scale} size={size}>
              {targetColor && (
                <div
                  className="ScaleGenerator__target-color-crosshairs"
                  style={{
                    left: `${Math.round(targetColor.lch.c * size)}px`,
                    top: `${(100 - Math.round(targetColor.lch.l)) * size}px`,
                    backgroundColor: targetColor.hex,
                  }}
                />
              )}
              <div
                className="ScaleGenerator__limit-line"
                style={{ left: `${scale.chromaticTextChroma * size}px` }}
              />
              <div
                className="ScaleGenerator__limit-line"
                style={{ left: `${scale.vividTextChroma * size}px` }}
              />
              {scale.chromas.map((chroma, pointIndex) =>
                pointIndex === 0 ? null : (
                  <div
                    className="ScaleGenerator__point"
                    key={pointIndex}
                    style={{
                      width: `${150 * size}px`,
                      top: `${(100 - luminances[pointIndex]) * size}px`,
                    }}
                  >
                    <ChromaSlider
                      size={size}
                      scaleIndex={scaleIndex}
                      pointIndex={pointIndex}
                      color={{
                        l: luminances[pointIndex],
                        c: scale.chromas[pointIndex],
                        h: scale.hue,
                      }}
                      onChange={onChange}
                    />
                  </div>
                )
              )}
            </Plotter>
          </div>
          <div className="ScaleGenerator__footer">
            <div className="ScaleGenerator__hue">h: {scale.hue.toFixed(1)}</div>
            <div className="ScaleGenerator__hue-slider">
              <Slider
                value={scale.hue}
                min={0}
                max={360}
                width={150 * size + 'px'}
                onChange={handleHueChange}
                renderBackground={(isDragging) => (
                  <HueSliderBackground active={isDragging} />
                )}
              />
            </div>
          </div>
        </div>
        <Swatches
          scale={scale}
          scaleIndex={scaleIndex}
          showTextPlots={showTextPlots}
          showTextDetails={showTextDetails}
        />
      </div>
    )
  }
)
