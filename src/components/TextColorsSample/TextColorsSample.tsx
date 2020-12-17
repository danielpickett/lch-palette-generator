import React from 'react'
import './TextColorsSample.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons'

export const TextColorsSample = ({
  colorHex,
  contrast,
}: {
  colorHex: string
  contrast: number
}) => {
  return (
    <div className="TextColorsSample" style={{ color: colorHex }}>
      <span>Sample Text {contrast.toFixed(2)}</span>
      {+contrast < 4.5 && (
        <FontAwesomeIcon
          className="TextColorsSample__icon"
          icon={faExclamationTriangle}
        />
      )}
    </div>
  )
}
