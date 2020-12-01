import React, { useEffect, useRef } from 'react'
import './Canvas.scss'
import chroma from 'chroma-js'
import { ColorExtended, CanvasSizeType } from 'types'

export const Canvas = React.memo(({
  hue,
  size = 3,
}: {
  hue: number
  size?: CanvasSizeType
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    console.log('canvas rendered')
    if (canvasRef.current) {
      const scale = size
      canvasRef.current.height = 100 * scale // px
      canvasRef.current.width = 150 * scale //px

      const canvasContext = canvasRef.current.getContext('2d')

      if (canvasContext) {
        const image = canvasContext.createImageData(1500, 1)
        for (let L = 100 * scale; L >= 0; L--) {
          for (let C = 0; C < 150 * scale; C++) {
            const color = chroma.lch(L / scale, C / scale, hue) as ColorExtended
            if (!color._rgb._clipped) {
              image.data[C * 4 + 0] = color._rgb[0]
              image.data[C * 4 + 1] = color._rgb[1]
              image.data[C * 4 + 2] = color._rgb[2]
              image.data[C * 4 + 3] = 255
            } else {
              image.data[C * 4 + 3] = 0
            }
          }
          // console.log(L)
          canvasContext.putImageData(image, 0, 100 * scale - L)
        }
      }
    }
  })

  return (
    <div className="Canvas">
      <canvas className="Canvas__canvas" ref={canvasRef}>
        Your browser is not supported
      </canvas>
    </div>
  )
})
