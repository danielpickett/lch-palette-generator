import React, { useReducer, useState } from 'react'
import './App.scss'
import { ChromaSlider, ScaleGenerator, Toolbar } from 'components'

type ScaleType = {
  hue: number
  luminances: number[]
  chromas: number[]
}

type ActionType = {
  changeType: 'luminance' | 'chroma' | 'hue'
  scaleIndex: number
  value: number
} & (
  | { changeType: 'hue'; pointIndex?: undefined }
  | { changeType: 'luminance' | 'chroma'; pointIndex: number }
)

const reducer = (
  scales: ScaleType[],
  { changeType, scaleIndex, pointIndex, value }: ActionType
) => {
  switch (changeType) {
    case 'hue': {
      return scales.map((scale, index) =>
        index === scaleIndex ? { ...scale, hue: value } : scale
      )
    }
    case 'chroma': {
      return scales.map((scale, index) =>
        index === scaleIndex
          ? {
              ...scale,
              chromas: scale.chromas.map((chroma, index) =>
                index === pointIndex
                  ? chroma + value < 0
                    ? 0
                    : chroma + value
                  : chroma
              ),
            }
          : scale
      )
    }
    default:
      return scales
  }
}

function App() {
  const luminances = [97, 92, 85, 74, 61, 50, 40, 30, 20, 10],
    initChromas = [3.7, 10.8, 21.3, 30.4, 31.0, 28.4, 24.3, 20.4, 15.7, 11.4]

  const [scales, dispatch] = useReducer(reducer, [
    {
      luminances: luminances,
      chromas: [...initChromas],
      hue: 21,
    },
    {
      luminances: luminances,
      chromas: [...initChromas],
      hue: 134,
    },

    {
      luminances: luminances,
      chromas: [...initChromas],
      hue: 218,
    },
  ])

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
      {scales.map((scale, scaleIndex) => (
        <div key={scaleIndex}>
          <ScaleGenerator
            luminances={scale.luminances}
            hue={scale.hue}
            onHueChange={(newHue) =>
              dispatch({ changeType: 'hue', scaleIndex, value: newHue })
            }
            chromas={scale.chromas}
            onChromaChange={(chromaChange, pointIndex) =>
              dispatch({
                changeType: 'chroma',
                scaleIndex,
                pointIndex,
                value: chromaChange,
              })
            }
            maxChroma={maxChroma}
            size={size}
          />
        </div>
      ))}
    </div>
  )
}

export default App
