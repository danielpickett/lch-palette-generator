import { ColorExtended } from 'types'
import { ScaleType } from 'types'
import chromajs from 'chroma-js'

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

export const parseConfig = (scales: ScaleType[]) =>
  '[\n' +
  scales.reduce(
    (result: string, currScale: ScaleType, index) =>
      result +
      `  {
    scaleName: '${currScale.scaleName ? currScale.scaleName : ''}',
    colorNames: [${
      currScale.colorNames ? currScale.colorNames.join(', ') : ''
    }],
    luminances: [${currScale.luminances.map((x) => x.toFixed(1)).join(', ')}],
    chromas: [${currScale.chromas.map((x) => x.toFixed(1)).join(', ')}],
    hue: ${currScale.hue}
  }${index === scales.length - 1 ? '' : ',\n'}`,
    ''
  ) +
  '\n]'
