import React, { ReactNode } from 'react'
import { LCHColor } from 'types'
import './TextColors.scss'
import { TextColorsSample, TextColorsPlot } from 'components'
import { getTextColor } from './getTextColor'
import chromajs from 'chroma-js'

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
  const normal = getTextColor({ bgColor, textChroma })

  const subdued2 = chromajs.mix(normal.bgHex, normal.textHex, 0.7, 'lch')
  const subdued2LCH = {
    l: subdued2.lch()[0],
    c: subdued2.lch()[1],
    h: subdued2.lch()[2],
  }
  // console.log('subdued2', subdued2)
  const subduedContrast = chromajs.contrast(
    chromajs.lch(bgColor.l, bgColor.c, bgColor.h).hex(),
    subdued2.hex()
  )

  const handlePlotToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.metaKey) {
    }
  }

  return (
    <div className="TextColors" onClick={handlePlotToggle}>
      <TextColorsSample colorHex={normal.textHex} contrast={normal.contrast} />
      <TextColorsSample colorHex={subdued2.hex()} contrast={subduedContrast} />

      {!!renderPlotToggle && renderPlotToggle}

      {showPlot && (
        <div className="TextColors__plot">
          <TextColorsPlot
            colors={[bgColor, normal.textLCH, subdued2LCH]}
            // labels={[
            //   `bg l:${bgColor.l}, c:${bgColor.c}, h:${bgColor.h}`,
            //   `normal l:${normal.textLCH.l.toFixed(
            //     1
            //   )}, c:${normal.textLCH.c.toFixed(
            //     1
            //   )}, h:${normal.textLCH.h.toFixed(1)}`,
            //   `subdued l:${subdued.textLCH.l.toFixed(
            //     1
            //   )}, c:${subdued.textLCH.c.toFixed(
            //     1
            //   )}, h:${subdued.textLCH.h.toFixed(1)}`,
            // ]}
            labels={[`bg`, `normal`, `subdued`]}
            canvasHue={bgColor.h}
          />
        </div>
      )}
    </div>
  )
}
