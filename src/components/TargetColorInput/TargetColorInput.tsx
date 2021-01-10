import React from 'react'
import './TargetColorInput.scss'
import { ThemeActionType } from 'types'

export const TargetColorInput = ({
  value,
  scaleIndex,
  onChange,
  onBlur,
}: {
  value: string
  scaleIndex: number
  onChange: (action: ThemeActionType) => void
  onBlur?: () => void
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      changeType: 'targetColorString',
      scaleIndex,
      value: e.target.value === '' ? undefined : e.target.value,
    })
  }

  return (
    <div className="TargetColorInput">
      <input type="text" value={value} onChange={handleOnChange} onBlur={onBlur} />
    </div>
  )
}
