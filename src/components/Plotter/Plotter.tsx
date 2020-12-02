import React, { useCallback } from 'react'
import './Plotter.scss'
import { Canvas, ChromaSlider } from 'components'
import { WashType, CanvasSizeType } from 'types'

export type ArrOf10Nums = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
]

export const Plotter = ({
  hue,
  chromas,
  luminances,
  onChange,
  size = 3,
}: {
  hue: number
  chromas: ArrOf10Nums
  luminances: ArrOf10Nums
  onChange: (chromaChange: number, index: number) => void
  size?: CanvasSizeType
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
              chroma={chroma}
              onInstantChromaChange={(chromaChange) =>
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
