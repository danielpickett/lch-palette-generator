import React from 'react'
import './TextSample.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons'
import { LCHColor } from 'types'
import { lch } from 'utils'

export const TextSample = ({
  bgColorHex,
  colorLCH,
  contrast,
  showDetails,
}: {
  bgColorHex: string
  colorLCH: LCHColor
  contrast: number
  showDetails: boolean
}) => {
  const colorHex = lch(colorLCH).hex()
  const colorRGB = 'rgb(' + lch(colorLCH).rgb().join(', ') + ')'

  const microCopy = [
    `L: ${colorLCH.l.toFixed(1)}`,
    `C: ${colorLCH.c.toFixed(1)}`,
    `H: ${colorLCH.h.toFixed(1)}`,
  ].join(', ')

  return (
    <div
      className="TextSample"
      style={{ color: colorHex, backgroundColor: bgColorHex }}
    >
      <div className="TextSample__main-copy">
        <span>Sample Text {contrast.toFixed(2)}</span>
        <span>
          {+contrast < 4.5 && (
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
