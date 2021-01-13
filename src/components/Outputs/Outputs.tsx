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
      `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${scale.colorHex};`
  )

  const cssTextColors = textColors
    .slice(1)
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

  const cssVividTextColorsOnGrey = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors, shadeIndex) => {
      const len = 45
      const greyOnGreyShade = greyTextColors.shades[shadeIndex].textColor
      const greyOnGreyShadeSubdued =
        greyTextColors.shades[shadeIndex].textColorSubdued
      const newTokens =
        // prettier-ignore
        `  --${greyOnGreyShade.tokenName}:${gap(greyOnGreyShade.tokenName, len )} ${greyOnGreyShade.hex};\n` +
        // prettier-ignore
        `  --${greyOnGreyShadeSubdued.tokenName}:${gap( greyOnGreyShadeSubdued.tokenName, len )} ${greyOnGreyShadeSubdued.hex};\n` +
        textColors.vividTextColorSets
          .map((textColorSet) => {
            const { tokenName: token, hex } = textColorSet.vividTextColor
            const {
              tokenName: tokenSubdued,
              hex: hexSubdued,
            } = textColorSet.vividTextColorSubdued

            return (
              `  --${token}:${gap(token, len)} ${hex};\n` +
              `  --${tokenSubdued}:${gap(tokenSubdued, len)} ${hexSubdued};`
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

  const sassPaletteColorAliases = parseScales(
    state.scales,
    (x) =>
      `$color-${x.scaleNameKebab}-${x.shadeName}: var(--color-${x.scaleNameKebab}-${x.shadeName});`
  )

  const sassTextColorAliases = textColors
    .slice(1)
    .reduce((stringOutput: string, scale) => {
      const len = 40
      const newString = scale.shades
        .map((shade) => {
          return (
            // prettier-ignore
            `$${shade.textColor.tokenName}:${gap(shade.textColor.tokenName, len)} var(--${shade.textColor.tokenName});\n` +
            // prettier-ignore
            `$${shade.textColorSubdued.tokenName}:${gap(shade.textColorSubdued.tokenName, len)} var(--${shade.textColorSubdued.tokenName});\n` +
            // prettier-ignore
            `$${shade.vividTextColor.tokenName}:${gap(shade.vividTextColor.tokenName, len)} var(--${shade.vividTextColor.tokenName});\n` +
            // prettier-ignore
            `$${shade.vividTextColorSubdued.tokenName}:${gap(shade.vividTextColorSubdued.tokenName, len)} var(--${shade.vividTextColorSubdued.tokenName});\n\n`
          )
        })
        .join('')
        .slice(0, -1) // removes trailing newline
      return stringOutput + newString
    }, '')

  const sassVividTextColorsOnGreyAliases = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors, shadeIndex) => {
      const len = 45
      const greyOnGreyShade = greyTextColors.shades[shadeIndex].textColor
      const greyOnGreyShadeSubdued =
        greyTextColors.shades[shadeIndex].textColorSubdued
      const newTokens =
        // prettier-ignore
        `$${greyOnGreyShade.tokenName}:${gap(greyOnGreyShade.tokenName, len )} var(--${greyOnGreyShade.tokenName});\n` +
        // prettier-ignore
        `$${greyOnGreyShadeSubdued.tokenName}:${gap( greyOnGreyShadeSubdued.tokenName, len )} var(--${greyOnGreyShadeSubdued.tokenName});\n` +
        textColors.vividTextColorSets
          .map((textColorSet) => {
            const token = textColorSet.vividTextColor.tokenName
            const tokenSubdued = textColorSet.vividTextColorSubdued.tokenName
            return (
              `$${token}:${gap(token, len)} var(--${token});\n` +
              `$${tokenSubdued}:${gap(tokenSubdued, len)} var(--${tokenSubdued});`
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
      <Output heading="CSS Variables" content={cssCombined} />
      <Output heading="Sass Aliases" content={sassCombined} />
      <Output heading="Config" content={configOutput} />
    </div>
  )
}
