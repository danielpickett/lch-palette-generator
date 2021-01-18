import * as CSS from 'csstype'
import { ReactNode } from 'react'
import * as Types from 'types'

interface CommonTextProps {
  children?: ReactNode
  size?: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'
  tag?: 'p' | 'span'
  weight?: 'normal' | 'bold' | 'light'
  textAlign?: CSS.StandardLonghandProperties['textAlign']
  textTransform?: CSS.StandardLonghandProperties['textTransform']
  noWrap?: boolean
  truncate?: boolean
}

export type TextKindType = 'subdued' | 'vivid' | 'vivid-subdued'

interface OnWhite {
  on: 'white'
  color?: string
  kind?: TextKindType
}
interface OnPrimary {
  on: 'primary'
  color?: string
  kind?: TextKindType
}



export type TextPropsType = Types.CommonPropsType &
  CommonTextProps &
  (
    | OnWhite
    | OnPrimary
  )
