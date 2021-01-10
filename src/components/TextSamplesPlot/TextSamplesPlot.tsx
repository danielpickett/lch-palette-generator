import { Canvas } from 'components'
import { getTextColor } from 'utils'
import React, { Fragment } from 'react'
import './TextSamplesPlot.scss'
import { lch } from 'utils'

export const TextSamplesPlot = ({
  textColorConfigs,
}: {
  textColorConfigs: ReturnType<typeof getTextColor>[]
}) => {
  const size = 1
  const bgColor = textColorConfigs[0].bgColorLCH

  return (
    <div className="TextSamplesPlot">
      <Canvas hue={textColorConfigs[0].bgColorLCH.h} size={size} />
      <div
        className="TextSamplesPlot__mark"
        style={{ left: bgColor.c * size, bottom: bgColor.l * size }}
        title={`background color`}
      >
        <div
          className={
            'TextSamplesPlot__bg-mark' +
            (bgColor.l > 70 ? ' TextSamplesPlot__bg-mark--on-light-bg' : '')
          }
          style={{ color: lch(bgColor).hex() }}
        />
      </div>
      {textColorConfigs.map(({ regular, subdued, marker, label }, index) => {
        return (
          <Fragment key={index}>
            <div
              className="TextSamplesPlot__mark"
              style={{
                left: regular.lch.c * size,
                bottom: regular.lch.l * size,
              }}
              title={`${label} regular text color \n${regular.lch.l.toFixed(
                1
              )}, ${regular.lch.c.toFixed(1)}, ${regular.lch.h.toFixed(1)}`}
            >
              {marker}
            </div>
            <div
              className="TextSamplesPlot__mark"
              style={{
                left: subdued.lch.c * size,
                bottom: subdued.lch.l * size,
              }}
              title={`${label} subdued text color \n${subdued.lch.l.toFixed(
                1
              )}, ${subdued.lch.c.toFixed(1)}, ${subdued.lch.h.toFixed(1)}`}
            >
              {marker}
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
