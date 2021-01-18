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
interface OnWhiteColorGrey {
  color?: 'grey'
  on: 'white'
  subdued?: false | true | 'dangerously'
}
interface OnWhiteColorPrimary {
  color?: 'primary'
  on: 'white'
  subdued?: false | 'dangerously'
}
interface OnWhiteColorSuccess {
  color?: 'success'
  on: 'white'
  subdued?: false | 'dangerously'
}
interface OnWhiteColorWarning {
  color?: 'warning'
  on: 'white'
  subdued?: false | 'dangerously'
}
interface OnWhiteColorDanger {
  color?: 'danger'
  on: 'white'
  subdued?: false | 'dangerously'
}
interface OnGrey050ColorGrey {
  color?: 'grey'
  on: 'grey-050'
  subdued?: false | true | 'dangerously'
}
interface OnGrey050ColorPrimary {
  color?: 'primary'
  on: 'grey-050'
  subdued?: false | 'dangerously'
}
interface OnGrey050ColorSuccess {
  color?: 'success'
  on: 'grey-050'
  subdued?: false | 'dangerously'
}
interface OnGrey050ColorWarning {
  color?: 'warning'
  on: 'grey-050'
  subdued?: false | 'dangerously'
}
interface OnGrey050ColorDanger {
  color?: 'danger'
  on: 'grey-050'
  subdued?: false | 'dangerously'
}
interface OnGrey100ColorGrey {
  color?: 'grey'
  on: 'grey-100'
  subdued?: false | 'dangerously'
}
interface OnGrey100ColorPrimary {
  color?: 'primary'
  on: 'grey-100'
  subdued?: false | 'dangerously'
}
interface OnGrey100ColorSuccess {
  color?: 'success'
  on: 'grey-100'
  subdued?: false | 'dangerously'
}
interface OnGrey100ColorWarning {
  color?: 'warning'
  on: 'grey-100'
  subdued?: false | 'dangerously'
}
interface OnGrey100ColorDanger {
  color?: 'danger'
  on: 'grey-100'
  subdued?: false | 'dangerously'
}
interface OnGrey200ColorGrey {
  color?: 'grey'
  on: 'grey-200'
  subdued?: false | 'dangerously'
}
interface OnGrey200ColorPrimary {
  color?: 'primary'
  on: 'grey-200'
  subdued?: false | 'dangerously'
}
interface OnGrey200ColorSuccess {
  color?: 'success'
  on: 'grey-200'
  subdued?: false | 'dangerously'
}
interface OnGrey200ColorWarning {
  color?: 'warning'
  on: 'grey-200'
  subdued?: false | 'dangerously'
}
interface OnGrey200ColorDanger {
  color?: 'danger'
  on: 'grey-200'
  subdued?: false | 'dangerously'
}
interface OnGrey300ColorGrey {
  color?: 'grey'
  on: 'grey-300'
  subdued?: false | 'dangerously'
}
interface OnGrey400ColorGrey {
  color?: 'grey'
  on: 'grey-400'
  subdued?: false | 'dangerously'
}
interface OnGrey500ColorGrey {
  color?: 'grey'
  on: 'grey-500'
  subdued?: false | 'dangerously'
}
interface OnGrey600ColorGrey {
  color?: 'grey'
  on: 'grey-600'
  subdued?: false | true | 'dangerously'
}
interface OnGrey700ColorGrey {
  color?: 'grey'
  on: 'grey-700'
  subdued?: false | true | 'dangerously'
}
interface OnGrey700ColorPrimary {
  color?: 'primary'
  on: 'grey-700'
  subdued?: false | 'dangerously'
}
interface OnGrey700ColorSuccess {
  color?: 'success'
  on: 'grey-700'
  subdued?: false | 'dangerously'
}
interface OnGrey700ColorWarning {
  color?: 'warning'
  on: 'grey-700'
  subdued?: false | 'dangerously'
}
interface OnGrey700ColorDanger {
  color?: 'danger'
  on: 'grey-700'
  subdued?: false | 'dangerously'
}
interface OnGrey800ColorGrey {
  color?: 'grey'
  on: 'grey-800'
  subdued?: false | true | 'dangerously'
}
interface OnGrey800ColorPrimary {
  color?: 'primary'
  on: 'grey-800'
  subdued?: false | 'dangerously'
}
interface OnGrey800ColorSuccess {
  color?: 'success'
  on: 'grey-800'
  subdued?: false | 'dangerously'
}
interface OnGrey800ColorWarning {
  color?: 'warning'
  on: 'grey-800'
  subdued?: false | 'dangerously'
}
interface OnGrey800ColorDanger {
  color?: 'danger'
  on: 'grey-800'
  subdued?: false | 'dangerously'
}
interface OnGrey900ColorGrey {
  color?: 'grey'
  on: 'grey-900'
  subdued?: false | true | 'dangerously'
}
interface OnGrey900ColorPrimary {
  color?: 'primary'
  on: 'grey-900'
  subdued?: false | true | 'dangerously'
}
interface OnGrey900ColorSuccess {
  color?: 'success'
  on: 'grey-900'
  subdued?: false | true | 'dangerously'
}
interface OnGrey900ColorWarning {
  color?: 'warning'
  on: 'grey-900'
  subdued?: false | true | 'dangerously'
}
interface OnGrey900ColorDanger {
  color?: 'danger'
  on: 'grey-900'
  subdued?: false | true | 'dangerously'
}
interface OnPrimary050ColorPrimary {
  color?: 'primary'
  on: 'primary-050'
  subdued?: false | 'dangerously'
}
interface OnPrimary100ColorPrimary {
  color?: 'primary'
  on: 'primary-100'
  subdued?: false | 'dangerously'
}
interface OnPrimary200ColorPrimary {
  color?: 'primary'
  on: 'primary-200'
  subdued?: false
}
interface OnPrimary500ColorPrimary {
  color?: 'primary'
  on: 'primary-500'
  subdued?: false | 'dangerously'
}
interface OnPrimary600ColorPrimary {
  color?: 'primary'
  on: 'primary-600'
  subdued?: false | 'dangerously'
}
interface OnPrimary700ColorPrimary {
  color?: 'primary'
  on: 'primary-700'
  subdued?: false | true | 'dangerously'
}
interface OnPrimary800ColorPrimary {
  color?: 'primary'
  on: 'primary-800'
  subdued?: false | true | 'dangerously'
}
interface OnPrimary900ColorPrimary {
  color?: 'primary'
  on: 'primary-900'
  subdued?: false | true | 'dangerously'
}
interface OnSuccess050ColorSuccess {
  color?: 'success'
  on: 'success-050'
  subdued?: false | 'dangerously'
}
interface OnSuccess100ColorSuccess {
  color?: 'success'
  on: 'success-100'
  subdued?: false | 'dangerously'
}
interface OnSuccess200ColorSuccess {
  color?: 'success'
  on: 'success-200'
  subdued?: false
}
interface OnSuccess500ColorSuccess {
  color?: 'success'
  on: 'success-500'
  subdued?: false | 'dangerously'
}
interface OnSuccess600ColorSuccess {
  color?: 'success'
  on: 'success-600'
  subdued?: false | 'dangerously'
}
interface OnSuccess700ColorSuccess {
  color?: 'success'
  on: 'success-700'
  subdued?: false | true | 'dangerously'
}
interface OnSuccess800ColorSuccess {
  color?: 'success'
  on: 'success-800'
  subdued?: false | true | 'dangerously'
}
interface OnSuccess900ColorSuccess {
  color?: 'success'
  on: 'success-900'
  subdued?: false | true | 'dangerously'
}
interface OnWarning050ColorWarning {
  color?: 'warning'
  on: 'warning-050'
  subdued?: false | 'dangerously'
}
interface OnWarning100ColorWarning {
  color?: 'warning'
  on: 'warning-100'
  subdued?: false | 'dangerously'
}
interface OnWarning200ColorWarning {
  color?: 'warning'
  on: 'warning-200'
  subdued?: false
}
interface OnWarning500ColorWarning {
  color?: 'warning'
  on: 'warning-500'
  subdued?: false | 'dangerously'
}
interface OnWarning600ColorWarning {
  color?: 'warning'
  on: 'warning-600'
  subdued?: false | 'dangerously'
}
interface OnWarning700ColorWarning {
  color?: 'warning'
  on: 'warning-700'
  subdued?: false | true | 'dangerously'
}
interface OnWarning800ColorWarning {
  color?: 'warning'
  on: 'warning-800'
  subdued?: false | true | 'dangerously'
}
interface OnWarning900ColorWarning {
  color?: 'warning'
  on: 'warning-900'
  subdued?: false | true | 'dangerously'
}
interface OnDanger050ColorDanger {
  color?: 'danger'
  on: 'danger-050'
  subdued?: false | 'dangerously'
}
interface OnDanger100ColorDanger {
  color?: 'danger'
  on: 'danger-100'
  subdued?: false | 'dangerously'
}
interface OnDanger200ColorDanger {
  color?: 'danger'
  on: 'danger-200'
  subdued?: false
}
interface OnDanger500ColorDanger {
  color?: 'danger'
  on: 'danger-500'
  subdued?: false | 'dangerously'
}
interface OnDanger600ColorDanger {
  color?: 'danger'
  on: 'danger-600'
  subdued?: false | 'dangerously'
}
interface OnDanger700ColorDanger {
  color?: 'danger'
  on: 'danger-700'
  subdued?: false | true | 'dangerously'
}
interface OnDanger800ColorDanger {
  color?: 'danger'
  on: 'danger-800'
  subdued?: false | true | 'dangerously'
}
interface OnDanger900ColorDanger {
  color?: 'danger'
  on: 'danger-900'
  subdued?: false | true | 'dangerously'
}

