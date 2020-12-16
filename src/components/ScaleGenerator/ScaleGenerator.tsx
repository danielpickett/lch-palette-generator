import React from 'react'
import './ScaleGenerator.scss'
import { Plotter, Slider } from 'components'
import { Swatches } from 'components/Swatches'
import { ScaleType, ActionType } from 'types'
import { IconButton } from 'components'
import { ChromaSlider } from 'components/ChromaSlider'
import {
  faArrowToRight,
  faArrowToLeft,
  faUndo,
} from '@fortawesome/pro-light-svg-icons'
import { getMaxChroma } from 'utils'

export const ScaleGenerator = React.memo(
  ({
    scale,
    onChange,
    chromaLimit,
    size,
    scaleIndex,
  }: {
    scale: ScaleType
    onChange: (action: ActionType) => void
    chromaLimit: number
    size: number
    scaleIndex: number
  }) => {
    const handleSnapChroma = (value: number) => {
      scale.chromas.forEach((chroma, pointIndex) => {
        const maxChroma = getMaxChroma({
          l: scale.luminances[pointIndex],
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
      onChange({ changeType: 'hue', scaleIndex, value: diff })
    }

    const handleTextChromaChange = (value: number, diff: number) => {
      onChange({ changeType: 'textChroma', scaleIndex, value: diff })
    }

    // console.log('rendered - ScaleGenerator')

    return (
      <div className="ScaleGenerator">
        <div className="ScaleGenerator__points">
          <div className="ScaleGenerator__toolbar">
            <div className="ScaleGenerator__buttons">
              <div className="ScaleGenerator__button">
                <IconButton onClick={handleChromaReset} faIcon={faUndo} />
              </div>
              <div className="ScaleGenerator__button">
                <IconButton
                  onClick={() => handleSnapChroma(-150)}
                  faIcon={faArrowToLeft}
                />
              </div>
              <div className="ScaleGenerator__button">
                <IconButton
                  onClick={() => handleSnapChroma(150)}
                  faIcon={faArrowToRight}
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
                    <div style={{}} />
                  </div>
                }
              />
            </div>
          </div>
          <div className="ScaleGenerator__plot">
            <div className="ScaleGenerator__chroma-details">
              {scale.colorNames?.map((colorName, index) => (
                <div
                  className="ScaleGenerator__chroma-detail"
                  key={index}
                  style={{ top: `${(100 - scale.luminances[index]) * size}px` }}
                >
                  {colorName}
                </div>
              ))}
            </div>
            <div>
              <Plotter scale={scale} size={size}>
                <div
                  className="ScaleGenerator__limit-line"
                  style={{ left: `${chromaLimit * size}px` }}
                />
                <div
                  className="ScaleGenerator__limit-line"
                  style={{ left: `${scale.textChroma * size}px` }}
                />
                {scale.chromas.map((chroma, pointIndex) => (
                  <div
                    className="ScaleGenerator__point"
                    key={pointIndex}
                    style={{
                      width: `${150 * size}px`,
                      top: `${(100 - scale.luminances[pointIndex]) * size}px`,
                    }}
                  >
                    <ChromaSlider
                      size={size}
                      scaleIndex={scaleIndex}
                      pointIndex={pointIndex}
                      color={{
                        l: scale.luminances[pointIndex],
                        c: scale.chromas[pointIndex],
                        h: scale.hue,
                      }}
                      onChange={onChange}
                    />
                  </div>
                ))}
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
              background={
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '100%',
                    width: '100%',
                  }}
                ></div>
              }
            />
          </div>
        </div>
        <Swatches scale={scale} />
      </div>
    )
  }
)
