import React, { useState } from 'react'
import './App.scss'
import { PlotterPoint, ScaleGenerator, Toolbar } from 'components'

function App() {
  const [hue1, setHue1] = useState(100)
  const [hue2, setHue2] = useState(200)
  const [hue3, setHue3] = useState(300)
  const [maxChroma, setMaxChroma] = useState(50)


  return (
    <div className="App">
      <Toolbar>
        <PlotterPoint wash={{luminance: 0, chroma: maxChroma}} hue={0} onChromaChange={(setMaxChroma)} />
      </Toolbar>
      <ScaleGenerator hue={hue1} size={3} onHueChange={setHue1} />
      <ScaleGenerator hue={hue2} size={3}onHueChange={setHue2} />
      <ScaleGenerator hue={hue3} size={3}onHueChange={setHue3} />
    </div>
  )
}

export default App
