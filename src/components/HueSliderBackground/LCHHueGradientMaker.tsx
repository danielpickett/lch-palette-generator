import chromajs from 'chroma-js'
import React, { useEffect, useRef } from 'react'
import { ColorExtended } from 'types'
import { getMaxChroma, lch } from 'utils'

export const LCHHueGradientMaker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getMostSaturatedColor = (hue: number) => {
    let lum = 20
    let prevMaxChroma = 0

    while (lum <= 100) {
      const maxChroma = getMaxChroma({ l: lum, c: 0, h: hue })
      const clipped = lch({ l: lum, c: maxChroma, h: hue })._rgb._clipped
      if (maxChroma < prevMaxChroma && !clipped) {
        break
      } else {
        prevMaxChroma = maxChroma
        lum++
      }
    }

    return chromajs.lch(lum, prevMaxChroma, hue).hex()
  }

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.height = 1 // px
      canvasRef.current.width = 360 //px

      const canvasContext = canvasRef.current.getContext('2d')

      if (canvasContext) {
        for (let H = 0; H <= 360; H++) {
          canvasContext.fillStyle = getMostSaturatedColor(H)
          canvasContext.fillRect(H, 0, 1, 1)
        }
      }
    }
  })

  return <canvas ref={canvasRef}>Your browser is not supported</canvas>
}
