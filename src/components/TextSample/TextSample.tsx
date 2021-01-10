import React from 'react'
import './TextSample.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons'
import chromajs from 'chroma-js'
import { LCHColor } from 'types'
import { TextColorsType } from 'utils/deriveColors'
// import { colorNames } from 'config'
import { lch } from 'utils'
// import { SetTextColorsType } from 'App'

export const TextSample = ({
  bgColorHex,
  textColors,
  showDetails,
}: {
  bgColorHex: string | null
  textColors: TextColorsType
  showDetails: boolean
}) => {
  const colorRGB = textColors.hex ? chromajs(textColors.hex).css() : undefined

  const microCopy = [
    `L: ${textColors.lch.l.toFixed(1)}`,
    `C: ${textColors.lch.c.toFixed(1)}`,
    `H: ${textColors.lch.h.toFixed(1)}`,
  ].join(', ')

  return (
    <div
      className="TextSample"
      style={{
        color: textColors.hex || undefined,
        backgroundColor: bgColorHex || undefined,
      }}
    >
      <div className="TextSample__main-copy">
        <span>Sample Text {textColors.contrast?.toFixed(2)}</span>
        <span>
          {!!textColors.contrast && textColors.contrast < 4.5 && (
            <FontAwesomeIcon
              className="TextSample__icon"
              icon={faExclamationTriangle}
            />
          )}
        </span>
      </div>
      {showDetails && (
        <div className="TextSample__micro-copy">
          <div>{microCopy}</div>
          <div>{colorRGB}</div>
        </div>
      )}
    </div>
  )
}
