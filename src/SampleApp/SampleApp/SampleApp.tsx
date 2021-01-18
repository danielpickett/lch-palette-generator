import React from 'react'
import './SampleApp.scss'
import {
  // MessageCard,
  Text
} from '../compoonents'

export const SampleApp = () => {
  return (
    <div className="SampleApp">
      <div className="SampleApp__header">Header</div>
      {/* <MessageCard /> */}
      <Text on="primary">Hello, world!</Text>
    </div>
  )
}
