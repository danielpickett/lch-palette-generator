import React, { useEffect, useState } from 'react'
import { getMaxChroma } from 'utils'
import chromajs from 'chroma-js'
import './MaxChromaTester.scss'
import { ChromaSlider } from 'components/ChromaSlider'
import { ColorExtended } from 'types'

export const MaxChromaTester = () => {
  const initColor = { l: 80, c: 50, h: 50 }

  const [inputColor, setInputColor] = useState(initColor)
  const [outputColor, setOutputColor] = useState(initColor)

  useEffect(() => {
    const outputChroma = getMaxChroma(inputColor)
    setOutputColor({ l: inputColor.l, c: outputChroma, h: inputColor.h })
  }, [inputColor])

  return (
    <div className="MaxChromaTester">
      <p>Hello from the MaxChromaTester component</p>
      <ChromaSlider
        chroma={inputColor.c}
        onChromaChange={(chromaChange) => {
          setInputColor({
            l: inputColor.l,
            c:
              inputColor.c + chromaChange >= 0
                ? inputColor.c + chromaChange
                : 0,
            h: inputColor.h,
          })
        }}
        size={10}
      />
      <div className="MaxChromaTester__swatches">
        <Swatch color={inputColor} label="inputColor" />
        <Swatch color={outputColor} label="outputColor" />
      </div>
    </div>
  )
}

const Swatch = ({
  color,
  label,
}: {
  color: {
    l: number
    c: number
    h: number
  }
  label: string
}) => {
  const _color = chromajs.lch(color.l, color.c, color.h) as ColorExtended
  const isClipped = _color._rgb._clipped
  return (
    <div
      className="MaxChromaTester__swatch"
      style={{ backgroundColor: isClipped ? undefined : _color.css() }}
    >
      <div>{label}</div>
      <div>
        <pre>
          {JSON.stringify(
            color,
            function (key, val) {
              return val.toFixed ? Number(val.toFixed(3)) : val
            },
            2
          )}
        </pre>
      </div>
    </div>
  )
}
