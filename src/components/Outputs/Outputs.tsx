import { Output } from 'components'
import React from 'react'
import { StateType } from 'types'
import { parseConfig, parseScales } from 'utils'
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
  const gap = (str: string, printLength: number) => {
    const gap =
      str.length < printLength ? ' '.repeat(printLength - str.length) : ''
    return gap
  }

  const cssPaletteColors = parseScales(
    state.scales,
    (scale) =>
      `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${scale.colorHex}`
  )

  const cssTextColorsOnGrey = textColors.reduce(
    (stringOutput: string, scale) => {
      const newString = scale.shades
        .map((shade) => {
          const len = 40
          return (
            `  --${shade.textColor.tokenName}:${gap(shade.textColor.tokenName, len)} ${shade.textColor.hex};\n` + // prettier-ignore
            `  --${shade.textColorSubdued.tokenName}:${gap(shade.textColorSubdued.tokenName, len)} ${shade.textColorSubdued.hex};\n` + // prettier-ignore
            `  --${shade.vividTextColor.tokenName}:${gap(shade.vividTextColor.tokenName, len)} ${shade.vividTextColor.hex};\n` + // prettier-ignore
            `  --${shade.vividTextColorSubdued.tokenName}:${gap(shade.vividTextColorSubdued.tokenName, len)} ${shade.vividTextColorSubdued.hex};\n\n` // prettier-ignore
          )
        })
        .join('')
        .slice(0, -1) // removes trailing newline
      return stringOutput + '\n' + newString
    },
    ''
  )

  const cssTextColors = textColors
    // .slice(1)
    .reduce((stringOutput: string, scale) => {
      const newString = scale.shades
        .map((shade) => {
          const len = 40
          return (
            `  --${shade.textColor.tokenName}:${gap(shade.textColor.tokenName, len)} ${shade.textColor.hex};\n` + // prettier-ignore
            `  --${shade.textColorSubdued.tokenName}:${gap(shade.textColorSubdued.tokenName, len)} ${shade.textColorSubdued.hex};\n` + // prettier-ignore
            `  --${shade.vividTextColor.tokenName}:${gap(shade.vividTextColor.tokenName, len)} ${shade.vividTextColor.hex};\n` + // prettier-ignore
            `  --${shade.vividTextColorSubdued.tokenName}:${gap(shade.vividTextColorSubdued.tokenName, len)} ${shade.vividTextColorSubdued.hex};\n\n` // prettier-ignore
          )
        })
        .join('')
        .slice(0, -1) // removes trailing newline
      return stringOutput + '\n' + newString
    }, '')

  const greyTextColors = textColors[0]
  console.log('greyTextColors', greyTextColors)

  const cssVividTextColorsOnGrey = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors, shadeIndex) => {
      console.log(shadeIndex, textColors)
      const newTokens = textColors.vividTextColorSets
        .map((textColorSet) => {
          const { tokenName: token, hex } = textColorSet.vividTextColor
          const {
            tokenName: tokenSubdued,
            hex: hexSubdued,
          } = textColorSet.vividTextColorSubdued
          const len = 45
          const greyOnGreyShade = greyTextColors.shades[shadeIndex].textColor
          const greyOnGreyShadeSubdued =
            greyTextColors.shades[shadeIndex].textColorSubdued
          return (
            // prettier-ignore
            `  --${greyOnGreyShade.tokenName}:${gap(greyOnGreyShade.tokenName, len)} ${greyOnGreyShade.hex};\n` + 
            // prettier-ignore
            `  --${greyOnGreyShadeSubdued.tokenName}:${gap( greyOnGreyShadeSubdued.tokenName, len )} ${greyOnGreyShadeSubdued.hex};\n` +
            `  --${token}:${gap(token, len)} ${hex};\n` +
            `  --${tokenSubdued}:${gap(tokenSubdued, len)} ${hexSubdued};\n`
          )
        })
        .join('\n')
      return prevTokens + '\n' + newTokens + '\n'
    }, '')
    .slice(0, -1) // removes trailing newline

  const cssCombined =
    ':root {\n' +
    cssPaletteColors +
    '\n' +
    cssVividTextColorsOnGrey +
    '\n' +
    cssTextColors +
    '}\n'

  const sassPaletteColorAliases =
    parseScales(
      state.scales,
      (x) =>
        `$color-${x.scaleNameKebab}-${x.shadeName}: var(--color-${x.scaleNameKebab}-${x.shadeName});`
    ) + '\n'

  const sassTextColorAliases = textColors.reduce(
    (stringOutput: string, scale) => {
      const newString = scale.shades
        .map((shade) => {
          return (
            `$${shade.textColor.tokenName}: var(--${shade.textColor.tokenName});\n` +
            `$${shade.textColorSubdued.tokenName}: var(--${shade.textColorSubdued.tokenName});\n` +
            `$${shade.vividTextColor.tokenName}: var(--${shade.vividTextColor.tokenName});\n` +
            `$${shade.vividTextColorSubdued.tokenName}: var(--${shade.vividTextColorSubdued.tokenName});\n\n`
          )
        })
        .join('')
        .slice(0, -1)
      return stringOutput + newString
    },
    ''
  )

  const sassVividTextColorsOnGreyAliases = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors) => {
      const newTokens = textColors.vividTextColorSets
        .map((textColorSet) => {
          return (
            `$${textColorSet.vividTextColor.tokenName}: var(--${textColorSet.vividTextColor.tokenName});\n` +
            `$${textColorSet.vividTextColorSubdued.tokenName}: var(--${textColorSet.vividTextColorSubdued.tokenName});`
          )
        })
        .join('\n')
      return prevTokens + '\n' + newTokens + '\n'
    }, '')
    .slice(0, -1) // removes trailing newline

  const sassCombined =
    sassPaletteColorAliases +
    '\n' +
    sassVividTextColorsOnGreyAliases +
    '\n' +
    sassTextColorAliases

  const configOutput = parseConfig(state) + '\n'

  return (
    <div className="Outputs">
      <Output heading="CSS Custom Properties" content={cssCombined} />
      <Output heading="SCSS Aliases" content={sassCombined} />
      <Output heading="Config" content={configOutput} />
    </div>
  )
}
