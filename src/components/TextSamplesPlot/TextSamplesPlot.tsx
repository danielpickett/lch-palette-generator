import { Canvas } from 'components'
import { TextColorsType } from 'utils/deriveColors'
import React from 'react'
import './TextSamplesPlot.scss'
import { lch } from 'utils'
import { LCHColor } from 'types'

export const TextSamplesPlot = ({
  bgColorLCH,
  textColors,
}: {
  bgColorLCH: LCHColor
  textColors: TextColorsType[]
}) => {
  const size = 1

  return (
    <div className="TextSamplesPlot">
      <Canvas hue={bgColorLCH.h} size={size} />
      <div
        className="TextSamplesPlot__mark"
        style={{ left: bgColorLCH.c * size, bottom: bgColorLCH.l * size }}
        title={`background color`}
      >
        <div
          className={
            'TextSamplesPlot__bg-mark' +
            (bgColorLCH.l > 70 ? ' TextSamplesPlot__bg-mark--on-light-bg' : '')
          }
          style={{ color: lch(bgColorLCH).hex() }}
        />
      </div>
      {textColors.map((textColor, index) => (
        <TEXT_SAMPLES_PLOT__MARK key={index} textColor={textColor} size={size} />
      ))}
    </div>
  )
}

const TEXT_SAMPLES_PLOT__MARK = ({
  textColor,
  size,
}: {
  textColor: TextColorsType
  size: number
}) => {
  return (
    <div
      className="TextSamplesPlot__mark"
      style={{
        left: textColor.lch.c * size,
        bottom: textColor.lch.l * size,
      }}
      title={`${
        textColor.plotLabel
      } regular text color \n${textColor.lch.l.toFixed(
        1
      )}, ${textColor.lch.c.toFixed(1)}, ${textColor.lch.h.toFixed(1)}`}
    >
      {textColor.plotMarker}
    </div>
  )
}
