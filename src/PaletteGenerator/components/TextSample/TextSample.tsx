import React from 'react'
import './TextSample.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons'
import chromajs from 'chroma-js'
import { TextColorType } from 'utils/getDerivedColors'

export const TextSample = ({
  bgColorHex,
  textColor,
  showDetails,
}: {
  bgColorHex: string | null
  textColor: TextColorType
  showDetails: boolean
}) => {
  const colorRGB = textColor.hex ? chromajs(textColor.hex).css() : undefined

  const microCopy = [
    `L: ${textColor.lch.l.toFixed(1)}`,
    `C: ${textColor.lch.c.toFixed(1)}`,
    `H: ${textColor.lch.h.toFixed(1)}`,
  ].join(', ')

  return (
    <div
      className="TextSample"
      style={{
        color: textColor.hex || undefined,
        backgroundColor: bgColorHex || undefined,
      }}
    >
      <div className="TextSample__main-copy">
        <span>Sample Text {textColor.contrast?.toFixed(2)}</span>
        {!!textColor.contrast && textColor.contrast < 4.5 && (
          <span>!
            {/* <FontAwesomeIcon
              className="TextSample__icon"
              icon={faExclamationCircle}
            /> */}
          </span>
        )}
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
