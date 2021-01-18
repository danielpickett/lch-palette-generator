import React, { CSSProperties } from 'react'
import './Text.scss'
import { TextPropsType } from './TextPropsType'

type FontWeightType = 'normal' | 'bolder' | 'lighter'

export const Text = ({
  on,
  children,
  color,
  size = 'm',
  tag = 'span',
  weight,
  textAlign,
  textTransform,
  noWrap,
  UNSAFE_style,
  UNSAFE_className,
  truncate,
}: TextPropsType) => {
  const _color = (() => {
    if (color === undefined) {
      const _on = (on && on.split('-')[0]) || 'grey'
      if (_on === 'primary') return 'primary'
      if (_on === 'success') return 'success'
      if (_on === 'warning') return 'warning'
      if (_on === 'danger') return 'danger'
      return 'grey'
    }
    return color
  })()

  const _style: CSSProperties = {
    fontSize: `var(--text-size-${size})`,
    color: `var(--text-on-${on})`,
    fontWeight: (weight
      ? `var(--text-weight-${weight})`
      : undefined) as FontWeightType,
    textAlign,
    textTransform,
    whiteSpace: noWrap ? 'nowrap' : undefined,
  }

  const Element = tag

  return (
    <Element
      className={`Text${UNSAFE_className ? ` ${UNSAFE_className}` : ''}${
        truncate ? ' Text--truncated' : ''
      }`}
      style={{ ..._style, ...UNSAFE_style }}
    >
      {children}
    </Element>
  )
}
