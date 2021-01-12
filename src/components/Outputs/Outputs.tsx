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
  const cssPaletteColors = parseScales(
    state.scales,
    (scale) =>
      `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${scale.colorHex}`
  )

  const cssTextColors = textColors.reduce((stringOutput: string, scale) => {
    const newString = scale.shades
      .map((shade) => {
        return (
          `  --${shade.textColor.tokenName}: ${shade.textColor.hex};\n` +
          `  --${shade.textColorSubdued.tokenName}: ${shade.textColorSubdued.hex};\n` +
          `  --${shade.vividTextColor.tokenName}: ${shade.vividTextColor.hex};\n` +
          `  --${shade.vividTextColorSubdued.tokenName}: ${shade.vividTextColorSubdued.hex};\n\n`
        )
      })
      .join('')
      .slice(0, -1) // removes trailing newline
    return stringOutput + '\n' + newString
  }, '')

  const cssVividTextColorsOnGrey = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors) => {
      const newTokens = textColors.vividTextColorSets
        .map((textColorSet) => {
          return (
            `  --${textColorSet.vividTextColor.tokenName}: ${textColorSet.vividTextColor.hex};\n` +
            `  --${textColorSet.vividTextColorSubdued.tokenName}: ${textColorSet.vividTextColorSubdued.hex};`
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
