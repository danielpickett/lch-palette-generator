import chromajs from 'chroma-js'
import { ColorExtended, LCHColor, StateType, ScaleType } from 'types'

export const isClipped = (color: LCHColor) =>
  (chromajs.lch(color.l, color.c, color.h) as ColorExtended)._rgb._clipped

export const getMaxChroma = (color: LCHColor) => {
  console.log('\nstarting...')
  let chroma = 0
  let step = 150

  const halfIsOk = () => !isClipped({ ...color, c: chroma + step / 2 })
  const goHalf = () => {
    chroma = chroma + step / 2
  }

  while (step >= 0.1) {
    console.log('step', step)
    if (halfIsOk()) {
      goHalf()
    } else {
      step = step / 2
    }
  }

  return chroma
}

export const getMinMaxLuminance = (color: LCHColor) => {
  if (isClipped(color)) {
    console.log("It's clipped. I'll have to do this the hard way.")
    let lum = 100

    while (isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const maxLum = lum
    while (!isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const minLum = lum
    if (maxLum === 0 || minLum === 0)
      throw new Error('no valid color found for this chroma')

    return [minLum, maxLum]
  } else {
    console.log("It's not clipped!")
    let lum = 100

    while (isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const maxLum = lum
    while (!isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const minLum = lum

    return [minLum, maxLum]
  }
}

export const parseScales = (
  scales: ScaleType[],
  callback: (arg: {
    scaleName: string
    scaleNameKebab: string
    colorName: string
    colorHex: string | undefined
  }) => string
) =>
  scales
    .map((scale) =>
      scale.scaleName
        ? scale.colorNames
            ?.map((colorName, index) => {
              const color = chromajs.lch(
                scale.luminances[index],
                scale.chromas[index],
                scale.hue
              ) as ColorExtended
              const swatchColor = color._rgb._clipped ? undefined : color.hex()
              return scale.scaleName
                ? callback({
                    scaleName: scale.scaleName,
                    scaleNameKebab: scale.scaleName
                      .toLowerCase()
                      .replace(/\s+/g, '-'),
                    colorName: colorName,
                    colorHex: swatchColor,
                  })
                : ''
            })
            .join('\n')
        : ''
    )
    .join('\n\n')

export const parseConfig = (state: StateType) =>
  JSON.stringify(
    state,
    function (key, val) {
      return val.toFixed ? Number(val.toFixed(3)) : val
    },
    2
  )
