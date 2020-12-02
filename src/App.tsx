import React, { useState } from 'react'
import './App.scss'
import { ChromaSlider, ScaleGenerator, Toolbar } from 'components'

function App() {
  const [hue1, setHue1] = useState(100)
  const [hue2, setHue2] = useState(200)
  const [hue3, setHue3] = useState(300)
  const [maxChroma, setMaxChroma] = useState(50)

  const handleMaxChromaChange = (chromaChange: number) => {
    setMaxChroma((prevMaxChroma) => prevMaxChroma + chromaChange)
  }

  return (
    <div className="App">
      <Toolbar>
        <ChromaSlider
          chroma={maxChroma}
          onInstantChromaChange={handleMaxChromaChange}
          size={3}
        />
      </Toolbar>
      <ScaleGenerator
        hue={hue1}
        onHueChange={setHue1}
        maxChroma={maxChroma}
        size={3}
      />
      <ScaleGenerator
        hue={hue2}
        onHueChange={setHue2}
        maxChroma={maxChroma}
        size={3}
      />
      <ScaleGenerator
        hue={hue3}
        onHueChange={setHue3}
        maxChroma={maxChroma}
        size={3}
      />
    </div>
  )
}

export default App
