import React from 'react'
import { LCHColor } from 'types'
import './Text.scss'
import chromajs from 'chroma-js'
// import { getMaxChroma } from 'utils'

export const Text = ({ bgColor }: { bgColor: LCHColor }) => {
  const bgColorColorHex = chromajs.lch(bgColor.l, bgColor.c, bgColor.h).hex()

  const normalLum = (() => {
    if (bgColor.l > 50) {
      // dark text on light colors
      // const newLum 
      return bgColor.l - 50
    } else {
      // light text on dark colors
      return bgColor.l + 75
    }
  })()

  const subduedLum = (() => {
    if (bgColor.l > 60) {
      // dark text on light colors
      return bgColor.l - 30
    } else {
      // light text on dark colors
      return bgColor.l + 50
    }
  })()

  const normalChroma = (() => {
    let maxChroma = bgColor.c
    // maxChroma = getMaxChroma({ l: normalLum, c: bgColor.c, h: bgColor.h })
    // console.log('maxChroma', maxChroma)
    return maxChroma
  })()

  const defaultColor = chromajs.lch(normalLum, normalChroma, bgColor.h).hex()
  const subduedColor = chromajs.lch(subduedLum, normalChroma, bgColor.h).hex()

  return (
    <div className="Text">
      <TextVariant color={defaultColor} bgColor={bgColorColorHex} />
      <TextVariant color={subduedColor} bgColor={bgColorColorHex} />
    </div>
  )
}

const TextVariant = ({ color, bgColor }: { color: string; bgColor: string }) => {
  const contrast = chromajs.contrast(color, bgColor)
  return (
    <div className="TextVariant" style={{ color }}>
      Sample Text - {contrast.toFixed(2)}
    </div>
  )
}
