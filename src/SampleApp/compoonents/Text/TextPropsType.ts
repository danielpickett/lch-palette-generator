import * as CSS from 'csstype'
import { ReactNode } from 'react'
import * as Types from 'types'

// on, kind and UNSAFE prop types come from the union types below

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

export type TextPropsType = Types.CommonPropsType &
  CommonTextProps &
  TextTypesUnionType

  type TextTypesUnionType = (
    | TextOnPrimary050Type
    | TextOnPrimary050SubduedType
    | TextOnPrimary050VividType
    | TextOnPrimary050VividSubduedUnsafeType
    | TextOnPrimary100Type
    | TextOnPrimary100SubduedType
    | TextOnPrimary100VividType
    | TextOnPrimary100VividSubduedUnsafeType
    | TextOnPrimary200Type
    | TextOnPrimary200SubduedType
    | TextOnPrimary200VividType
    | TextOnPrimary200VividSubduedUnsafeType
    | TextOnPrimary300Type
    | TextOnPrimary300SubduedUnsafeType
    | TextOnPrimary300VividType
    | TextOnPrimary300VividSubduedUnsafeType
    | TextOnPrimary400Type
    | TextOnPrimary400SubduedUnsafeType
    | TextOnPrimary400VividType
    | TextOnPrimary400VividSubduedUnsafeType
    | TextOnPrimary500Type
    | TextOnPrimary500SubduedUnsafeType
    | TextOnPrimary500VividType
    | TextOnPrimary500VividSubduedUnsafeType
    | TextOnPrimary600Type
    | TextOnPrimary600SubduedUnsafeType
    | TextOnPrimary600VividType
    | TextOnPrimary600VividSubduedUnsafeType
    | TextOnPrimary700Type
    | TextOnPrimary700SubduedType
    | TextOnPrimary700VividType
    | TextOnPrimary700VividSubduedUnsafeType
    | TextOnPrimary800Type
    | TextOnPrimary800SubduedType
    | TextOnPrimary800VividType
    | TextOnPrimary800VividSubduedUnsafeType
    | TextOnPrimary900Type
    | TextOnPrimary900SubduedType
    | TextOnPrimary900VividType
    | TextOnPrimary900VividSubduedUnsafeType
    | TextOnSecondary050Type
    | TextOnSecondary050SubduedType
    | TextOnSecondary050VividType
    | TextOnSecondary050VividSubduedUnsafeType
    | TextOnSecondary100Type
    | TextOnSecondary100SubduedType
    | TextOnSecondary100VividType
    | TextOnSecondary100VividSubduedUnsafeType
    | TextOnSecondary200Type
    | TextOnSecondary200SubduedType
    | TextOnSecondary200VividType
    | TextOnSecondary200VividSubduedUnsafeType
    | TextOnSecondary300Type
    | TextOnSecondary300SubduedUnsafeType
    | TextOnSecondary300VividType
    | TextOnSecondary300VividSubduedUnsafeType
    | TextOnSecondary400Type
    | TextOnSecondary400SubduedUnsafeType
    | TextOnSecondary400VividType
    | TextOnSecondary400VividSubduedUnsafeType
    | TextOnSecondary500Type
    | TextOnSecondary500SubduedUnsafeType
    | TextOnSecondary500VividType
    | TextOnSecondary500VividSubduedUnsafeType
    | TextOnSecondary600Type
    | TextOnSecondary600SubduedUnsafeType
    | TextOnSecondary600VividType
    | TextOnSecondary600VividSubduedUnsafeType
    | TextOnSecondary700Type
    | TextOnSecondary700SubduedType
    | TextOnSecondary700VividType
    | TextOnSecondary700VividSubduedUnsafeType
    | TextOnSecondary800Type
    | TextOnSecondary800SubduedType
    | TextOnSecondary800VividType
    | TextOnSecondary800VividSubduedUnsafeType
    | TextOnSecondary900Type
    | TextOnSecondary900SubduedType
    | TextOnSecondary900VividType
    | TextOnSecondary900VividSubduedUnsafeType
    | TextOnTertiary050Type
    | TextOnTertiary050SubduedType
    | TextOnTertiary050VividType
    | TextOnTertiary050VividSubduedUnsafeType
    | TextOnTertiary100Type
    | TextOnTertiary100SubduedType
    | TextOnTertiary100VividType
    | TextOnTertiary100VividSubduedUnsafeType
    | TextOnTertiary200Type
    | TextOnTertiary200SubduedType
    | TextOnTertiary200VividType
    | TextOnTertiary200VividSubduedUnsafeType
    | TextOnTertiary300Type
    | TextOnTertiary300SubduedUnsafeType
    | TextOnTertiary300VividType
    | TextOnTertiary300VividSubduedUnsafeType
    | TextOnTertiary400Type
    | TextOnTertiary400SubduedUnsafeType
    | TextOnTertiary400VividType
    | TextOnTertiary400VividSubduedUnsafeType
    | TextOnTertiary500Type
    | TextOnTertiary500SubduedUnsafeType
    | TextOnTertiary500VividType
    | TextOnTertiary500VividSubduedUnsafeType
    | TextOnTertiary600Type
    | TextOnTertiary600SubduedUnsafeType
    | TextOnTertiary600VividType
    | TextOnTertiary600VividSubduedUnsafeType
    | TextOnTertiary700Type
    | TextOnTertiary700SubduedType
    | TextOnTertiary700VividType
    | TextOnTertiary700VividSubduedUnsafeType
    | TextOnTertiary800Type
    | TextOnTertiary800SubduedType
    | TextOnTertiary800VividType
    | TextOnTertiary800VividSubduedUnsafeType
    | TextOnTertiary900Type
    | TextOnTertiary900SubduedType
    | TextOnTertiary900VividType
    | TextOnTertiary900VividSubduedUnsafeType
    | TextOnSuccess050Type
    | TextOnSuccess050SubduedType
    | TextOnSuccess050VividType
    | TextOnSuccess050VividSubduedUnsafeType
    | TextOnSuccess100Type
    | TextOnSuccess100SubduedType
    | TextOnSuccess100VividType
    | TextOnSuccess100VividSubduedUnsafeType
    | TextOnSuccess200Type
    | TextOnSuccess200SubduedType
    | TextOnSuccess200VividType
    | TextOnSuccess200VividSubduedUnsafeType
    | TextOnSuccess300Type
    | TextOnSuccess300SubduedUnsafeType
    | TextOnSuccess300VividType
    | TextOnSuccess300VividSubduedUnsafeType
    | TextOnSuccess400Type
    | TextOnSuccess400SubduedUnsafeType
    | TextOnSuccess400VividType
    | TextOnSuccess400VividSubduedUnsafeType
    | TextOnSuccess500Type
    | TextOnSuccess500SubduedUnsafeType
    | TextOnSuccess500VividType
    | TextOnSuccess500VividSubduedUnsafeType
    | TextOnSuccess600Type
    | TextOnSuccess600SubduedUnsafeType
    | TextOnSuccess600VividType
    | TextOnSuccess600VividSubduedUnsafeType
    | TextOnSuccess700Type
    | TextOnSuccess700SubduedType
    | TextOnSuccess700VividType
    | TextOnSuccess700VividSubduedUnsafeType
    | TextOnSuccess800Type
    | TextOnSuccess800SubduedType
    | TextOnSuccess800VividType
    | TextOnSuccess800VividSubduedUnsafeType
    | TextOnSuccess900Type
    | TextOnSuccess900SubduedType
    | TextOnSuccess900VividType
    | TextOnSuccess900VividSubduedUnsafeType
    | TextOnWarning050Type
    | TextOnWarning050SubduedType
    | TextOnWarning050VividType
    | TextOnWarning050VividSubduedUnsafeType
    | TextOnWarning100Type
    | TextOnWarning100SubduedType
    | TextOnWarning100VividType
    | TextOnWarning100VividSubduedUnsafeType
    | TextOnWarning200Type
    | TextOnWarning200SubduedType
    | TextOnWarning200VividType
    | TextOnWarning200VividSubduedUnsafeType
    | TextOnWarning300Type
    | TextOnWarning300SubduedUnsafeType
    | TextOnWarning300VividType
    | TextOnWarning300VividSubduedUnsafeType
    | TextOnWarning400Type
    | TextOnWarning400SubduedUnsafeType
    | TextOnWarning400VividType
    | TextOnWarning400VividSubduedUnsafeType
    | TextOnWarning500Type
    | TextOnWarning500SubduedUnsafeType
    | TextOnWarning500VividType
    | TextOnWarning500VividSubduedUnsafeType
    | TextOnWarning600Type
    | TextOnWarning600SubduedUnsafeType
    | TextOnWarning600VividType
    | TextOnWarning600VividSubduedUnsafeType
    | TextOnWarning700Type
    | TextOnWarning700SubduedType
    | TextOnWarning700VividType
    | TextOnWarning700VividSubduedUnsafeType
    | TextOnWarning800Type
    | TextOnWarning800SubduedType
    | TextOnWarning800VividType
    | TextOnWarning800VividSubduedUnsafeType
    | TextOnWarning900Type
    | TextOnWarning900SubduedType
    | TextOnWarning900VividType
    | TextOnWarning900VividSubduedUnsafeType
    | TextOnDanger050Type
    | TextOnDanger050SubduedType
    | TextOnDanger050VividType
    | TextOnDanger050VividSubduedUnsafeType
    | TextOnDanger100Type
    | TextOnDanger100SubduedType
    | TextOnDanger100VividType
    | TextOnDanger100VividSubduedUnsafeType
    | TextOnDanger200Type
    | TextOnDanger200SubduedType
    | TextOnDanger200VividType
    | TextOnDanger200VividSubduedUnsafeType
    | TextOnDanger300Type
    | TextOnDanger300SubduedUnsafeType
    | TextOnDanger300VividType
    | TextOnDanger300VividSubduedUnsafeType
    | TextOnDanger400Type
    | TextOnDanger400SubduedUnsafeType
    | TextOnDanger400VividType
    | TextOnDanger400VividSubduedUnsafeType
    | TextOnDanger500Type
    | TextOnDanger500SubduedUnsafeType
    | TextOnDanger500VividType
    | TextOnDanger500VividSubduedUnsafeType
    | TextOnDanger600Type
    | TextOnDanger600SubduedUnsafeType
    | TextOnDanger600VividType
    | TextOnDanger600VividSubduedUnsafeType
    | TextOnDanger700Type
    | TextOnDanger700SubduedType
    | TextOnDanger700VividType
    | TextOnDanger700VividSubduedUnsafeType
    | TextOnDanger800Type
    | TextOnDanger800SubduedType
    | TextOnDanger800VividType
    | TextOnDanger800VividSubduedUnsafeType
    | TextOnDanger900Type
    | TextOnDanger900SubduedType
    | TextOnDanger900VividType
    | TextOnDanger900VividSubduedUnsafeType
    | TextOnWhiteType
    | TextOnWhiteSubduedType
    | TextOnWhitePrimaryType
    | TextOnWhitePrimarySubduedUnsafeType
    | TextOnWhiteSecondaryType
    | TextOnWhiteSecondarySubduedUnsafeType
    | TextOnWhiteTertiaryType
    | TextOnWhiteTertiarySubduedUnsafeType
    | TextOnWhiteSuccessType
    | TextOnWhiteSuccessSubduedUnsafeType
    | TextOnWhiteWarningType
    | TextOnWhiteWarningSubduedUnsafeType
    | TextOnWhiteDangerType
    | TextOnWhiteDangerSubduedUnsafeType
    | TextOnGrey050Type
    | TextOnGrey050SubduedType
    | TextOnGrey050PrimaryType
    | TextOnGrey050PrimarySubduedUnsafeType
    | TextOnGrey050SecondaryType
    | TextOnGrey050SecondarySubduedUnsafeType
    | TextOnGrey050TertiaryType
    | TextOnGrey050TertiarySubduedUnsafeType
    | TextOnGrey050SuccessType
    | TextOnGrey050SuccessSubduedUnsafeType
    | TextOnGrey050WarningType
    | TextOnGrey050WarningSubduedUnsafeType
    | TextOnGrey050DangerType
    | TextOnGrey050DangerSubduedUnsafeType
    | TextOnGrey100Type
    | TextOnGrey100SubduedType
    | TextOnGrey100PrimaryType
    | TextOnGrey100PrimarySubduedUnsafeType
    | TextOnGrey100SecondaryType
    | TextOnGrey100SecondarySubduedUnsafeType
    | TextOnGrey100TertiaryType
    | TextOnGrey100TertiarySubduedUnsafeType
    | TextOnGrey100SuccessType
    | TextOnGrey100SuccessSubduedUnsafeType
    | TextOnGrey100WarningType
    | TextOnGrey100WarningSubduedUnsafeType
    | TextOnGrey100DangerType
    | TextOnGrey100DangerSubduedUnsafeType
    | TextOnGrey200Type
    | TextOnGrey200SubduedType
    | TextOnGrey200PrimaryType
    | TextOnGrey200PrimarySubduedUnsafeType
    | TextOnGrey200SecondaryType
    | TextOnGrey200SecondarySubduedUnsafeType
    | TextOnGrey200TertiaryType
    | TextOnGrey200TertiarySubduedUnsafeType
    | TextOnGrey200SuccessType
    | TextOnGrey200SuccessSubduedUnsafeType
    | TextOnGrey200WarningType
    | TextOnGrey200WarningSubduedUnsafeType
    | TextOnGrey200DangerType
    | TextOnGrey200DangerSubduedUnsafeType
    | TextOnGrey300Type
    | TextOnGrey300SubduedUnsafeType
    | TextOnGrey300PrimaryType
    | TextOnGrey300PrimarySubduedUnsafeType
    | TextOnGrey300SecondaryType
    | TextOnGrey300SecondarySubduedUnsafeType
    | TextOnGrey300TertiaryType
    | TextOnGrey300TertiarySubduedUnsafeType
    | TextOnGrey300SuccessType
    | TextOnGrey300SuccessSubduedUnsafeType
    | TextOnGrey300WarningType
    | TextOnGrey300WarningSubduedUnsafeType
    | TextOnGrey300DangerType
    | TextOnGrey300DangerSubduedUnsafeType
    | TextOnGrey400Type
    | TextOnGrey400SubduedUnsafeType
    | TextOnGrey400PrimaryType
    | TextOnGrey400PrimarySubduedUnsafeType
    | TextOnGrey400SecondaryType
    | TextOnGrey400SecondarySubduedUnsafeType
    | TextOnGrey400TertiaryType
    | TextOnGrey400TertiarySubduedUnsafeType
    | TextOnGrey400SuccessType
    | TextOnGrey400SuccessSubduedUnsafeType
    | TextOnGrey400WarningType
    | TextOnGrey400WarningSubduedUnsafeType
    | TextOnGrey400DangerType
    | TextOnGrey400DangerSubduedUnsafeType
    | TextOnGrey500Type
    | TextOnGrey500SubduedUnsafeType
    | TextOnGrey500PrimaryType
    | TextOnGrey500PrimarySubduedUnsafeType
    | TextOnGrey500SecondaryType
    | TextOnGrey500SecondarySubduedUnsafeType
    | TextOnGrey500TertiaryType
    | TextOnGrey500TertiarySubduedUnsafeType
    | TextOnGrey500SuccessType
    | TextOnGrey500SuccessSubduedUnsafeType
    | TextOnGrey500WarningType
    | TextOnGrey500WarningSubduedUnsafeType
    | TextOnGrey500DangerType
    | TextOnGrey500DangerSubduedUnsafeType
    | TextOnGrey600Type
    | TextOnGrey600SubduedUnsafeType
    | TextOnGrey600PrimaryType
    | TextOnGrey600PrimarySubduedUnsafeType
    | TextOnGrey600SecondaryType
    | TextOnGrey600SecondarySubduedUnsafeType
    | TextOnGrey600TertiaryType
    | TextOnGrey600TertiarySubduedUnsafeType
    | TextOnGrey600SuccessType
    | TextOnGrey600SuccessSubduedUnsafeType
    | TextOnGrey600WarningType
    | TextOnGrey600WarningSubduedUnsafeType
    | TextOnGrey600DangerType
    | TextOnGrey600DangerSubduedUnsafeType
    | TextOnGrey700Type
    | TextOnGrey700SubduedType
    | TextOnGrey700PrimaryType
    | TextOnGrey700PrimarySubduedUnsafeType
    | TextOnGrey700SecondaryType
    | TextOnGrey700SecondarySubduedUnsafeType
    | TextOnGrey700TertiaryType
    | TextOnGrey700TertiarySubduedUnsafeType
    | TextOnGrey700SuccessType
    | TextOnGrey700SuccessSubduedUnsafeType
    | TextOnGrey700WarningType
    | TextOnGrey700WarningSubduedUnsafeType
    | TextOnGrey700DangerType
    | TextOnGrey700DangerSubduedUnsafeType
    | TextOnGrey800Type
    | TextOnGrey800SubduedType
    | TextOnGrey800PrimaryType
    | TextOnGrey800PrimarySubduedUnsafeType
    | TextOnGrey800SecondaryType
    | TextOnGrey800SecondarySubduedUnsafeType
    | TextOnGrey800TertiaryType
    | TextOnGrey800TertiarySubduedUnsafeType
    | TextOnGrey800SuccessType
    | TextOnGrey800SuccessSubduedUnsafeType
    | TextOnGrey800WarningType
    | TextOnGrey800WarningSubduedUnsafeType
    | TextOnGrey800DangerType
    | TextOnGrey800DangerSubduedUnsafeType
    | TextOnGrey900Type
    | TextOnGrey900SubduedType
    | TextOnGrey900PrimaryType
    | TextOnGrey900PrimarySubduedUnsafeType
    | TextOnGrey900SecondaryType
    | TextOnGrey900SecondarySubduedUnsafeType
    | TextOnGrey900TertiaryType
    | TextOnGrey900TertiarySubduedUnsafeType
    | TextOnGrey900SuccessType
    | TextOnGrey900SuccessSubduedUnsafeType
    | TextOnGrey900WarningType
    | TextOnGrey900WarningSubduedUnsafeType
    | TextOnGrey900DangerType
    | TextOnGrey900DangerSubduedUnsafeType
    | TextOnPrimaryLighterType
    | TextOnPrimaryLighterSubduedUnsafeType
    | TextOnPrimaryLighterVividType
    | TextOnPrimaryLighterVividSubduedUnsafeType
    | TextOnPrimaryType
    | TextOnPrimarySubduedUnsafeType
    | TextOnPrimaryVividType
    | TextOnPrimaryVividSubduedUnsafeType
    | TextOnPrimaryDarkerType
    | TextOnPrimaryDarkerSubduedUnsafeType
    | TextOnPrimaryDarkerVividType
    | TextOnPrimaryDarkerVividSubduedUnsafeType
    | TextOnSecondaryLighterType
    | TextOnSecondaryLighterSubduedUnsafeType
    | TextOnSecondaryLighterVividType
    | TextOnSecondaryLighterVividSubduedUnsafeType
    | TextOnSecondaryType
    | TextOnSecondarySubduedUnsafeType
    | TextOnSecondaryVividType
    | TextOnSecondaryVividSubduedUnsafeType
    | TextOnSecondaryDarkerType
    | TextOnSecondaryDarkerSubduedUnsafeType
    | TextOnSecondaryDarkerVividType
    | TextOnSecondaryDarkerVividSubduedUnsafeType
    | TextOnTertiaryLighterType
    | TextOnTertiaryLighterSubduedUnsafeType
    | TextOnTertiaryLighterVividType
    | TextOnTertiaryLighterVividSubduedUnsafeType
    | TextOnTertiaryType
    | TextOnTertiarySubduedUnsafeType
    | TextOnTertiaryVividType
    | TextOnTertiaryVividSubduedUnsafeType
    | TextOnTertiaryDarkerType
    | TextOnTertiaryDarkerSubduedUnsafeType
    | TextOnTertiaryDarkerVividType
    | TextOnTertiaryDarkerVividSubduedUnsafeType
    | TextOnSuccessLighterType
    | TextOnSuccessLighterSubduedUnsafeType
    | TextOnSuccessLighterVividType
    | TextOnSuccessLighterVividSubduedUnsafeType
    | TextOnSuccessType
    | TextOnSuccessSubduedUnsafeType
    | TextOnSuccessVividType
    | TextOnSuccessVividSubduedUnsafeType
    | TextOnSuccessDarkerType
    | TextOnSuccessDarkerSubduedUnsafeType
    | TextOnSuccessDarkerVividType
    | TextOnSuccessDarkerVividSubduedUnsafeType
    | TextOnWarningLighterType
    | TextOnWarningLighterSubduedUnsafeType
    | TextOnWarningLighterVividType
    | TextOnWarningLighterVividSubduedUnsafeType
    | TextOnWarningType
    | TextOnWarningSubduedUnsafeType
    | TextOnWarningVividType
    | TextOnWarningVividSubduedUnsafeType
    | TextOnWarningDarkerType
    | TextOnWarningDarkerSubduedUnsafeType
    | TextOnWarningDarkerVividType
    | TextOnWarningDarkerVividSubduedUnsafeType
    | TextOnDangerLighterType
    | TextOnDangerLighterSubduedUnsafeType
    | TextOnDangerLighterVividType
    | TextOnDangerLighterVividSubduedUnsafeType
    | TextOnDangerType
    | TextOnDangerSubduedUnsafeType
    | TextOnDangerVividType
    | TextOnDangerVividSubduedUnsafeType
    | TextOnDangerDarkerType
    | TextOnDangerDarkerSubduedUnsafeType
    | TextOnDangerDarkerVividType
    | TextOnDangerDarkerVividSubduedUnsafeType
  )
  
  // text-on-primary-050
  interface TextOnPrimary050Type {
    on: 'primary-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-050--subdued
  interface TextOnPrimary050SubduedType {
    on: 'primary-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-050--vivid
  interface TextOnPrimary050VividType {
    on: 'primary-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-050--vivid-subdued--UNSAFE
  interface TextOnPrimary050VividSubduedUnsafeType {
    on: 'primary-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-100
  interface TextOnPrimary100Type {
    on: 'primary-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-100--subdued
  interface TextOnPrimary100SubduedType {
    on: 'primary-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-100--vivid
  interface TextOnPrimary100VividType {
    on: 'primary-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-100--vivid-subdued--UNSAFE
  interface TextOnPrimary100VividSubduedUnsafeType {
    on: 'primary-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-200
  interface TextOnPrimary200Type {
    on: 'primary-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-200--subdued
  interface TextOnPrimary200SubduedType {
    on: 'primary-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-200--vivid
  interface TextOnPrimary200VividType {
    on: 'primary-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-200--vivid-subdued--UNSAFE
  interface TextOnPrimary200VividSubduedUnsafeType {
    on: 'primary-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-300
  interface TextOnPrimary300Type {
    on: 'primary-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-300--subdued--UNSAFE
  interface TextOnPrimary300SubduedUnsafeType {
    on: 'primary-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-300--vivid
  interface TextOnPrimary300VividType {
    on: 'primary-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-300--vivid-subdued--UNSAFE
  interface TextOnPrimary300VividSubduedUnsafeType {
    on: 'primary-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-400
  interface TextOnPrimary400Type {
    on: 'primary-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-400--subdued--UNSAFE
  interface TextOnPrimary400SubduedUnsafeType {
    on: 'primary-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-400--vivid
  interface TextOnPrimary400VividType {
    on: 'primary-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-400--vivid-subdued--UNSAFE
  interface TextOnPrimary400VividSubduedUnsafeType {
    on: 'primary-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-500
  interface TextOnPrimary500Type {
    on: 'primary-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-500--subdued--UNSAFE
  interface TextOnPrimary500SubduedUnsafeType {
    on: 'primary-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-500--vivid
  interface TextOnPrimary500VividType {
    on: 'primary-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-500--vivid-subdued--UNSAFE
  interface TextOnPrimary500VividSubduedUnsafeType {
    on: 'primary-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-600
  interface TextOnPrimary600Type {
    on: 'primary-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-600--subdued--UNSAFE
  interface TextOnPrimary600SubduedUnsafeType {
    on: 'primary-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-600--vivid
  interface TextOnPrimary600VividType {
    on: 'primary-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-600--vivid-subdued--UNSAFE
  interface TextOnPrimary600VividSubduedUnsafeType {
    on: 'primary-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-700
  interface TextOnPrimary700Type {
    on: 'primary-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-700--subdued
  interface TextOnPrimary700SubduedType {
    on: 'primary-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-700--vivid
  interface TextOnPrimary700VividType {
    on: 'primary-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-700--vivid-subdued--UNSAFE
  interface TextOnPrimary700VividSubduedUnsafeType {
    on: 'primary-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-800
  interface TextOnPrimary800Type {
    on: 'primary-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-800--subdued
  interface TextOnPrimary800SubduedType {
    on: 'primary-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-800--vivid
  interface TextOnPrimary800VividType {
    on: 'primary-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-800--vivid-subdued--UNSAFE
  interface TextOnPrimary800VividSubduedUnsafeType {
    on: 'primary-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-900
  interface TextOnPrimary900Type {
    on: 'primary-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-900--subdued
  interface TextOnPrimary900SubduedType {
    on: 'primary-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-900--vivid
  interface TextOnPrimary900VividType {
    on: 'primary-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-900--vivid-subdued--UNSAFE
  interface TextOnPrimary900VividSubduedUnsafeType {
    on: 'primary-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-050
  interface TextOnSecondary050Type {
    on: 'secondary-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-050--subdued
  interface TextOnSecondary050SubduedType {
    on: 'secondary-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-050--vivid
  interface TextOnSecondary050VividType {
    on: 'secondary-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-050--vivid-subdued--UNSAFE
  interface TextOnSecondary050VividSubduedUnsafeType {
    on: 'secondary-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-100
  interface TextOnSecondary100Type {
    on: 'secondary-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-100--subdued
  interface TextOnSecondary100SubduedType {
    on: 'secondary-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-100--vivid
  interface TextOnSecondary100VividType {
    on: 'secondary-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-100--vivid-subdued--UNSAFE
  interface TextOnSecondary100VividSubduedUnsafeType {
    on: 'secondary-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-200
  interface TextOnSecondary200Type {
    on: 'secondary-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-200--subdued
  interface TextOnSecondary200SubduedType {
    on: 'secondary-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-200--vivid
  interface TextOnSecondary200VividType {
    on: 'secondary-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-200--vivid-subdued--UNSAFE
  interface TextOnSecondary200VividSubduedUnsafeType {
    on: 'secondary-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-300
  interface TextOnSecondary300Type {
    on: 'secondary-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-300--subdued--UNSAFE
  interface TextOnSecondary300SubduedUnsafeType {
    on: 'secondary-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-300--vivid
  interface TextOnSecondary300VividType {
    on: 'secondary-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-300--vivid-subdued--UNSAFE
  interface TextOnSecondary300VividSubduedUnsafeType {
    on: 'secondary-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-400
  interface TextOnSecondary400Type {
    on: 'secondary-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-400--subdued--UNSAFE
  interface TextOnSecondary400SubduedUnsafeType {
    on: 'secondary-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-400--vivid
  interface TextOnSecondary400VividType {
    on: 'secondary-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-400--vivid-subdued--UNSAFE
  interface TextOnSecondary400VividSubduedUnsafeType {
    on: 'secondary-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-500
  interface TextOnSecondary500Type {
    on: 'secondary-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-500--subdued--UNSAFE
  interface TextOnSecondary500SubduedUnsafeType {
    on: 'secondary-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-500--vivid
  interface TextOnSecondary500VividType {
    on: 'secondary-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-500--vivid-subdued--UNSAFE
  interface TextOnSecondary500VividSubduedUnsafeType {
    on: 'secondary-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-600
  interface TextOnSecondary600Type {
    on: 'secondary-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-600--subdued--UNSAFE
  interface TextOnSecondary600SubduedUnsafeType {
    on: 'secondary-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-600--vivid
  interface TextOnSecondary600VividType {
    on: 'secondary-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-600--vivid-subdued--UNSAFE
  interface TextOnSecondary600VividSubduedUnsafeType {
    on: 'secondary-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-700
  interface TextOnSecondary700Type {
    on: 'secondary-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-700--subdued
  interface TextOnSecondary700SubduedType {
    on: 'secondary-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-700--vivid
  interface TextOnSecondary700VividType {
    on: 'secondary-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-700--vivid-subdued--UNSAFE
  interface TextOnSecondary700VividSubduedUnsafeType {
    on: 'secondary-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-800
  interface TextOnSecondary800Type {
    on: 'secondary-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-800--subdued
  interface TextOnSecondary800SubduedType {
    on: 'secondary-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-800--vivid
  interface TextOnSecondary800VividType {
    on: 'secondary-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-800--vivid-subdued--UNSAFE
  interface TextOnSecondary800VividSubduedUnsafeType {
    on: 'secondary-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-900
  interface TextOnSecondary900Type {
    on: 'secondary-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-900--subdued
  interface TextOnSecondary900SubduedType {
    on: 'secondary-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-900--vivid
  interface TextOnSecondary900VividType {
    on: 'secondary-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-900--vivid-subdued--UNSAFE
  interface TextOnSecondary900VividSubduedUnsafeType {
    on: 'secondary-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-050
  interface TextOnTertiary050Type {
    on: 'tertiary-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-050--subdued
  interface TextOnTertiary050SubduedType {
    on: 'tertiary-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-050--vivid
  interface TextOnTertiary050VividType {
    on: 'tertiary-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-050--vivid-subdued--UNSAFE
  interface TextOnTertiary050VividSubduedUnsafeType {
    on: 'tertiary-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-100
  interface TextOnTertiary100Type {
    on: 'tertiary-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-100--subdued
  interface TextOnTertiary100SubduedType {
    on: 'tertiary-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-100--vivid
  interface TextOnTertiary100VividType {
    on: 'tertiary-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-100--vivid-subdued--UNSAFE
  interface TextOnTertiary100VividSubduedUnsafeType {
    on: 'tertiary-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-200
  interface TextOnTertiary200Type {
    on: 'tertiary-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-200--subdued
  interface TextOnTertiary200SubduedType {
    on: 'tertiary-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-200--vivid
  interface TextOnTertiary200VividType {
    on: 'tertiary-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-200--vivid-subdued--UNSAFE
  interface TextOnTertiary200VividSubduedUnsafeType {
    on: 'tertiary-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-300
  interface TextOnTertiary300Type {
    on: 'tertiary-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-300--subdued--UNSAFE
  interface TextOnTertiary300SubduedUnsafeType {
    on: 'tertiary-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-300--vivid
  interface TextOnTertiary300VividType {
    on: 'tertiary-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-300--vivid-subdued--UNSAFE
  interface TextOnTertiary300VividSubduedUnsafeType {
    on: 'tertiary-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-400
  interface TextOnTertiary400Type {
    on: 'tertiary-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-400--subdued--UNSAFE
  interface TextOnTertiary400SubduedUnsafeType {
    on: 'tertiary-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-400--vivid
  interface TextOnTertiary400VividType {
    on: 'tertiary-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-400--vivid-subdued--UNSAFE
  interface TextOnTertiary400VividSubduedUnsafeType {
    on: 'tertiary-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-500
  interface TextOnTertiary500Type {
    on: 'tertiary-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-500--subdued--UNSAFE
  interface TextOnTertiary500SubduedUnsafeType {
    on: 'tertiary-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-500--vivid
  interface TextOnTertiary500VividType {
    on: 'tertiary-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-500--vivid-subdued--UNSAFE
  interface TextOnTertiary500VividSubduedUnsafeType {
    on: 'tertiary-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-600
  interface TextOnTertiary600Type {
    on: 'tertiary-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-600--subdued--UNSAFE
  interface TextOnTertiary600SubduedUnsafeType {
    on: 'tertiary-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-600--vivid
  interface TextOnTertiary600VividType {
    on: 'tertiary-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-600--vivid-subdued--UNSAFE
  interface TextOnTertiary600VividSubduedUnsafeType {
    on: 'tertiary-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-700
  interface TextOnTertiary700Type {
    on: 'tertiary-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-700--subdued
  interface TextOnTertiary700SubduedType {
    on: 'tertiary-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-700--vivid
  interface TextOnTertiary700VividType {
    on: 'tertiary-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-700--vivid-subdued--UNSAFE
  interface TextOnTertiary700VividSubduedUnsafeType {
    on: 'tertiary-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-800
  interface TextOnTertiary800Type {
    on: 'tertiary-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-800--subdued
  interface TextOnTertiary800SubduedType {
    on: 'tertiary-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-800--vivid
  interface TextOnTertiary800VividType {
    on: 'tertiary-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-800--vivid-subdued--UNSAFE
  interface TextOnTertiary800VividSubduedUnsafeType {
    on: 'tertiary-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-900
  interface TextOnTertiary900Type {
    on: 'tertiary-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-900--subdued
  interface TextOnTertiary900SubduedType {
    on: 'tertiary-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-900--vivid
  interface TextOnTertiary900VividType {
    on: 'tertiary-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-900--vivid-subdued--UNSAFE
  interface TextOnTertiary900VividSubduedUnsafeType {
    on: 'tertiary-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-050
  interface TextOnSuccess050Type {
    on: 'success-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-050--subdued
  interface TextOnSuccess050SubduedType {
    on: 'success-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-050--vivid
  interface TextOnSuccess050VividType {
    on: 'success-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-050--vivid-subdued--UNSAFE
  interface TextOnSuccess050VividSubduedUnsafeType {
    on: 'success-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-100
  interface TextOnSuccess100Type {
    on: 'success-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-100--subdued
  interface TextOnSuccess100SubduedType {
    on: 'success-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-100--vivid
  interface TextOnSuccess100VividType {
    on: 'success-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-100--vivid-subdued--UNSAFE
  interface TextOnSuccess100VividSubduedUnsafeType {
    on: 'success-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-200
  interface TextOnSuccess200Type {
    on: 'success-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-200--subdued
  interface TextOnSuccess200SubduedType {
    on: 'success-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-200--vivid
  interface TextOnSuccess200VividType {
    on: 'success-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-200--vivid-subdued--UNSAFE
  interface TextOnSuccess200VividSubduedUnsafeType {
    on: 'success-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-300
  interface TextOnSuccess300Type {
    on: 'success-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-300--subdued--UNSAFE
  interface TextOnSuccess300SubduedUnsafeType {
    on: 'success-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-300--vivid
  interface TextOnSuccess300VividType {
    on: 'success-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-300--vivid-subdued--UNSAFE
  interface TextOnSuccess300VividSubduedUnsafeType {
    on: 'success-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-400
  interface TextOnSuccess400Type {
    on: 'success-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-400--subdued--UNSAFE
  interface TextOnSuccess400SubduedUnsafeType {
    on: 'success-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-400--vivid
  interface TextOnSuccess400VividType {
    on: 'success-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-400--vivid-subdued--UNSAFE
  interface TextOnSuccess400VividSubduedUnsafeType {
    on: 'success-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-500
  interface TextOnSuccess500Type {
    on: 'success-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-500--subdued--UNSAFE
  interface TextOnSuccess500SubduedUnsafeType {
    on: 'success-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-500--vivid
  interface TextOnSuccess500VividType {
    on: 'success-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-500--vivid-subdued--UNSAFE
  interface TextOnSuccess500VividSubduedUnsafeType {
    on: 'success-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-600
  interface TextOnSuccess600Type {
    on: 'success-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-600--subdued--UNSAFE
  interface TextOnSuccess600SubduedUnsafeType {
    on: 'success-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-600--vivid
  interface TextOnSuccess600VividType {
    on: 'success-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-600--vivid-subdued--UNSAFE
  interface TextOnSuccess600VividSubduedUnsafeType {
    on: 'success-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-700
  interface TextOnSuccess700Type {
    on: 'success-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-700--subdued
  interface TextOnSuccess700SubduedType {
    on: 'success-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-700--vivid
  interface TextOnSuccess700VividType {
    on: 'success-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-700--vivid-subdued--UNSAFE
  interface TextOnSuccess700VividSubduedUnsafeType {
    on: 'success-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-800
  interface TextOnSuccess800Type {
    on: 'success-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-800--subdued
  interface TextOnSuccess800SubduedType {
    on: 'success-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-800--vivid
  interface TextOnSuccess800VividType {
    on: 'success-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-800--vivid-subdued--UNSAFE
  interface TextOnSuccess800VividSubduedUnsafeType {
    on: 'success-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-900
  interface TextOnSuccess900Type {
    on: 'success-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-900--subdued
  interface TextOnSuccess900SubduedType {
    on: 'success-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-900--vivid
  interface TextOnSuccess900VividType {
    on: 'success-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-900--vivid-subdued--UNSAFE
  interface TextOnSuccess900VividSubduedUnsafeType {
    on: 'success-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-050
  interface TextOnWarning050Type {
    on: 'warning-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-050--subdued
  interface TextOnWarning050SubduedType {
    on: 'warning-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-050--vivid
  interface TextOnWarning050VividType {
    on: 'warning-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-050--vivid-subdued--UNSAFE
  interface TextOnWarning050VividSubduedUnsafeType {
    on: 'warning-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-100
  interface TextOnWarning100Type {
    on: 'warning-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-100--subdued
  interface TextOnWarning100SubduedType {
    on: 'warning-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-100--vivid
  interface TextOnWarning100VividType {
    on: 'warning-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-100--vivid-subdued--UNSAFE
  interface TextOnWarning100VividSubduedUnsafeType {
    on: 'warning-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-200
  interface TextOnWarning200Type {
    on: 'warning-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-200--subdued
  interface TextOnWarning200SubduedType {
    on: 'warning-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-200--vivid
  interface TextOnWarning200VividType {
    on: 'warning-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-200--vivid-subdued--UNSAFE
  interface TextOnWarning200VividSubduedUnsafeType {
    on: 'warning-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-300
  interface TextOnWarning300Type {
    on: 'warning-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-300--subdued--UNSAFE
  interface TextOnWarning300SubduedUnsafeType {
    on: 'warning-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-300--vivid
  interface TextOnWarning300VividType {
    on: 'warning-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-300--vivid-subdued--UNSAFE
  interface TextOnWarning300VividSubduedUnsafeType {
    on: 'warning-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-400
  interface TextOnWarning400Type {
    on: 'warning-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-400--subdued--UNSAFE
  interface TextOnWarning400SubduedUnsafeType {
    on: 'warning-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-400--vivid
  interface TextOnWarning400VividType {
    on: 'warning-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-400--vivid-subdued--UNSAFE
  interface TextOnWarning400VividSubduedUnsafeType {
    on: 'warning-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-500
  interface TextOnWarning500Type {
    on: 'warning-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-500--subdued--UNSAFE
  interface TextOnWarning500SubduedUnsafeType {
    on: 'warning-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-500--vivid
  interface TextOnWarning500VividType {
    on: 'warning-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-500--vivid-subdued--UNSAFE
  interface TextOnWarning500VividSubduedUnsafeType {
    on: 'warning-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-600
  interface TextOnWarning600Type {
    on: 'warning-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-600--subdued--UNSAFE
  interface TextOnWarning600SubduedUnsafeType {
    on: 'warning-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-600--vivid
  interface TextOnWarning600VividType {
    on: 'warning-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-600--vivid-subdued--UNSAFE
  interface TextOnWarning600VividSubduedUnsafeType {
    on: 'warning-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-700
  interface TextOnWarning700Type {
    on: 'warning-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-700--subdued
  interface TextOnWarning700SubduedType {
    on: 'warning-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-700--vivid
  interface TextOnWarning700VividType {
    on: 'warning-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-700--vivid-subdued--UNSAFE
  interface TextOnWarning700VividSubduedUnsafeType {
    on: 'warning-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-800
  interface TextOnWarning800Type {
    on: 'warning-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-800--subdued
  interface TextOnWarning800SubduedType {
    on: 'warning-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-800--vivid
  interface TextOnWarning800VividType {
    on: 'warning-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-800--vivid-subdued--UNSAFE
  interface TextOnWarning800VividSubduedUnsafeType {
    on: 'warning-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-900
  interface TextOnWarning900Type {
    on: 'warning-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-900--subdued
  interface TextOnWarning900SubduedType {
    on: 'warning-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-900--vivid
  interface TextOnWarning900VividType {
    on: 'warning-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-900--vivid-subdued--UNSAFE
  interface TextOnWarning900VividSubduedUnsafeType {
    on: 'warning-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-050
  interface TextOnDanger050Type {
    on: 'danger-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-050--subdued
  interface TextOnDanger050SubduedType {
    on: 'danger-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-050--vivid
  interface TextOnDanger050VividType {
    on: 'danger-050'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-050--vivid-subdued--UNSAFE
  interface TextOnDanger050VividSubduedUnsafeType {
    on: 'danger-050'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-100
  interface TextOnDanger100Type {
    on: 'danger-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-100--subdued
  interface TextOnDanger100SubduedType {
    on: 'danger-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-100--vivid
  interface TextOnDanger100VividType {
    on: 'danger-100'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-100--vivid-subdued--UNSAFE
  interface TextOnDanger100VividSubduedUnsafeType {
    on: 'danger-100'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-200
  interface TextOnDanger200Type {
    on: 'danger-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-200--subdued
  interface TextOnDanger200SubduedType {
    on: 'danger-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-200--vivid
  interface TextOnDanger200VividType {
    on: 'danger-200'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-200--vivid-subdued--UNSAFE
  interface TextOnDanger200VividSubduedUnsafeType {
    on: 'danger-200'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-300
  interface TextOnDanger300Type {
    on: 'danger-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-300--subdued--UNSAFE
  interface TextOnDanger300SubduedUnsafeType {
    on: 'danger-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-300--vivid
  interface TextOnDanger300VividType {
    on: 'danger-300'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-300--vivid-subdued--UNSAFE
  interface TextOnDanger300VividSubduedUnsafeType {
    on: 'danger-300'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-400
  interface TextOnDanger400Type {
    on: 'danger-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-400--subdued--UNSAFE
  interface TextOnDanger400SubduedUnsafeType {
    on: 'danger-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-400--vivid
  interface TextOnDanger400VividType {
    on: 'danger-400'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-400--vivid-subdued--UNSAFE
  interface TextOnDanger400VividSubduedUnsafeType {
    on: 'danger-400'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-500
  interface TextOnDanger500Type {
    on: 'danger-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-500--subdued--UNSAFE
  interface TextOnDanger500SubduedUnsafeType {
    on: 'danger-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-500--vivid
  interface TextOnDanger500VividType {
    on: 'danger-500'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-500--vivid-subdued--UNSAFE
  interface TextOnDanger500VividSubduedUnsafeType {
    on: 'danger-500'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-600
  interface TextOnDanger600Type {
    on: 'danger-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-600--subdued--UNSAFE
  interface TextOnDanger600SubduedUnsafeType {
    on: 'danger-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-600--vivid
  interface TextOnDanger600VividType {
    on: 'danger-600'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-600--vivid-subdued--UNSAFE
  interface TextOnDanger600VividSubduedUnsafeType {
    on: 'danger-600'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-700
  interface TextOnDanger700Type {
    on: 'danger-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-700--subdued
  interface TextOnDanger700SubduedType {
    on: 'danger-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-700--vivid
  interface TextOnDanger700VividType {
    on: 'danger-700'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-700--vivid-subdued--UNSAFE
  interface TextOnDanger700VividSubduedUnsafeType {
    on: 'danger-700'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-800
  interface TextOnDanger800Type {
    on: 'danger-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-800--subdued
  interface TextOnDanger800SubduedType {
    on: 'danger-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-800--vivid
  interface TextOnDanger800VividType {
    on: 'danger-800'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-800--vivid-subdued--UNSAFE
  interface TextOnDanger800VividSubduedUnsafeType {
    on: 'danger-800'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-900
  interface TextOnDanger900Type {
    on: 'danger-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-900--subdued
  interface TextOnDanger900SubduedType {
    on: 'danger-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-900--vivid
  interface TextOnDanger900VividType {
    on: 'danger-900'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-900--vivid-subdued--UNSAFE
  interface TextOnDanger900VividSubduedUnsafeType {
    on: 'danger-900'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-white
  interface TextOnWhiteType {
    on: 'white'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-white--subdued
  interface TextOnWhiteSubduedType {
    on: 'white'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--primary
  interface TextOnWhitePrimaryType {
    on: 'white'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--primary-subdued--UNSAFE
  interface TextOnWhitePrimarySubduedUnsafeType {
    on: 'white'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-white--secondary
  interface TextOnWhiteSecondaryType {
    on: 'white'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--secondary-subdued--UNSAFE
  interface TextOnWhiteSecondarySubduedUnsafeType {
    on: 'white'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-white--tertiary
  interface TextOnWhiteTertiaryType {
    on: 'white'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--tertiary-subdued--UNSAFE
  interface TextOnWhiteTertiarySubduedUnsafeType {
    on: 'white'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-white--success
  interface TextOnWhiteSuccessType {
    on: 'white'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--success-subdued--UNSAFE
  interface TextOnWhiteSuccessSubduedUnsafeType {
    on: 'white'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-white--warning
  interface TextOnWhiteWarningType {
    on: 'white'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--warning-subdued--UNSAFE
  interface TextOnWhiteWarningSubduedUnsafeType {
    on: 'white'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-white--danger
  interface TextOnWhiteDangerType {
    on: 'white'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-white--danger-subdued--UNSAFE
  interface TextOnWhiteDangerSubduedUnsafeType {
    on: 'white'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050
  interface TextOnGrey050Type {
    on: 'grey-050'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--subdued
  interface TextOnGrey050SubduedType {
    on: 'grey-050'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--primary
  interface TextOnGrey050PrimaryType {
    on: 'grey-050'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--primary-subdued--UNSAFE
  interface TextOnGrey050PrimarySubduedUnsafeType {
    on: 'grey-050'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050--secondary
  interface TextOnGrey050SecondaryType {
    on: 'grey-050'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--secondary-subdued--UNSAFE
  interface TextOnGrey050SecondarySubduedUnsafeType {
    on: 'grey-050'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050--tertiary
  interface TextOnGrey050TertiaryType {
    on: 'grey-050'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--tertiary-subdued--UNSAFE
  interface TextOnGrey050TertiarySubduedUnsafeType {
    on: 'grey-050'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050--success
  interface TextOnGrey050SuccessType {
    on: 'grey-050'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--success-subdued--UNSAFE
  interface TextOnGrey050SuccessSubduedUnsafeType {
    on: 'grey-050'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050--warning
  interface TextOnGrey050WarningType {
    on: 'grey-050'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--warning-subdued--UNSAFE
  interface TextOnGrey050WarningSubduedUnsafeType {
    on: 'grey-050'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-050--danger
  interface TextOnGrey050DangerType {
    on: 'grey-050'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-050--danger-subdued--UNSAFE
  interface TextOnGrey050DangerSubduedUnsafeType {
    on: 'grey-050'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100
  interface TextOnGrey100Type {
    on: 'grey-100'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--subdued
  interface TextOnGrey100SubduedType {
    on: 'grey-100'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--primary
  interface TextOnGrey100PrimaryType {
    on: 'grey-100'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--primary-subdued--UNSAFE
  interface TextOnGrey100PrimarySubduedUnsafeType {
    on: 'grey-100'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100--secondary
  interface TextOnGrey100SecondaryType {
    on: 'grey-100'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--secondary-subdued--UNSAFE
  interface TextOnGrey100SecondarySubduedUnsafeType {
    on: 'grey-100'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100--tertiary
  interface TextOnGrey100TertiaryType {
    on: 'grey-100'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--tertiary-subdued--UNSAFE
  interface TextOnGrey100TertiarySubduedUnsafeType {
    on: 'grey-100'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100--success
  interface TextOnGrey100SuccessType {
    on: 'grey-100'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--success-subdued--UNSAFE
  interface TextOnGrey100SuccessSubduedUnsafeType {
    on: 'grey-100'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100--warning
  interface TextOnGrey100WarningType {
    on: 'grey-100'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--warning-subdued--UNSAFE
  interface TextOnGrey100WarningSubduedUnsafeType {
    on: 'grey-100'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-100--danger
  interface TextOnGrey100DangerType {
    on: 'grey-100'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-100--danger-subdued--UNSAFE
  interface TextOnGrey100DangerSubduedUnsafeType {
    on: 'grey-100'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200
  interface TextOnGrey200Type {
    on: 'grey-200'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--subdued
  interface TextOnGrey200SubduedType {
    on: 'grey-200'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--primary
  interface TextOnGrey200PrimaryType {
    on: 'grey-200'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--primary-subdued--UNSAFE
  interface TextOnGrey200PrimarySubduedUnsafeType {
    on: 'grey-200'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200--secondary
  interface TextOnGrey200SecondaryType {
    on: 'grey-200'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--secondary-subdued--UNSAFE
  interface TextOnGrey200SecondarySubduedUnsafeType {
    on: 'grey-200'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200--tertiary
  interface TextOnGrey200TertiaryType {
    on: 'grey-200'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--tertiary-subdued--UNSAFE
  interface TextOnGrey200TertiarySubduedUnsafeType {
    on: 'grey-200'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200--success
  interface TextOnGrey200SuccessType {
    on: 'grey-200'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--success-subdued--UNSAFE
  interface TextOnGrey200SuccessSubduedUnsafeType {
    on: 'grey-200'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200--warning
  interface TextOnGrey200WarningType {
    on: 'grey-200'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--warning-subdued--UNSAFE
  interface TextOnGrey200WarningSubduedUnsafeType {
    on: 'grey-200'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-200--danger
  interface TextOnGrey200DangerType {
    on: 'grey-200'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-200--danger-subdued--UNSAFE
  interface TextOnGrey200DangerSubduedUnsafeType {
    on: 'grey-200'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300
  interface TextOnGrey300Type {
    on: 'grey-300'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--subdued--UNSAFE
  interface TextOnGrey300SubduedUnsafeType {
    on: 'grey-300'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--primary
  interface TextOnGrey300PrimaryType {
    on: 'grey-300'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--primary-subdued--UNSAFE
  interface TextOnGrey300PrimarySubduedUnsafeType {
    on: 'grey-300'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--secondary
  interface TextOnGrey300SecondaryType {
    on: 'grey-300'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--secondary-subdued--UNSAFE
  interface TextOnGrey300SecondarySubduedUnsafeType {
    on: 'grey-300'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--tertiary
  interface TextOnGrey300TertiaryType {
    on: 'grey-300'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--tertiary-subdued--UNSAFE
  interface TextOnGrey300TertiarySubduedUnsafeType {
    on: 'grey-300'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--success
  interface TextOnGrey300SuccessType {
    on: 'grey-300'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--success-subdued--UNSAFE
  interface TextOnGrey300SuccessSubduedUnsafeType {
    on: 'grey-300'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--warning
  interface TextOnGrey300WarningType {
    on: 'grey-300'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--warning-subdued--UNSAFE
  interface TextOnGrey300WarningSubduedUnsafeType {
    on: 'grey-300'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-300--danger
  interface TextOnGrey300DangerType {
    on: 'grey-300'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-300--danger-subdued--UNSAFE
  interface TextOnGrey300DangerSubduedUnsafeType {
    on: 'grey-300'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400
  interface TextOnGrey400Type {
    on: 'grey-400'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--subdued--UNSAFE
  interface TextOnGrey400SubduedUnsafeType {
    on: 'grey-400'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--primary
  interface TextOnGrey400PrimaryType {
    on: 'grey-400'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--primary-subdued--UNSAFE
  interface TextOnGrey400PrimarySubduedUnsafeType {
    on: 'grey-400'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--secondary
  interface TextOnGrey400SecondaryType {
    on: 'grey-400'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--secondary-subdued--UNSAFE
  interface TextOnGrey400SecondarySubduedUnsafeType {
    on: 'grey-400'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--tertiary
  interface TextOnGrey400TertiaryType {
    on: 'grey-400'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--tertiary-subdued--UNSAFE
  interface TextOnGrey400TertiarySubduedUnsafeType {
    on: 'grey-400'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--success
  interface TextOnGrey400SuccessType {
    on: 'grey-400'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--success-subdued--UNSAFE
  interface TextOnGrey400SuccessSubduedUnsafeType {
    on: 'grey-400'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--warning
  interface TextOnGrey400WarningType {
    on: 'grey-400'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--warning-subdued--UNSAFE
  interface TextOnGrey400WarningSubduedUnsafeType {
    on: 'grey-400'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-400--danger
  interface TextOnGrey400DangerType {
    on: 'grey-400'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-400--danger-subdued--UNSAFE
  interface TextOnGrey400DangerSubduedUnsafeType {
    on: 'grey-400'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500
  interface TextOnGrey500Type {
    on: 'grey-500'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--subdued--UNSAFE
  interface TextOnGrey500SubduedUnsafeType {
    on: 'grey-500'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--primary
  interface TextOnGrey500PrimaryType {
    on: 'grey-500'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--primary-subdued--UNSAFE
  interface TextOnGrey500PrimarySubduedUnsafeType {
    on: 'grey-500'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--secondary
  interface TextOnGrey500SecondaryType {
    on: 'grey-500'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--secondary-subdued--UNSAFE
  interface TextOnGrey500SecondarySubduedUnsafeType {
    on: 'grey-500'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--tertiary
  interface TextOnGrey500TertiaryType {
    on: 'grey-500'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--tertiary-subdued--UNSAFE
  interface TextOnGrey500TertiarySubduedUnsafeType {
    on: 'grey-500'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--success
  interface TextOnGrey500SuccessType {
    on: 'grey-500'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--success-subdued--UNSAFE
  interface TextOnGrey500SuccessSubduedUnsafeType {
    on: 'grey-500'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--warning
  interface TextOnGrey500WarningType {
    on: 'grey-500'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--warning-subdued--UNSAFE
  interface TextOnGrey500WarningSubduedUnsafeType {
    on: 'grey-500'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-500--danger
  interface TextOnGrey500DangerType {
    on: 'grey-500'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-500--danger-subdued--UNSAFE
  interface TextOnGrey500DangerSubduedUnsafeType {
    on: 'grey-500'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600
  interface TextOnGrey600Type {
    on: 'grey-600'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--subdued--UNSAFE
  interface TextOnGrey600SubduedUnsafeType {
    on: 'grey-600'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--primary
  interface TextOnGrey600PrimaryType {
    on: 'grey-600'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--primary-subdued--UNSAFE
  interface TextOnGrey600PrimarySubduedUnsafeType {
    on: 'grey-600'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--secondary
  interface TextOnGrey600SecondaryType {
    on: 'grey-600'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--secondary-subdued--UNSAFE
  interface TextOnGrey600SecondarySubduedUnsafeType {
    on: 'grey-600'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--tertiary
  interface TextOnGrey600TertiaryType {
    on: 'grey-600'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--tertiary-subdued--UNSAFE
  interface TextOnGrey600TertiarySubduedUnsafeType {
    on: 'grey-600'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--success
  interface TextOnGrey600SuccessType {
    on: 'grey-600'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--success-subdued--UNSAFE
  interface TextOnGrey600SuccessSubduedUnsafeType {
    on: 'grey-600'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--warning
  interface TextOnGrey600WarningType {
    on: 'grey-600'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--warning-subdued--UNSAFE
  interface TextOnGrey600WarningSubduedUnsafeType {
    on: 'grey-600'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-600--danger
  interface TextOnGrey600DangerType {
    on: 'grey-600'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-600--danger-subdued--UNSAFE
  interface TextOnGrey600DangerSubduedUnsafeType {
    on: 'grey-600'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700
  interface TextOnGrey700Type {
    on: 'grey-700'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--subdued
  interface TextOnGrey700SubduedType {
    on: 'grey-700'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--primary
  interface TextOnGrey700PrimaryType {
    on: 'grey-700'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--primary-subdued--UNSAFE
  interface TextOnGrey700PrimarySubduedUnsafeType {
    on: 'grey-700'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700--secondary
  interface TextOnGrey700SecondaryType {
    on: 'grey-700'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--secondary-subdued--UNSAFE
  interface TextOnGrey700SecondarySubduedUnsafeType {
    on: 'grey-700'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700--tertiary
  interface TextOnGrey700TertiaryType {
    on: 'grey-700'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--tertiary-subdued--UNSAFE
  interface TextOnGrey700TertiarySubduedUnsafeType {
    on: 'grey-700'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700--success
  interface TextOnGrey700SuccessType {
    on: 'grey-700'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--success-subdued--UNSAFE
  interface TextOnGrey700SuccessSubduedUnsafeType {
    on: 'grey-700'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700--warning
  interface TextOnGrey700WarningType {
    on: 'grey-700'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--warning-subdued--UNSAFE
  interface TextOnGrey700WarningSubduedUnsafeType {
    on: 'grey-700'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-700--danger
  interface TextOnGrey700DangerType {
    on: 'grey-700'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-700--danger-subdued--UNSAFE
  interface TextOnGrey700DangerSubduedUnsafeType {
    on: 'grey-700'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800
  interface TextOnGrey800Type {
    on: 'grey-800'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--subdued
  interface TextOnGrey800SubduedType {
    on: 'grey-800'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--primary
  interface TextOnGrey800PrimaryType {
    on: 'grey-800'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--primary-subdued--UNSAFE
  interface TextOnGrey800PrimarySubduedUnsafeType {
    on: 'grey-800'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800--secondary
  interface TextOnGrey800SecondaryType {
    on: 'grey-800'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--secondary-subdued--UNSAFE
  interface TextOnGrey800SecondarySubduedUnsafeType {
    on: 'grey-800'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800--tertiary
  interface TextOnGrey800TertiaryType {
    on: 'grey-800'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--tertiary-subdued--UNSAFE
  interface TextOnGrey800TertiarySubduedUnsafeType {
    on: 'grey-800'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800--success
  interface TextOnGrey800SuccessType {
    on: 'grey-800'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--success-subdued--UNSAFE
  interface TextOnGrey800SuccessSubduedUnsafeType {
    on: 'grey-800'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800--warning
  interface TextOnGrey800WarningType {
    on: 'grey-800'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--warning-subdued--UNSAFE
  interface TextOnGrey800WarningSubduedUnsafeType {
    on: 'grey-800'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-800--danger
  interface TextOnGrey800DangerType {
    on: 'grey-800'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-800--danger-subdued--UNSAFE
  interface TextOnGrey800DangerSubduedUnsafeType {
    on: 'grey-800'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900
  interface TextOnGrey900Type {
    on: 'grey-900'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--subdued
  interface TextOnGrey900SubduedType {
    on: 'grey-900'
    kind: 'subdued'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--primary
  interface TextOnGrey900PrimaryType {
    on: 'grey-900'
    kind: 'primary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--primary-subdued--UNSAFE
  interface TextOnGrey900PrimarySubduedUnsafeType {
    on: 'grey-900'
    kind: 'primary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900--secondary
  interface TextOnGrey900SecondaryType {
    on: 'grey-900'
    kind: 'secondary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--secondary-subdued--UNSAFE
  interface TextOnGrey900SecondarySubduedUnsafeType {
    on: 'grey-900'
    kind: 'secondary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900--tertiary
  interface TextOnGrey900TertiaryType {
    on: 'grey-900'
    kind: 'tertiary'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--tertiary-subdued--UNSAFE
  interface TextOnGrey900TertiarySubduedUnsafeType {
    on: 'grey-900'
    kind: 'tertiary-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900--success
  interface TextOnGrey900SuccessType {
    on: 'grey-900'
    kind: 'success'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--success-subdued--UNSAFE
  interface TextOnGrey900SuccessSubduedUnsafeType {
    on: 'grey-900'
    kind: 'success-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900--warning
  interface TextOnGrey900WarningType {
    on: 'grey-900'
    kind: 'warning'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--warning-subdued--UNSAFE
  interface TextOnGrey900WarningSubduedUnsafeType {
    on: 'grey-900'
    kind: 'warning-subdued'
    UNSAFE: true
  }
  
  // text-on-grey-900--danger
  interface TextOnGrey900DangerType {
    on: 'grey-900'
    kind: 'danger'
    UNSAFE?: false | undefined
  }
  
  // text-on-grey-900--danger-subdued--UNSAFE
  interface TextOnGrey900DangerSubduedUnsafeType {
    on: 'grey-900'
    kind: 'danger-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-lighter
  interface TextOnPrimaryLighterType {
    on: 'primary-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-lighter--subdued--UNSAFE
  interface TextOnPrimaryLighterSubduedUnsafeType {
    on: 'primary-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-lighter--vivid
  interface TextOnPrimaryLighterVividType {
    on: 'primary-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-lighter--vivid-subdued--UNSAFE
  interface TextOnPrimaryLighterVividSubduedUnsafeType {
    on: 'primary-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary
  interface TextOnPrimaryType {
    on: 'primary'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary--subdued--UNSAFE
  interface TextOnPrimarySubduedUnsafeType {
    on: 'primary'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary--vivid
  interface TextOnPrimaryVividType {
    on: 'primary'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary--vivid-subdued--UNSAFE
  interface TextOnPrimaryVividSubduedUnsafeType {
    on: 'primary'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-primary-darker
  interface TextOnPrimaryDarkerType {
    on: 'primary-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-darker--subdued--UNSAFE
  interface TextOnPrimaryDarkerSubduedUnsafeType {
    on: 'primary-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-primary-darker--vivid
  interface TextOnPrimaryDarkerVividType {
    on: 'primary-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-primary-darker--vivid-subdued--UNSAFE
  interface TextOnPrimaryDarkerVividSubduedUnsafeType {
    on: 'primary-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-lighter
  interface TextOnSecondaryLighterType {
    on: 'secondary-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-lighter--subdued--UNSAFE
  interface TextOnSecondaryLighterSubduedUnsafeType {
    on: 'secondary-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-lighter--vivid
  interface TextOnSecondaryLighterVividType {
    on: 'secondary-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-lighter--vivid-subdued--UNSAFE
  interface TextOnSecondaryLighterVividSubduedUnsafeType {
    on: 'secondary-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary
  interface TextOnSecondaryType {
    on: 'secondary'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary--subdued--UNSAFE
  interface TextOnSecondarySubduedUnsafeType {
    on: 'secondary'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary--vivid
  interface TextOnSecondaryVividType {
    on: 'secondary'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary--vivid-subdued--UNSAFE
  interface TextOnSecondaryVividSubduedUnsafeType {
    on: 'secondary'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-darker
  interface TextOnSecondaryDarkerType {
    on: 'secondary-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-darker--subdued--UNSAFE
  interface TextOnSecondaryDarkerSubduedUnsafeType {
    on: 'secondary-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-secondary-darker--vivid
  interface TextOnSecondaryDarkerVividType {
    on: 'secondary-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-secondary-darker--vivid-subdued--UNSAFE
  interface TextOnSecondaryDarkerVividSubduedUnsafeType {
    on: 'secondary-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-lighter
  interface TextOnTertiaryLighterType {
    on: 'tertiary-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-lighter--subdued--UNSAFE
  interface TextOnTertiaryLighterSubduedUnsafeType {
    on: 'tertiary-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-lighter--vivid
  interface TextOnTertiaryLighterVividType {
    on: 'tertiary-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-lighter--vivid-subdued--UNSAFE
  interface TextOnTertiaryLighterVividSubduedUnsafeType {
    on: 'tertiary-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary
  interface TextOnTertiaryType {
    on: 'tertiary'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary--subdued--UNSAFE
  interface TextOnTertiarySubduedUnsafeType {
    on: 'tertiary'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary--vivid
  interface TextOnTertiaryVividType {
    on: 'tertiary'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary--vivid-subdued--UNSAFE
  interface TextOnTertiaryVividSubduedUnsafeType {
    on: 'tertiary'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-darker
  interface TextOnTertiaryDarkerType {
    on: 'tertiary-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-darker--subdued--UNSAFE
  interface TextOnTertiaryDarkerSubduedUnsafeType {
    on: 'tertiary-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-tertiary-darker--vivid
  interface TextOnTertiaryDarkerVividType {
    on: 'tertiary-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-tertiary-darker--vivid-subdued--UNSAFE
  interface TextOnTertiaryDarkerVividSubduedUnsafeType {
    on: 'tertiary-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-lighter
  interface TextOnSuccessLighterType {
    on: 'success-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-lighter--subdued--UNSAFE
  interface TextOnSuccessLighterSubduedUnsafeType {
    on: 'success-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-lighter--vivid
  interface TextOnSuccessLighterVividType {
    on: 'success-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-lighter--vivid-subdued--UNSAFE
  interface TextOnSuccessLighterVividSubduedUnsafeType {
    on: 'success-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success
  interface TextOnSuccessType {
    on: 'success'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success--subdued--UNSAFE
  interface TextOnSuccessSubduedUnsafeType {
    on: 'success'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success--vivid
  interface TextOnSuccessVividType {
    on: 'success'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success--vivid-subdued--UNSAFE
  interface TextOnSuccessVividSubduedUnsafeType {
    on: 'success'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-success-darker
  interface TextOnSuccessDarkerType {
    on: 'success-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-success-darker--subdued--UNSAFE
  interface TextOnSuccessDarkerSubduedUnsafeType {
    on: 'success-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-success-darker--vivid
  interface TextOnSuccessDarkerVividType {
    on: 'success-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-success-darker--vivid-subdued--UNSAFE
  interface TextOnSuccessDarkerVividSubduedUnsafeType {
    on: 'success-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-lighter
  interface TextOnWarningLighterType {
    on: 'warning-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-lighter--subdued--UNSAFE
  interface TextOnWarningLighterSubduedUnsafeType {
    on: 'warning-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-lighter--vivid
  interface TextOnWarningLighterVividType {
    on: 'warning-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-lighter--vivid-subdued--UNSAFE
  interface TextOnWarningLighterVividSubduedUnsafeType {
    on: 'warning-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning
  interface TextOnWarningType {
    on: 'warning'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning--subdued--UNSAFE
  interface TextOnWarningSubduedUnsafeType {
    on: 'warning'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning--vivid
  interface TextOnWarningVividType {
    on: 'warning'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning--vivid-subdued--UNSAFE
  interface TextOnWarningVividSubduedUnsafeType {
    on: 'warning'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-warning-darker
  interface TextOnWarningDarkerType {
    on: 'warning-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-darker--subdued--UNSAFE
  interface TextOnWarningDarkerSubduedUnsafeType {
    on: 'warning-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-warning-darker--vivid
  interface TextOnWarningDarkerVividType {
    on: 'warning-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-warning-darker--vivid-subdued--UNSAFE
  interface TextOnWarningDarkerVividSubduedUnsafeType {
    on: 'warning-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-lighter
  interface TextOnDangerLighterType {
    on: 'danger-lighter'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-lighter--subdued--UNSAFE
  interface TextOnDangerLighterSubduedUnsafeType {
    on: 'danger-lighter'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-lighter--vivid
  interface TextOnDangerLighterVividType {
    on: 'danger-lighter'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-lighter--vivid-subdued--UNSAFE
  interface TextOnDangerLighterVividSubduedUnsafeType {
    on: 'danger-lighter'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger
  interface TextOnDangerType {
    on: 'danger'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger--subdued--UNSAFE
  interface TextOnDangerSubduedUnsafeType {
    on: 'danger'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger--vivid
  interface TextOnDangerVividType {
    on: 'danger'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger--vivid-subdued--UNSAFE
  interface TextOnDangerVividSubduedUnsafeType {
    on: 'danger'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  // text-on-danger-darker
  interface TextOnDangerDarkerType {
    on: 'danger-darker'
    kind?: undefined
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-darker--subdued--UNSAFE
  interface TextOnDangerDarkerSubduedUnsafeType {
    on: 'danger-darker'
    kind: 'subdued'
    UNSAFE: true
  }
  
  // text-on-danger-darker--vivid
  interface TextOnDangerDarkerVividType {
    on: 'danger-darker'
    kind: 'vivid'
    UNSAFE?: false | undefined
  }
  
  // text-on-danger-darker--vivid-subdued--UNSAFE
  interface TextOnDangerDarkerVividSubduedUnsafeType {
    on: 'danger-darker'
    kind: 'vivid-subdued'
    UNSAFE: true
  }
  
  