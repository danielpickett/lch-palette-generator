import React, { useReducer, useState } from 'react'
import './App.scss'
import {
  ChromaSlider,
  MaxChromaTester,
  Output,
  ScaleGenerator,
  Toolbar,
} from 'components'
import { getMaxChroma, parseConfig, parseScales } from 'utils'

export type ScaleType = {
  scaleName?: string
  colorNames?: string[]
  hue: number
  luminances: number[]
  chromas: number[]
}

export type ScalesActionType = {
  changeType: 'luminance' | 'chroma' | 'hue'
  scaleIndex: number
  value: number
} & (
  | { changeType: 'hue'; pointIndex?: undefined }
  | { changeType: 'luminance' | 'chroma'; pointIndex: number }
)

const reducer = (
  scales: ScaleType[],
  { changeType, scaleIndex, pointIndex, value }: ScalesActionType
) => {
  // const clampChroma = (color: { l: number; c: number; h: number }) => {}

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
              chromas: scale.chromas.map((chroma, index) => {
                if (index === pointIndex) {
                  if (chroma + value < 0) return 0
                  const maxChroma = getMaxChroma({
                    l: scale.luminances[pointIndex],
                    c: scale.chromas[pointIndex],
                    h: scale.hue,
                  })
                  if (chroma + value > maxChroma) return maxChroma
                  return chroma + value
                }
                return chroma
              }),
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
    initChromas = [3.7, 10.8, 21.3, 30.4, 31.0, 28.4, 24.3, 20.4, 15.7, 11.4],
    colorNames = [
      '050',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ]

  const [scales, handleScalesChanges] = useReducer(reducer, [
    {
      scaleName: 'Primary',
      colorNames: colorNames,
      luminances: luminances,
      chromas: [...initChromas],
      hue: 21,
    },
    {
      scaleName: 'Secondary',
      colorNames: colorNames,
      luminances: luminances,
      chromas: [...initChromas],
      hue: 332,
    },
    {
      scaleName: 'Success',
      colorNames: colorNames,
      luminances: luminances,
      chromas: [...initChromas],
      hue: 332,
    },
    {
      scaleName: 'Warning',
      colorNames: colorNames,
      luminances: luminances,
      chromas: [...initChromas],
      hue: 332,
    },
    {
      scaleName: 'Danger',
      colorNames: colorNames,
      luminances: luminances,
      chromas: [...initChromas],
      hue: 332,
    },
  ])

  const [maxChroma, setMaxChroma] = useState(132)

  const handleMaxChromaChange = (chromaChange: number) => {
    setMaxChroma((prevMaxChroma) => prevMaxChroma + chromaChange)
  }

  const cssOutput = parseScales(
    scales,
    (x) => `  --color-${x.scaleNameKebab}-${x.colorName}: ${x.colorHex}`
  )

  const scssOutput = parseScales(
    scales,
    (x) =>
      `$color-${x.scaleNameKebab}-${x.colorName}: var(--color-${x.scaleNameKebab}-${x.colorName});`
  )

  const configOutput = parseConfig(scales)

  const size = 2

  return (
    <div className="App">
      <MaxChromaTester />
      <Toolbar>
        <ChromaSlider
          chroma={maxChroma}
          onChromaChange={handleMaxChromaChange}
          size={size}
        />
      </Toolbar>

      <div className="App__scales">
        {scales.map((scale, scaleIndex) => (
          <ScaleGenerator
            key={scaleIndex}
            scaleIndex={scaleIndex}
            scale={scale}
            hue={scale.hue}
            onChange={handleScalesChanges}
            maxChroma={maxChroma}
            size={size}
          />
        ))}
      </div>

      <div className="App__output">
        <Output
          heading="Root CSS Variables"
          content={cssOutput}
          style={{ maxWidth: '325px' }}
        />
        <Output
          heading="SCSS Aliases"
          content={scssOutput}
          style={{ maxWidth: '500px' }}
        />
        <Output
          heading="Config"
          content={configOutput}
          style={{ maxWidth: '675px' }}
        />
      </div>
    </div>
  )
}

export default App
