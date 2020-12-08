import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import './Output.scss'
import { ColorExtended } from 'types'
import { ScaleType } from 'App'
import chromajs from 'chroma-js'

export const parseScales = (
  scales: ScaleType[],
  callback: (arg: {
    scaleName: string
    scaleNameKebab: string
    colorName: string
    colorHex: string | undefined
  }) => string
) =>
  scales
    .map((scale) =>
      scale.scaleName
        ? scale.colorNames
            ?.map((colorName, index) => {
              const color = chromajs.lch(
                scale.luminances[index],
                scale.chromas[index],
                scale.hue
              ) as ColorExtended
              const swatchColor = color._rgb._clipped ? undefined : color.hex()
              return scale.scaleName
                ? callback({
                    scaleName: scale.scaleName,
                    scaleNameKebab: scale.scaleName
                      .toLowerCase()
                      .replace(/\s+/g, '-'),
                    colorName: colorName,
                    colorHex: swatchColor,
                  })
                : ''
            })
            .join('\n')
        : ''
    )
    .join('\n\n')

export const parseConfig = (scales: ScaleType[]) =>
  '[\n' +
  scales.reduce(
    (result: string, currScale: ScaleType, index) =>
      result +
      `  {
    scaleName: '${currScale.scaleName ? currScale.scaleName : ''}',
    colorNames: [${
      currScale.colorNames ? currScale.colorNames.join(', ') : ''
    }],
    luminances: [${currScale.luminances.map((x) => x.toFixed(1)).join(', ')}],
    chromas: [${currScale.chromas.map((x) => x.toFixed(1)).join(', ')}],
    hue: ${currScale.hue},
  }${index === scales.length - 1 ? '' : ',\n'}`,
    ''
  ) +
  '\n]'

const Clipboard = () => (
  <svg
    className="Output__clipboard-icon"
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
  >
    <path
      fill="currentColor"
      d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"
    ></path>
  </svg>
)

export const Output = ({
  heading,
  content,
  style,
}: {
  heading: string
  content: string
  style?: CSSProperties
}) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const copyToClipboard = (copyText: HTMLTextAreaElement) => {
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand('copy')
    copyText.setSelectionRange(0, 0)
    setShowConfirm(true)

    let timeoutID: number

    timeoutID = window.setTimeout(() => setShowConfirm(false), 1500)
  }

  return (
    <div
      className={'Output' + (showConfirm ? ' Output--is-confirming' : '')}
      style={style}
    >
      <h3 className="Output__heading">{heading}</h3>

      <div className="Output__output">
        <textarea
          className="Output__textarea"
          readOnly
          value={content}
          ref={ref}
        />
        <button
          className="Output__copy-button"
          onClick={() => {
            if (ref.current) {
              copyToClipboard(ref.current)
            }
          }}
        >
          <Clipboard />
          <div className="Output__copy-confirmation">Copied</div>
        </button>
      </div>
    </div>
  )
}
