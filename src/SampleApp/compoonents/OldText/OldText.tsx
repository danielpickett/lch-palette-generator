import React, { CSSProperties } from 'react'
import './OldText.scss'
import { OldTextPropsType } from './OldTextPropsType'

type FontWeightType = 'normal' | 'bolder' | 'lighter'

export const OldText = ({
  children,
  size = 'm',
  tag = 'span',
  weight,
  textAlign,
  on,
  color,
  textTransform,
  noWrap,
  subdued,
  UNSAFE_style,
  UNSAFE_className,
  truncate,
}: OldTextPropsType) => {
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

  const colorModifier = (() => {
    if (subdued === true) return '--subdued'
    if (subdued === 'dangerously') return '--dangerously-subdued'
    return ''
  })()

  const _style: CSSProperties = {
    fontSize: `var(--text-size-${size})`,
    color: `var(--text-on-${on}--color-${_color + colorModifier})`,
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
      className={`OldText${UNSAFE_className ? ` ${UNSAFE_className}` : ''}${
        truncate ? ' OldText--truncated' : ''
      }`}
      style={{ ..._style, ...UNSAFE_style }}
    >
      {children}
    </Element>
  )
}
