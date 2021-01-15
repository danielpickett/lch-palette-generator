import { PaletteGenerator } from 'PaletteGenerator'
import './App.scss'
import { IconButton } from 'PaletteGenerator/components'
import React, { useState } from 'react'
import { SampleApp } from 'SampleApp/SampleApp'
import { faEye } from '@fortawesome/pro-light-svg-icons'

export default function App() {
  const [showPaletteGenerator, setShowSampleApp] = useState(true)
  return (
    <div className="App">
      <div className="App__sample-app-toggle-button">
        <IconButton
          faIcon={faEye}
          onClick={() => setShowSampleApp(!showPaletteGenerator)}
          style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)' }}
        />
      </div>
      {showPaletteGenerator && (
        <div className="App__palette-generator">
          <PaletteGenerator />
        </div>
      )}

      <div className="App__sample-app">
        <SampleApp />
      </div>
    </div>
  )
}
