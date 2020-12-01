import React, { useCallback, useEffect } from 'react'
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
  const handleOnChange = useCallback((chroma: number, index: number) => {
    const newWashes = [...washes]
    newWashes[index] = {
      luminance: newWashes[index].luminance,
      chroma: chroma
    }
    onChange(newWashes)
    console.log('chroma: ', chroma, '\nindex: ', index)
  }, [washes, onChange])

  return (
    <div className="Plotter">
      <div
        className="Plotter__points"
        style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
      >
        {washes.map((wash, index) => (
          <PlotterPoint
            key={index}
            wash={wash}
            onChange={(chroma) => handleOnChange(chroma, index)}
          />
        ))}
      </div>

      <Canvas hue={hue} size={size} />
    </div>
  )
}
