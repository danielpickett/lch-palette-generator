import React, { useCallback } from 'react'
import './Plotter.scss'
import { Canvas, PlotterPoint } from 'components'
import { WashType, CanvasSizeType } from 'types'

export const Plotter = ({
  hue,
  washes,
  onChange,
  size = 3,
}: {
  hue: number
  washes: WashType[]
  onChange: (newWashes: WashType[]) => void
  size?: CanvasSizeType
}) => {
  const handleOnChange = useCallback(
    (chroma: number, i: number) =>
      onChange([
        ...washes.map((wash, j) =>
          j === i ? { luminance: wash.luminance, chroma: chroma } : wash
        ),
      ]),
    [washes, onChange]
  )

  return (
    <div className="Plotter">
      <div
        className="Plotter__points"
        style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
      >
        <div className="Plotter__point" >
          {washes.map((wash, index) => (
            <PlotterPoint
              key={index}
              wash={wash}
              hue={hue}
              onChromaChange={(chroma) => handleOnChange(chroma, index)}
            />
          ))}
        </div>
      </div>

      <Canvas hue={hue} size={size} />
    </div>
  )
}
