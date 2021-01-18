import React, { CSSProperties } from 'react'
import './Text.scss'
import { TextPropsType } from './TextPropsType'

type FontWeightType = 'normal' | 'bolder' | 'lighter'

export const Text = ({
  on,
  kind,
  UNSAFE,
  children,
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
  const color =
    `var(--text-on-` +
    `${on}` +
    `${kind !== undefined ? '--' + kind : ''}` +
    `${UNSAFE ? '--UNSAFE' : ''}` +
    `)`

  const _style: CSSProperties = {
    fontSize: `var(--text-size-${size})`,
    color: color,
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
