import React, { useState } from 'react'
import './TextSample.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExclamationCircle } from '@fortawesome/pro-light-svg-icons'

import chromajs from 'chroma-js'
import { TextColorType } from 'utils/getDerivedColors'
import { Tooltip } from '../Tooltip'

export const TextSample = ({
  bgColorHex,
  textColor,
  showDetails,
  isSafeInConfig,
}: {
  bgColorHex: string
  textColor: TextColorType
  showDetails: boolean
  isSafeInConfig: boolean
}) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => setActive((prev) => !prev)

  const colorRGB = textColor.hex ? chromajs(textColor.hex).css() : undefined

  const microCopy = [
    `L: ${textColor.lch.l.toFixed(1)}`,
    `C: ${textColor.lch.c.toFixed(1)}`,
    `H: ${textColor.lch.h.toFixed(1)}`,
  ].join(', ')

  const contrast =
    Math.round(chromajs.contrast(bgColorHex, textColor.hex) * 10) / 10

  const isUnsafeContrast = contrast < 4.5

  return (
    <div
      className="TextSample"
      style={{
        color: textColor.hex,
        backgroundColor: bgColorHex,
      }}
      onClick={(e) => {
        if (e.currentTarget.contains(e.target as Node)) toggleActive()
      }}
    >
      <div className="TextSample__main-copy">
        <Tooltip
          active={active}
          content={textColor.tokenName}
          onTriggerMove={() => setActive(false)}
          onClickOutside={() => setActive(false)}
        >
          <span
            className="TextSample__sample-text"
            style={{
              color: textColor.hex,
            }}
          >
            {'Sample Text ' + contrast.toFixed(1)}
          </span>
        </Tooltip>
        <span>{isSafeInConfig === false ? '!' : ''}</span>
        <span>
          {isSafeInConfig === false &&
          textColor.tokenName.match('UNSAFE') === null
            ? 'AAAACK'
            : ''}
        </span>
      </div>
      {/* {isSafeInConfig === true && <div>safe config</div>} */}
      {/* {isSafeInConfig === false && <div>unsafe config</div>} */}
      {isSafeInConfig === undefined && (
        <div style={{ backgroundColor: 'orange', color: 'white' }}>
          missing config
        </div>
      )}
      {isSafeInConfig === true && isUnsafeContrast && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          bad conflict!
        </div>
      )}
      {/* {isSafeInConfig === false && !isUnsafeContrast && (
        <div
          style={{
            backgroundColor: 'orangered',
            color: 'white',
            width: 'max-content',
            padding: '0 4px',
          }}
        >
          minor conflict!
        </div>
      )} */}
      {showDetails && (
        <div className="TextSample__micro-copy">
          <div>{microCopy}</div>
          <div>{colorRGB}</div>
        </div>
      )}
      {/* {active && <div className="TextSample__tooltip">{textColor.tokenName}</div>} */}
    </div>
    // </Tooltip>
  )
}
