import React, { useEffect, useRef, useState } from 'react'
import { ColorExtended } from 'types'
import './HueSliderBackground.scss'
import backgroundImage from './lch-hue-picker-background.png'
import chromajs from 'chroma-js'
import { getMaxChroma } from 'utils'

// const getMostSaturatedColor = (hue: number) => {
//   let lum = 20
//   let prevMaxChroma = 0

//   while (lum <= 100) {
//     const maxChroma = getMaxChroma({ l: lum, c: 0, h: hue })
//     console.log('maxChroma, lum', maxChroma, lum.toFixed(2), hue)
//     const clipped = (chromajs.lch(lum, maxChroma, hue) as ColorExtended)._rgb
//       ._clipped
//     if (maxChroma < prevMaxChroma && !clipped) {
//       console.log('-----------------found it! c: ', maxChroma, ', l: ', lum)
//       break
//     } else {
//       prevMaxChroma = maxChroma
//       lum++
//     }
//   }

//   return chromajs.lch(lum, prevMaxChroma, hue).hex()
// }

export const HueSliderBackground = ({ active }: { active: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  // const canvasRef = useRef<HTMLCanvasElement>(null)

  // console.log(getMostSaturatedColor(100))

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     canvasRef.current.height = 1 // px
  //     canvasRef.current.width = 360 //px

  //     const canvasContext = canvasRef.current.getContext('2d')

  //     if (canvasContext) {
  //       for (let H = 0; H <= 360; H++) {
  //         canvasContext.fillStyle = getMostSaturatedColor(H)
  //         canvasContext.fillRect(H, 0, 1, 1)
  //       }
  //     }
  //   }
  // })

  return (
    <div
      className={
        'HueSliderBackground' +
        (!active && !isHovered ? ' HueSliderBackground--is-hidden' : '')
      }
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {/* <canvas
        className="HueSliderBackground__canvas"
        ref={canvasRef}
      >
        Your browser is not supported
      </canvas> */}
    </div>
  )
}
