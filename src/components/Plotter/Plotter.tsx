import React from 'react'
import './Plotter.scss'
import { Canvas, ChromaSlider } from 'components'
import { CanvasSizeType } from 'types'
import { ScaleType} from 'App'

export const Plotter = ({
  scale,
  onChange,
  size,
}: {
  scale: ScaleType
  onChange: (chromaChange: number, pointIndex: number) => void
  size: CanvasSizeType
}) => {
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
              chroma={chroma}
              onChromaChange={(chromaChange) =>
                onChange(chromaChange, index)
              }
            />
          </div>
        ))}
      </div>

      <Canvas hue={scale.hue} size={size} />
    </div>
  )
}
