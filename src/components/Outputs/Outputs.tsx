import { Output } from 'components'
import React from 'react'
import { StateType } from 'types'
import { parseConfig, parseScales } from 'utils'
import './Outputs.scss'

export const Outputs = ({ state }: { state: StateType }) => {
  const cssOutput =
    ':root {\n' +
    parseScales(
      state.scales,
      (x) => `  --color-${x.scaleNameKebab}-${x.colorName}: ${x.colorHex}`
    ) +
    '\n}\n'

  // const cssTextColorsOutput =
  //   ':root {\n' +
  //   Object.entries(textColors)
  //     .map((entry) => {
  //       const [key, value] = entry
  //       return '  ' + key + ': ' + value + ';'
  //     })
  //     .join('\n') +
  //   '\n}\n'

  const scssOutput =
    parseScales(
      state.scales,
      (x) =>
        `$color-${x.scaleNameKebab}-${x.colorName}: var(--color-${x.scaleNameKebab}-${x.colorName});`
    ) + '\n'

  const configOutput = parseConfig(state) + '\n'

  return (
    <div className="Outputs">
      <Output heading="Palette Color CSS" content={cssOutput} />
      {/* <Output heading="Text Color CSS" content={cssTextColorsOutput} /> */}
      <Output heading="SCSS Aliases" content={scssOutput} />
      <Output heading="Config" content={configOutput} />
    </div>
  )
}
