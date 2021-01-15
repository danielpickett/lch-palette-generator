import { Output } from '../../components'
import React from 'react'
import ReactDOM from 'react-dom'
import { StateType } from 'types'
import { parseDefaults, parseScaleShades } from 'utils'
import { VividTextColorsForGreyShadeType } from 'utils/extractVividTextColorsForGreyScale'
import { TextColorsType } from 'utils/getDerivedColors'
import './Outputs.scss'

export const Outputs = ({
  state,
  textColors,
  vividTextColorsForGreyShades,
}: {
  state: StateType
  textColors: TextColorsType[]
  vividTextColorsForGreyShades: VividTextColorsForGreyShadeType[]
}) => {
  const makeGap = (str: string, printLength: number) => {
    const gap =
      str.length < printLength ? ' '.repeat(printLength - str.length) : ''
    return gap
  }

  const cssPaletteColors =
    `  --color-white: ${' '.repeat(32)} #ffffff;\n\n` +
    `${parseScaleShades(state.scales, (scale) => {
      const gap = makeGap(scale.scaleNameKebab, 33)
      return `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${gap} ${scale.colorHex};`
    })}\n`

  const cssPaletteColorDefaults = `${parseDefaults(state.scales, (x) => {
    const gap = makeGap(x.scaleNameKebab, 11)
    return (
      // palette colors
      `  --color-${x.scaleNameKebab}-lighter:                   ${gap} var(--color-${x.scaleNameKebab}-${x.lighterShadeName});\n` +
      `  --color-${x.scaleNameKebab}:                           ${gap} var(--color-${x.scaleNameKebab}-${x.defaultShadeName});\n` +
      `  --color-${x.scaleNameKebab}-darker:                    ${gap} var(--color-${x.scaleNameKebab}-${x.darkerShadeName});\n` +
      // text colors lighter
      `  --text-on-${x.scaleNameKebab}-lighter:                 ${gap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--subdued:        ${gap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--vivid:          ${gap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--vivid--subdued: ${gap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--vivid--subdued);\n` +
      // text colors regular
      `  --text-on-${x.scaleNameKebab}:                         ${gap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}--subdued:                ${gap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}--vivid:                  ${gap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}--vivid--subdued:         ${gap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--vivid--subdued);\n` +
      // text colors darker
      `  --text-on-${x.scaleNameKebab}-darker:                  ${gap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}-darker--subdued:         ${gap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}-darker--vivid:           ${gap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}-darker--vivid--subdued:  ${gap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--vivid--subdued);\n`
    )
  })}` //.slice(0, -1)

  const cssTextColors = textColors
    .slice(1) // skip the first scale (grey) because it's text colors are parsed separately below
    .reduce((stringOutput: string, scale) => {
      const newString = scale.shades
        .map((shade, shadeIndex) => {
          if (shadeIndex === 0) {
            return ''
          }
          const len = 44
          // prettier-ignore
          return (
            `  --${shade.textColor.tokenName}:${makeGap(shade.textColor.tokenName, len)} ${shade.textColor.hex};\n` + 
            `  --${shade.textColorSubdued.tokenName}:${makeGap(shade.textColorSubdued.tokenName, len)} ${shade.textColorSubdued.hex};\n` +
            `  --${shade.vividTextColor.tokenName}:${makeGap(shade.vividTextColor.tokenName, len)} ${shade.vividTextColor.hex};\n` +
            `  --${shade.vividTextColorSubdued.tokenName}:${makeGap(shade.vividTextColorSubdued.tokenName, len)} ${shade.vividTextColorSubdued.hex};\n`
          )
        })
        .join('\n')
      return stringOutput + '\n' + newString
    }, '')

  const cssTextColorsOnGrey = vividTextColorsForGreyShades.reduce(
    (prevTokens: string, vividtextColorsOnGrey, shadeIndex) => {
      const len = 44
      const greyOnGreyShade = textColors[0].shades[shadeIndex].textColor
      const greyOnGreyShadeSubdued =
        textColors[0].shades[shadeIndex].textColorSubdued

      // prettier-ignore
      const newTokens =
        `  --${greyOnGreyShade.tokenName}:${makeGap(greyOnGreyShade.tokenName, len)} ${greyOnGreyShade.hex};\n` +
        `  --${greyOnGreyShadeSubdued.tokenName}:${makeGap(greyOnGreyShadeSubdued.tokenName,len)} ${greyOnGreyShadeSubdued.hex};\n` +
        vividtextColorsOnGrey.vividTextColorSets
        .map((textColorSet) => {
          const { tokenName: token, hex } = textColorSet.vividTextColor
          const { tokenName: tokenSubdued, hex: hexSubdued } = textColorSet.vividTextColorSubdued
          return (
            `  --${token}:${makeGap(token, len)} ${hex};\n` +
            `  --${tokenSubdued}:${makeGap(tokenSubdued, len)} ${hexSubdued};`
          )
        }).join('\n')

      return prevTokens + '\n' + newTokens + '\n'
    },
    ''
  ) //.replace(/grey-000/gm, 'white').replace(/grey-000/gm, 'white')

  const cssCombined = (
    `${cssPaletteColors}\n` +
    `${cssTextColors}\n` +
    `${cssTextColorsOnGrey}\n` +
    `${cssPaletteColorDefaults}`
  ).replace(/\n{3,}/g, '\n\n')

  const tokenRegEx = / {2}--(.+): .*$/gm
  const sassReplacer = (match: string, captureGroup1: string) => {
    const _ = makeGap(captureGroup1, 45)
    return `$${captureGroup1}: ${_} var(--${captureGroup1});`
  }

  const sassCombined = cssCombined.replace(tokenRegEx, sassReplacer)

  const hasInvalidScaleName = state.scales.some(
    (scale) => scale.scaleName.match(/\s/) !== null
  )
  const hasInvalidPaletteColors = cssCombined.match('undefined') !== null

  const errorMsg =
    (hasInvalidScaleName
      ? 'One of your scales has an invalid name. \nScale names must not contain spaces.\n\n'
      : '') +
    (hasInvalidPaletteColors
      ? 'Your palette has invalid colors. \nPlease reduce the chroma on each\nmissing palette color above.\n\n'
      : '')

  const cssRootRule = `:root{\n${cssCombined}}\n`

  return (
    <div className="Outputs">
      <Output
        heading="CSS Variables"
        content={!!errorMsg ? errorMsg : cssRootRule}
      />
      <Output
        heading="Sass Aliases"
        content={!!errorMsg ? errorMsg : sassCombined}
      />
      <Output
        heading="Config"
        content={JSON.stringify(state, null, 2)}
        style={{ maxWidth: '420px' }}
      />
      {ReactDOM.createPortal(<style>{cssRootRule}</style>, document.head)}
    </div>
  )
}
