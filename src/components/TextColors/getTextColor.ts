import { LCHColor } from 'types'
import { getMaxChroma } from 'utils'
import chromajs from 'chroma-js'

export const getTextColor = ({
  bgColor,
  textChroma,
}: {
  bgColor: LCHColor
  textChroma: number
}) => {
  const multiplier = 1.3
  const lumOffset = 55
  const splitPoint = 65
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

  const contrast = chromajs.contrast(textHex, bgHex)

  return { textLCH, textHex, bgHex, contrast }
}
