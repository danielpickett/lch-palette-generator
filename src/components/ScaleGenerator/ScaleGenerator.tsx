import React, { useCallback } from 'react'
import './ScaleGenerator.scss'
import { Plotter } from 'components'
import { Swatches } from 'components/Swatches'
import { ScaleType, ActionType } from 'types'
import { HueSlider } from 'components/HueSlider'
import chromajs from 'chroma-js'
import { Button } from 'components'

export const ScaleGenerator = React.memo(
  ({
    scale,
    hue,
    onChange,
    chromaLimit,
    size,
    scaleIndex,
  }: {
    scale: ScaleType
    hue: number
    onChange: (action: ActionType) => void
    chromaLimit: number
    size: number
    scaleIndex: number
  }) => {
    const handleChromaChange = useCallback(
      (chromaChange: number, pointIndex: number) => {
        onChange({
          changeType: 'chroma',
          scaleIndex: scaleIndex,
          pointIndex,
          value: chromaChange,
        })
      },
      [onChange, scaleIndex]
    )

    // console.log('rendered - ScaleGenerator')

    const handleSnapChroma = (value: number) => {
      scale.chromas.forEach((chroma, index) => {
        onChange({
          changeType: 'chroma',
          scaleIndex: scaleIndex,
          pointIndex: index,
          value: value,
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

    return (
      <div className="ScaleGenerator">
        <div className="ScaleGenerator__points">
          <div className="ScaleGenerator__toolbar">
            <div className="ScaleGenerator__button">
              <Button onClick={handleChromaReset} icon="reset" />
            </div>
            <div className="ScaleGenerator__button">
              <Button onClick={() => handleSnapChroma(-150)} icon="left" />
            </div>
            <div className="ScaleGenerator__button">
              <Button onClick={() => handleSnapChroma(150)} icon="right" />
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
            <div
              style={{
                color: chromajs.lch(70, chromaLimit, hue).alpha(0.5).hex(),
              }}
            >
              <Plotter
                scale={scale}
                size={size}
                onChange={handleChromaChange}
                chromaLimit={chromaLimit}
              />
            </div>
          </div>
          <div className="ScaleGenerator__footer">
            <HueSlider
              hue={scale.hue}
              onChange={onChange}
              scaleIndex={scaleIndex}
            />
          </div>
        </div>
        <Swatches scale={scale} />
      </div>
    )
  }
)
