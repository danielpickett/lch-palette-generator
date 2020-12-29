import { LCHColor, StateType, ScaleType } from 'types'
import { luminances, colorNames } from 'config'
import { lch } from 'utils'

export const isClipped = (color: LCHColor) => lch(color)._rgb._clipped

export const getMaxChroma = (color: LCHColor) => {
  let chroma = 0
  let step = 150

  const halfIsOk = () => !isClipped({ ...color, c: chroma + step / 2 })
  const goHalf = () => {
    chroma = chroma + step / 2
  }

  while (step >= 0.1) {
    if (halfIsOk()) {
      goHalf()
    } else {
      step = step / 2
    }
  }

  return chroma
}

export const getMinMaxLuminance = (
  color: LCHColor
): [number, number] | null => {
  if (isClipped(color)) {
    let lum = 100

    while (isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const maxLum = lum
    while (!isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const minLum = lum + 0.1
    if (maxLum === 0 || minLum === 0) return null

    return [minLum, maxLum]
  } else {
    let lum = color.l
    let step = 100 - color.l

    const halfIsOk = (sign: number) =>
      !isClipped({ ...color, l: lum + (step * sign) / 2 })
    const goHalf = (sign: number) => {
      lum = lum + (step / 2) * sign
    }

    while (step > 0.01) {
      if (halfIsOk(1)) {
        goHalf(1)
      } else {
        step = step / 2
      }
    }
    if (lum <= 0.01) throw new Error('no valid color found for this chroma')
    const maxLum = lum
    step = color.l

    while (step > 0.01) {
      if (halfIsOk(-1)) {
        goHalf(-1)
      } else {
        step = step / 2
      }
    }

    while (!isClipped({ l: lum, c: color.c, h: color.h }) && lum >= 0) {
      lum = lum - 0.1
    }
    const minLum = lum + 0.1

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
        ? colorNames
            .map((colorName, index) => {
              const color = lch({
                l: luminances[index],
                c: scale.chromas[index],
                h: scale.hue,
              })
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
