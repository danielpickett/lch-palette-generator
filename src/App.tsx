import React, { useCallback, useState } from 'react'
import './App.scss'
import { ChromaSlider, ScaleGenerator, Toolbar } from 'components'

function App() {
  const [luminances] = useState([97, 92, 85, 74, 61, 50, 40, 30, 20, 10])
  const [hue1, setHue1] = useState(21)
  const [hue2, setHue2] = useState(134)
  const [hue3, setHue3] = useState(218)

  const chromas = [3.7, 10.8, 21.3, 30.4, 31.0, 28.4, 24.3, 20.4, 15.7, 11.4]

  const [maxChroma, setMaxChroma] = useState(132)
  const [chromas1, setChromas1] = useState(chromas)
  const [chromas2, setChromas2] = useState(chromas)
  const [chromas3, setChromas3] = useState(chromas)

  const handleMaxChromaChange = (chromaChange: number) => {
    setMaxChroma((prevMaxChroma) => prevMaxChroma + chromaChange)
  }

  const handleChromaChange1 = useCallback((chromaChange, i) => {
    setChromas1((prevChromas) => {
      return prevChromas.map((prevChroma, j) => {
        if (i === j)
          return prevChroma + chromaChange < 0 ? 0 : prevChroma + chromaChange
        return prevChroma
      })
    })
  }, [])

  const handleChromaChange2 = useCallback((chromaChange, i) => {
    setChromas2((prevChromas) => {
      return prevChromas.map((prevChroma, j) => {
        if (i === j)
          return prevChroma + chromaChange < 0 ? 0 : prevChroma + chromaChange
        return prevChroma
      })
    })
  }, [])

  const handleChromaChange3 = useCallback((chromaChange, i) => {
    setChromas3((prevChromas) => {
      return prevChromas.map((prevChroma, j) => {
        if (i === j)
          return prevChroma + chromaChange < 0 ? 0 : prevChroma + chromaChange
        return prevChroma
      })
    })
  }, [])

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
        luminances={luminances}
        hue={hue1}
        onHueChange={setHue1}
        chromas={chromas1}
        onChromaChange={handleChromaChange1}
        maxChroma={maxChroma}
        size={size}
      />
      <ScaleGenerator
        luminances={luminances}
        hue={hue2}
        onHueChange={setHue2}
        chromas={chromas2}
        onChromaChange={handleChromaChange2}
        maxChroma={maxChroma}
        size={size}
      />
      <ScaleGenerator
        luminances={luminances}
        hue={hue3}
        onHueChange={setHue3}
        chromas={chromas3}
        onChromaChange={handleChromaChange3}
        maxChroma={maxChroma}
        size={size}
      />
    </div>
  )
}

export default App
