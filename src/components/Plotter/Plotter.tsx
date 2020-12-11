import React, { useCallback } from 'react'
import './Plotter.scss'
import { Canvas, ChromaSlider } from 'components'

import { ScaleType } from 'types'

export const Plotter = ({
  scale,
  onChange,
  size,
  chromaLimit,
}: {
  scale: ScaleType
  onChange: (chromaChange: number, pointIndex: number) => void
  size: number
  chromaLimit: number
}) => {
  const handleChromaChange = useCallback(
    (chromaChange: number, index: number) => {
      onChange(chromaChange, index)
    },
    [onChange]
  )

  // console.log('rendered - Plotter')

  return (
    <div className="Plotter">
      <div
        className="Plotter__colors"
        style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
      >
        {scale.chromas.map((chroma, index) => (
          <div
            className="Plotter__color"
            key={index}
            style={{
              width: `${150 * size}px`,
              top: `${(100 - scale.luminances[index]) * size}px`,
            }}
          >
            <ChromaSlider
              size={size}
              index={index}
              chroma={chroma}
              onChromaChange={handleChromaChange}
            />
          </div>
        ))}
      </div>
      
      <Canvas hue={scale.hue} size={size} />
      <div
        className="Plotter__chroma-limit-line"
        style={{ left: `${chromaLimit * size}px` }}
      />
    </div>
  )
}
