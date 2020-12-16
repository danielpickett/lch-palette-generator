import React, { useState } from 'react'
import './Swatches.scss'
import { ColorExtended } from 'types'
import { ScaleType } from 'types'
import chromajs from 'chroma-js'
import { TextColors } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons'

export const Swatches = React.memo(({ scale }: { scale: ScaleType }) => {
  console.log('rendered - Swatches')
  return (
    <div className="Swatches">
      {scale.chromas.map((_, index) => {
        return <Swatch scale={scale} index={index} key={index} />
      })}
    </div>
  )
})

const Swatch = ({ scale, index }: { scale: ScaleType; index: number }) => {
  const [showPlot, setShowPlot] = useState(true)
  const handleToggleShowPlot = () => {
    setShowPlot(!showPlot)
  }

  const color = chromajs.lch(
    scale.luminances[index],
    scale.chromas[index],
    scale.hue
  ) as ColorExtended
  const swatchColor = color._rgb._clipped ? undefined : color.css()
  return (
    <div
      key={index}
      className="Swatches__swatch"
      style={{
        color:
          scale.luminances[index] > 60 || !swatchColor
            ? 'rgba(0, 0, 0, .7)'
            : 'rgba(255, 255, 255, .7)',
        backgroundColor: swatchColor,
        flexBasis: `${(1 / scale.chromas.length) * 100}%`,
      }}
    >
      <div className="Swatches__label">
        {scale.scaleName} {scale.colorNames?.[index]}
      </div>

      <div className="Swatches__text-colors">
        {swatchColor && (
          <TextColors
            bgColor={{
              l: scale.luminances[index],
              c: scale.chromas[index],
              h: scale.hue,
            }}
            textChroma={scale.textChroma}
            showPlot={showPlot}
            renderPlotToggle={
              <div className="Swatches__toggle" onClick={handleToggleShowPlot}>
                <FontAwesomeIcon
                  icon={showPlot ? faChevronUp : faChevronDown}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  )
}
