import React, { ReactNode, useCallback } from 'react'
import './Plotter.scss'
import { Canvas, ChromaSlider } from 'components'

import { ScaleType } from 'types'

export const Plotter = ({
  scale,
  size,
  chromaLimit,
  children,
}: {
  scale: ScaleType
  size: number
  chromaLimit: number
  children: ReactNode
}) => {
  return (
    <div className="Plotter">
      <div
        className="Plotter__points"
        style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
      >
        {children}
      </div>

      <Canvas hue={scale.hue} size={size} />
      <div
        className="Plotter__chroma-limit-line"
        style={{ left: `${chromaLimit * size}px` }}
      />
    </div>
  )
}
