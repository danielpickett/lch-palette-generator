import React, { useEffect, useRef } from 'react'
import './Canvas.scss'
import chroma from 'chroma-js'
import { ColorExtended } from 'types'

export const Canvas = React.memo(
  ({ hue, size }: { hue: number; size: number }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      if (canvasRef.current) {
        canvasRef.current.height = 100 * size // px
        canvasRef.current.width = 150 * size //px

        const canvasContext = canvasRef.current.getContext('2d')

        if (canvasContext) {
          const image = canvasContext.createImageData(1500, 1)
          for (let L = 100 * size; L >= 0; L--) {
            for (let C = 0; C < 150 * size; C++) {
              const color = chroma.lch(L / size, C / size, hue) as ColorExtended
              if (!color._rgb._clipped) {
                image.data[C * 4 + 0] = color._rgb[0]
                image.data[C * 4 + 1] = color._rgb[1]
                image.data[C * 4 + 2] = color._rgb[2]
                image.data[C * 4 + 3] = 255
              } else {
                image.data[C * 4 + 3] = 0
              }
            }
            canvasContext.putImageData(image, 0, 100 * size - L)
          }
        }
      }
    })

    // console.log('rendered - Canvas')

    return (
      <div
        className="Canvas"
        style={{ height: `${100 * size}px`, width: `${150 * size}px` }}
      >
        <canvas className="Canvas__canvas" ref={canvasRef}>
          Your browser is not supported
        </canvas>
      </div>
    )
  }
)
