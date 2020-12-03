import React from 'react'
import './Plotter.scss'
import { Canvas, ChromaSlider } from 'components'
import { CanvasSizeType } from 'types'

export const Plotter = ({
  hue,
  chromas,
  luminances,
  onChange,
  size,
}: {
  hue: number
  chromas: number[]
  luminances: number[]
  onChange: (chromaChange: number, pointIndex: number) => void
  size: CanvasSizeType
}) => {
  return (
    <div className="Plotter">
      <div
        className="Plotter__colors"
        style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
      >
        {chromas.map((chroma, index) => (
          <div
            className="Plotter__color"
            key={index}
            style={{
              width: `${150 * size}px`,
              top: `${(100 - luminances[index]) * size}px`,
            }}
          >
            <ChromaSlider
              size={size}
              chroma={chroma}
              onChromaChange={(chromaChange) =>
                onChange(chromaChange, index)
              }
            />
          </div>
        ))}
      </div>

      <Canvas hue={hue} size={size} />
    </div>
  )
}
