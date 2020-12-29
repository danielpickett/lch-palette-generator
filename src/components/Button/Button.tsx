import React from 'react'
import './Button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-light-svg-icons'

type IconButtonPropsType = {
  faIcon?: IconDefinition
  onClick: () => void
  title?: string
}

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonPropsType
>((props, ref) => {
  return (
    <button title={props.title} ref={ref} className="Button" onClick={props.onClick}>
      {!!props.faIcon && <FontAwesomeIcon icon={props.faIcon} />}
    </button>
  )
})
