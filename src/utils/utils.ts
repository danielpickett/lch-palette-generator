import { LCHColor, ScaleType } from 'types'
import { luminances, shadeNames } from 'config'
import { lch } from 'utils'
import { kbob } from './kbob'

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

export const parseScaleShades = (
  scales: ScaleType[],
  callback: (arg: {
    scaleName: string
    scaleNameKebab: string
    shadeName: string | null
    shadeIndex: number
    isDefaultShade: boolean
    colorHex: string | undefined
  }) => string
) =>
  scales
    .map((scale, scaleIndex) => {
      return shadeNames
        .map((shadeName, shadeIndex) => {
          const color = lch({
            l: luminances[shadeIndex],
            c: scale.chromas[shadeIndex],
            h: scale.hue,
          })
          const swatchColor = color._rgb._clipped ? undefined : color.hex()
          if (shadeIndex === 0) {
            return ''
          }

          return callback({
            scaleName: scale.scaleName,
            scaleNameKebab: kbob(scale.scaleName),
            shadeName: shadeName,
            shadeIndex: shadeIndex,
            isDefaultShade: shadeIndex === scale.defaultShade,
            colorHex: swatchColor,
          })
        })
        .join('\n')
    })
    .join('\n\n')

export const parseDefaults = (
  scales: ScaleType[],
  callback: (arg: {
    scaleNameKebab: string
    defaultShadeName: string
    darkerShadeName: string
    lighterShadeName: string
  }) => string
) =>
  scales
    .filter((scale) => !!scale.defaultShade)
    .map((scale) => {
      const defaultShadeIndex = scale.defaultShade as number
      const defaultShadeName = shadeNames[defaultShadeIndex]
      const darkerShadeName =
        defaultShadeIndex < 10
          ? shadeNames[defaultShadeIndex + 1]
          : defaultShadeName
      const lighterShadeName =
        defaultShadeIndex > 1
          ? shadeNames[defaultShadeIndex - 1]
          : defaultShadeName

      if (defaultShadeIndex === 0) {
        console.log(
          ' boo',
          kbob(scale.scaleName),
          defaultShadeName,
          darkerShadeName,
          lighterShadeName
        )
      }
      return callback({
        scaleNameKebab: kbob(scale.scaleName),
        defaultShadeName,
        darkerShadeName,
        lighterShadeName,
      })
    })
    .join('\n')
