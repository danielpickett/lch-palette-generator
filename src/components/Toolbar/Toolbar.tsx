import React from 'react'
import './Toolbar.scss'
import { faChartScatter, faInfoCircle } from '@fortawesome/pro-light-svg-icons'
import { IconButton } from 'components'

export const Toolbar = React.memo(
  ({
    onShowTextDetailsChange,
    onShowTextPlotsChange,
  }: {
    onShowTextDetailsChange: () => void
    onShowTextPlotsChange: () => void
  }) => {
    return (
      <div className="Toolbar">
        <div className="Toolbar__buttons">
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextDetailsChange}
              faIcon={faInfoCircle}
              title="Show LCH and RGB color breakdown"
            />
          </div>
          <div className="Toolbar__button">
            <IconButton
              onClick={onShowTextPlotsChange}
              faIcon={faChartScatter}
              title="Show plot of text color on LCH canvas"
            />
          </div>
        </div>
      </div>
    )
  }
)
