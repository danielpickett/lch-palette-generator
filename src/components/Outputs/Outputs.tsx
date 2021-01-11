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
  const cssPaletteColorsOutput = parseScales(
    state.scales,
    (scale) =>
      `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${scale.colorHex}`
  )

  const cssTextColorsOutput = textColors.reduce(
    (stringOutput: string, scale) => {
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
        .slice(0, -1)
      return stringOutput + newString
    },
    ''
  )

  const cssAllOutput =
    ':root {\n' + cssPaletteColorsOutput + '\n\n' + cssTextColorsOutput + '}\n'

  const sassPaletteColorsOutput =
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

  const sassAllOutput = sassPaletteColorsOutput + '\n' + sassTextColorAliases

  const configOutput = parseConfig(state) + '\n'

  return (
    <div className="Outputs">
      <Output heading="CSS Custom Properties" content={cssAllOutput} />
      <Output heading="SCSS Aliases" content={sassAllOutput} />
      <Output heading="Config" content={configOutput} />
    </div>
  )
}
