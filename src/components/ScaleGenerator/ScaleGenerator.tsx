import React from 'react'
import './ScaleGenerator.scss'
import { Plotter, Slider } from 'components'
import { Swatches } from 'components/Swatches'
import { ScaleType, ActionType } from 'types'
import { IconButton } from 'components'
import { ChromaSlider } from 'components/ChromaSlider'
import { luminances, colorNames } from 'config'
import {
  faArrowToRight,
  faArrowToLeft,
  faUndo,
} from '@fortawesome/pro-light-svg-icons'
import { getMaxChroma } from 'utils'
import { HueSliderBackground } from 'components/HueSliderBackground'

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
        changeType: 'textChroma',
        scaleIndex,
        value: diff,
        min: 0,
        max: 150,
      })
    }

    // console.log('rendered - ScaleGenerator')

    return (
      <div className="ScaleGenerator">
        <div className="ScaleGenerator__points">
          <div className="ScaleGenerator__toolbar">
            <div className="ScaleGenerator__buttons">
              <div className="ScaleGenerator__button">
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
            <div className="ScaleGenerator__text-chroma">
              <Slider
                value={scale.textChroma}
                min={0}
                max={150}
                width={150 * size + 'px'}
                onChange={handleTextChromaChange}
                background={
                  <div
                    style={{
                      backgroundColor: 'white',
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        height: '1px',
                        backgroundColor: 'silver',
                        width: '100%',
                      }}
                    />
                  </div>
                }
              />
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
            <div>
              <Plotter scale={scale} size={size}>
                <div
                  className="ScaleGenerator__limit-line"
                  style={{ left: `${scale.textChroma * size}px` }}
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
          </div>
          <div className="ScaleGenerator__footer">
            <div className="ScaleGenerator__hue">h: {scale.hue.toFixed(1)}</div>

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