export type OldTextPropsType = Types.CommonPropsType &
  CommonTextProps &
  (
    | OnWhiteColorGrey
    | OnWhiteColorPrimary
    | OnWhiteColorSuccess
    | OnWhiteColorWarning
    | OnWhiteColorDanger
    | OnGrey050ColorGrey
    | OnGrey050ColorPrimary
    | OnGrey050ColorSuccess
    | OnGrey050ColorWarning
    | OnGrey050ColorDanger
    | OnGrey100ColorGrey
    | OnGrey100ColorPrimary
    | OnGrey100ColorSuccess
    | OnGrey100ColorWarning
    | OnGrey100ColorDanger
    | OnGrey200ColorGrey
    | OnGrey200ColorPrimary
    | OnGrey200ColorSuccess
    | OnGrey200ColorWarning
    | OnGrey200ColorDanger
    | OnGrey300ColorGrey
    | OnGrey400ColorGrey
    | OnGrey500ColorGrey
    | OnGrey600ColorGrey
    | OnGrey700ColorGrey
    | OnGrey700ColorPrimary
    | OnGrey700ColorSuccess
    | OnGrey700ColorWarning
    | OnGrey700ColorDanger
    | OnGrey800ColorGrey
    | OnGrey800ColorPrimary
    | OnGrey800ColorSuccess
    | OnGrey800ColorWarning
    | OnGrey800ColorDanger
    | OnGrey900ColorGrey
    | OnGrey900ColorPrimary
    | OnGrey900ColorSuccess
    | OnGrey900ColorWarning
    | OnGrey900ColorDanger
    | OnPrimary050ColorPrimary
    | OnPrimary100ColorPrimary
    | OnPrimary200ColorPrimary
    | OnPrimary500ColorPrimary
    | OnPrimary600ColorPrimary
    | OnPrimary700ColorPrimary
    | OnPrimary800ColorPrimary
    | OnPrimary900ColorPrimary
    | OnSuccess050ColorSuccess
    | OnSuccess100ColorSuccess
    | OnSuccess200ColorSuccess
    | OnSuccess500ColorSuccess
    | OnSuccess600ColorSuccess
    | OnSuccess700ColorSuccess
    | OnSuccess800ColorSuccess
    | OnSuccess900ColorSuccess
    | OnWarning050ColorWarning
    | OnWarning100ColorWarning
    | OnWarning200ColorWarning
    | OnWarning500ColorWarning
    | OnWarning600ColorWarning
    | OnWarning700ColorWarning
    | OnWarning800ColorWarning
    | OnWarning900ColorWarning
    | OnDanger050ColorDanger
    | OnDanger100ColorDanger
    | OnDanger200ColorDanger
    | OnDanger500ColorDanger
    | OnDanger600ColorDanger
    | OnDanger700ColorDanger
    | OnDanger800ColorDanger
    | OnDanger900ColorDanger
  )
