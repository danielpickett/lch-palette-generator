import React, { ReactNode } from 'react'
import { LCHColor } from 'types'
import './TextColors.scss'
import { TextColorsPlot } from 'components'
import { transformColors } from './transformColors'

export const TextColors = ({
  bgColor,
  textChroma,
  showPlot,
  renderPlotToggle,
}: {
  bgColor: LCHColor
  textChroma: number
  showPlot: boolean
  renderPlotToggle?: ReactNode
}) => {
  const splitPoint = 65

  const normal = transformColors({
    bgColor,
    lumOffset: 55,
    textChroma,
    splitPoint,
    multiplier: 1.15,
  })

  const subdued = transformColors({
    bgColor,
    lumOffset: 40,
    textChroma: normal.textLCH.c,
    splitPoint,
    multiplier: 1.05,
  })

  const handlePlotToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.metaKey) {
    }
  }

  return (
    <div className="TextColors" onClick={handlePlotToggle}>
      
      <TextColorsSample colors={normal} />
      <TextColorsSample colors={subdued} />

      {!!renderPlotToggle && renderPlotToggle}

      {showPlot && (
        <div className="TextColors__plot">
          <TextColorsPlot
            colors={[bgColor, normal.textLCH, subdued.textLCH]}
            labels={['bg', 'normal', 'subdued']}
            canvasHue={bgColor.h}
          />
        </div>
      )}
    </div>
  )
}

const TextColorsSample = ({
  colors,
}: {
  colors: ReturnType<typeof transformColors>
}) => {
  return (
    <div className="TextColors__sample" style={{ color: colors.textHex }}>
      Sample Text {colors.contrast}
    </div>
  )
}


