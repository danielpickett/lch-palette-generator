import React, { CSSProperties } from 'react'
import './IconButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type IconButtonPropsType = {
  faIcon?: IconDefinition
  onClick: () => void
  title?: string
  style?: CSSProperties
}

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonPropsType
>((props, ref) => {
  return (
    <button
      title={props.title}
      style={props.style}
      ref={ref}
      className="IconButton"
      onClick={props.onClick}
    >
      {!!props.faIcon && <FontAwesomeIcon icon={props.faIcon} />}
    </button>
  )
})
