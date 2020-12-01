import React, { useState } from 'react'
import './App.scss'
import { ScaleGenerator } from 'components'

function App() {
  const [hue1, setHue1] = useState(200)
  const [hue2, setHue2] = useState(300)


  return (
    <div className="App">
      <ScaleGenerator hue={hue1} onHueChange={setHue1} />
      <ScaleGenerator hue={hue2} onHueChange={setHue1} />
    </div>
  )
}

export default App
