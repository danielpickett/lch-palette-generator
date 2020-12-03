import React, { useState } from 'react'
import './App.scss'
import { ChromaSlider, ScaleGenerator, Toolbar } from 'components'

function App() {
  const [hue1, setHue1] = useState(134)
  const [hue2, setHue2] = useState(218)
  const [hue3, setHue3] = useState(21)
  const [maxChroma, setMaxChroma] = useState(132)

  const handleMaxChromaChange = (chromaChange: number) => {
    setMaxChroma((prevMaxChroma) => prevMaxChroma + chromaChange)
  }

  const size = 3

  return (
    <div className="App">
      <Toolbar>
        <ChromaSlider
          chroma={maxChroma}
          onChromaChange={handleMaxChromaChange}
          size={size}
        />
      </Toolbar>
      <ScaleGenerator
        hue={hue1}
        onHueChange={setHue1}
        maxChroma={maxChroma}
        size={size}
      />
      <ScaleGenerator
        hue={hue2}
        onHueChange={setHue2}
        maxChroma={maxChroma}
        size={size}
      />
      <ScaleGenerator
        hue={hue3}
        onHueChange={setHue3}
        maxChroma={maxChroma}
        size={size}
      />
    </div>
  )
}

export default App
