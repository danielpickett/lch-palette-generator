import { PaletteGenerator } from 'PaletteGenerator'
import './App.scss'
import React from 'react'
import { SampleApp } from 'SampleApp/SampleApp'

export default function App() {
  return (
    <div className="App">
      <div className="App__palette-generator">
        <PaletteGenerator />
      </div>

      <div className="App__sample-app">
        <SampleApp />
      </div>
    </div>
  )
}
