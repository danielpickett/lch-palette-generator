import { LCHColor } from "types"
import { getMaxChroma } from "utils"
import chromajs from 'chroma-js'

export const transformColors = ({
  bgColor,
  lumOffset,
  textChroma,
  splitPoint,
  multiplier,
}: {
  bgColor: LCHColor
  splitPoint: number
  lumOffset: number
  textChroma: number
  multiplier: number
}) => {
  let newLum = bgColor.l
  if (newLum > splitPoint) newLum = newLum - lumOffset * multiplier
  else newLum = newLum + lumOffset * multiplier
  if (newLum > 100) newLum = 100
  if (newLum < 0) newLum = 0

  const maxChroma = getMaxChroma({ ...bgColor, l: newLum })
  const newChroma = textChroma > maxChroma ? maxChroma : textChroma
  const textLCH = { l: newLum, c: newChroma, h: bgColor.h }

  const bgHex = chromajs.lch(bgColor.l, bgColor.c, bgColor.h).hex()
  const textHex = chromajs.lch(textLCH.l, textLCH.c, textLCH.h).hex()

  const contrast = chromajs.contrast(textHex, bgHex).toFixed(2)

  return { textLCH, textHex, bgHex, contrast }
}