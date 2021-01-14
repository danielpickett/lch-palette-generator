import { Output } from 'components'
import React from 'react'
import { StateType } from 'types'
import { parseConfig, parseDefaults, parseScaleShades } from 'utils'
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

  const cssPaletteColors = parseScaleShades(
    state.scales,
    (scale) =>
      `  --color-${scale.scaleNameKebab}-${scale.shadeName}: ${scale.colorHex};`
  )

  const cssPaletteColorDefaults = `${parseDefaults(state.scales, (x) => {
    const pgap = gap(x.scaleNameKebab, 9).repeat(2)
    const tgap = gap(x.scaleNameKebab, 8).repeat(2)
    return (
      // palette colors
      `  --color-${x.scaleNameKebab}-lighter:                    ${pgap} var(--color-${x.scaleNameKebab}-${x.lighterShadeName});\n` +
      `  --color-${x.scaleNameKebab}:                            ${pgap} var(--color-${x.scaleNameKebab}-${x.defaultShadeName});\n` +
      `  --color-${x.scaleNameKebab}-darker:                     ${pgap} var(--color-${x.scaleNameKebab}-${x.darkerShadeName});\n\n` +
      // text colors lighter
      `  --text-on-${x.scaleNameKebab}-lighter                   ${tgap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--subdued          ${tgap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--vivid            ${tgap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}-lighter--vivid--subdued   ${tgap} var(--text-on-${x.scaleNameKebab}-${x.lighterShadeName}--vivid--subdued);\n` +
      // text colors regular
      `  --text-on-${x.scaleNameKebab}                           ${tgap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}--subdued                  ${tgap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}--vivid                    ${tgap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}--vivid--subdued           ${tgap} var(--text-on-${x.scaleNameKebab}-${x.defaultShadeName}--vivid--subdued);\n` +
      // text colors darker
      `  --text-on-${x.scaleNameKebab}-darker                    ${tgap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName});\n` +
      `  --text-on-${x.scaleNameKebab}-darker--subdued           ${tgap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--subdued);\n` +
      `  --text-on-${x.scaleNameKebab}-darker--vivid             ${tgap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--vivid);\n` +
      `  --text-on-${x.scaleNameKebab}-darker--vivid--subdued    ${tgap} var(--text-on-${x.scaleNameKebab}-${x.darkerShadeName}--vivid--subdued);\n`
    )
  })}\n`

  const cssTextColors = textColors
    .slice(1) // ignore the first scale (grey) because it's text colors are parsed separately below
    .reduce((stringOutput: string, scale) => {
      const newString = scale.shades
        .map((shade) => {
          const len = 40
          // prettier-ignore
          return (
            `  --${shade.textColor.tokenName}:${gap(shade.textColor.tokenName, len)} ${shade.textColor.hex};\n` + 
            `  --${shade.textColorSubdued.tokenName}:${gap(shade.textColorSubdued.tokenName, len)} ${shade.textColorSubdued.hex};\n` +
            `  --${shade.vividTextColor.tokenName}:${gap(shade.vividTextColor.tokenName, len)} ${shade.vividTextColor.hex};\n` +
            `  --${shade.vividTextColorSubdued.tokenName}:${gap(shade.vividTextColorSubdued.tokenName, len)} ${shade.vividTextColorSubdued.hex};\n\n`
          )
        })
        .join('')
        .slice(0, -1) // removes trailing newline
      return stringOutput + '\n' + newString
    }, '')
    .slice(0, -1) // removes trailing newline

  const greyTextColors = textColors[0]
  const cssVividTextColorsOnGrey = vividTextColorsForGreyShades
    .reduce((prevTokens: string, textColors, shadeIndex) => {
      const len = 45
      const greyOnGreyShade = greyTextColors.shades[shadeIndex].textColor
      const greyOnGreyShadeSubdued =
        greyTextColors.shades[shadeIndex].textColorSubdued

      // prettier-ignore
      const newTokens =    
        `  --${greyOnGreyShade.tokenName}:${gap(greyOnGreyShade.tokenName, len)} ${greyOnGreyShade.hex};\n` + 
        `  --${greyOnGreyShadeSubdued.tokenName}:${gap(greyOnGreyShadeSubdued.tokenName,len)} ${greyOnGreyShadeSubdued.hex};\n` + 
        textColors.vividTextColorSets
        .map((textColorSet) => {
          const { tokenName: token, hex } = textColorSet.vividTextColor
          const { tokenName: tokenSubdued, hex: hexSubdued } = textColorSet.vividTextColorSubdued
          return (
            `  --${token}:${gap(token, len)} ${hex};\n` +
            `  --${tokenSubdued}:${gap(tokenSubdued, len)} ${hexSubdued};`
          )
        }) .join('\n')

      return prevTokens + '\n' + newTokens + '\n'
    }, '')
    .slice(0, -1) // removes trailing newline

  const cssCombined =
    ':root {\n' +
    `${cssPaletteColorDefaults}\n` +
    `${cssPaletteColors}\n` +
    `${cssVividTextColorsOnGrey}\n` +
    `${cssTextColors}\n` +
    '}\n'

  // const sassPaletteColorAliases = parseScaleShades(
  //   state.scales,
  //   (x) =>
  //     `$color-${x.scaleNameKebab}-${x.shadeName}: var(--color-${x.scaleNameKebab}-${x.shadeName});`
  //   // (defaultShade) =>
  //   //   `$color-${defaultShade.scaleNameKebab}: var(--color-${defaultShade.scaleNameKebab});`
  // )

  // const sassTextColorAliases = textColors
  //   .slice(1) // ignore the first scale (grey) because it gets it's own
  //   .reduce((stringOutput: string, scale) => {
  //     const len = 40
  //     const newString = scale.shades
  //       .map((shade) => {
  //         // prettier-ignore
  //         return (
  //           `$${shade.textColor.tokenName}:${gap(shade.textColor.tokenName, len)} var(--${shade.textColor.tokenName});\n` +
  //           `$${shade.textColorSubdued.tokenName}:${gap(shade.textColorSubdued.tokenName, len)} var(--${shade.textColorSubdued.tokenName});\n` +
  //           `$${shade.vividTextColor.tokenName}:${gap(shade.vividTextColor.tokenName, len)} var(--${shade.vividTextColor.tokenName});\n` +
  //           `$${shade.vividTextColorSubdued.tokenName}:${gap(shade.vividTextColorSubdued.tokenName, len)} var(--${shade.vividTextColorSubdued.tokenName});\n\n`
  //         )
  //       })
  //       .join('')
  //       .slice(0, -1) // removes trailing newline
  //     return stringOutput + newString
  //   }, '')

  // const sassVividTextColorsOnGreyAliases = vividTextColorsForGreyShades
  //   .reduce((prevTokens: string, textColors, shadeIndex) => {
  //     const len = 45
  //     const greyOnGreyShade = greyTextColors.shades[shadeIndex].textColor
  //     const greyOnGreyShadeSubdued =
  //       greyTextColors.shades[shadeIndex].textColorSubdued

  //     // prettier-ignore
  //     const newTokens =
  //       `$${greyOnGreyShade.tokenName}:${gap(greyOnGreyShade.tokenName, len )} var(--${greyOnGreyShade.tokenName});\n` +
  //       `$${greyOnGreyShadeSubdued.tokenName}:${gap( greyOnGreyShadeSubdued.tokenName, len )} var(--${greyOnGreyShadeSubdued.tokenName});\n` +
  //       textColors.vividTextColorSets
  //         .map((textColorSet) => {
  //           const token = textColorSet.vividTextColor.tokenName
  //           const tokenSubdued = textColorSet.vividTextColorSubdued.tokenName
  //           return (
  //             `$${token}:${gap(token, len)} var(--${token});\n` +
  //             `$${tokenSubdued}:${gap(tokenSubdued, len)} var(--${tokenSubdued});`
  //           )
  //         })
  //         .join('\n')
  //     return prevTokens + '\n' + newTokens + '\n'
  //   }, '')
  //   .slice(0, -1) // removes trailing newline

  const sassCombined = 'meep'
  // sassPaletteColorAliases +
  // '\n' +
  // sassVividTextColorsOnGreyAliases +
  // '\n' +
  // sassTextColorAliases

  const configOutput = parseConfig(state) + '\n'

  return (
    <div className="Outputs">
      <Output heading="CSS Variables" content={cssCombined} />
      <Output heading="Sass Aliases" content={sassCombined} />
      <Output heading="Config" content={configOutput} />
    </div>
  )
}
