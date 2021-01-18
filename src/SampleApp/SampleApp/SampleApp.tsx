import React from 'react'
import './SampleApp.scss'
import {
  // MessageCard,
  Text,
} from '../compoonents'

export const SampleApp = () => {
  const bg = 'danger'
  return (
    <div className="SampleApp">
      <div className="SampleApp__header">Header</div>
      {/* <MessageCard /> */}
      <div style={{ backgroundColor: `var(--color-${bg})`, padding: '1rem' }}>
        <Text on={bg} >Hello, world!</Text>
      </div>
    </div>
  )
}
