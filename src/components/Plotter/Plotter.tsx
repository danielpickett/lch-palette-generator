import React, { ReactNode } from 'react'
import './Plotter.scss'
import { Canvas } from 'components'

import { ScaleType } from 'types'

export const Plotter = React.memo(
  ({
    scale,
    size,
    // chromaLimit,
    chromaLimitLine,
    children,
  }: {
    scale: ScaleType
    size: number
    // chromaLimit: number
    chromaLimitLine?: ReactNode
    children: ReactNode
  }) => {
    // console.log('rendered - Plotter')
    return (
      <div className="Plotter">
        <div
          className="Plotter__points"
          style={{ width: 150 * size + 'px', height: 100 * size + 'px' }}
        >
          {children}
        </div>

        <Canvas hue={scale.hue} size={size} />
        {!!chromaLimitLine && chromaLimitLine}
      </div>
    )
  }
)
