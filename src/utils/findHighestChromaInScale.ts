import { ScaleType } from 'types'

export const findHighestChromaInScale = (scale: ScaleType) => {
  let result = 0
  scale.chromas.forEach((chroma) => {
    if (chroma > result) result = chroma
  })
  return result
}
