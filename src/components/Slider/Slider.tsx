import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './Slider.scss'

export const Slider = React.memo(
  ({
    value,
    min,
    max,
    width,
    background,
    renderBackground,
    onChange,
  }: {
    value: number
    min: number
    max: number
    width?: string
    background?: ReactNode
    renderBackground?: (isDragging: boolean) => ReactNode
    onChange: (value: number, diff: number) => void
  }) => {
    const [isDragging, setIsDragging] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseDown = () => setIsDragging(true)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault()
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        let sign = e.key === 'ArrowLeft' ? -1 : 1

        let diff: number
        let val: number

        if (e.altKey) {
          diff = 0.1 * sign
        } else if (e.shiftKey) {
          diff = 10 * sign
        } else {
          diff = 1 * sign
        }

        val = value + diff

        if (val < min) val = min
        if (val > max) val = max
        onChange(val, diff)
      }
    }

    useEffect(() => {
      const handleMouseUp = () => setIsDragging(false)

      const handleMouseMove = (e: globalThis.MouseEvent) => {
        if (ref.current) {
          const changePercentage =
            e.movementX / ref.current.getBoundingClientRect().width
          const diff = changePercentage * (max - min)
          let val = value + diff
          if (val > max) val = max
          if (val < min) val = min
          onChange(val, diff)
        }
      }

      if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
      } else {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }, [isDragging, value, onChange, ref, min, max])

    return (
      <div
        className="Slider"
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={ref}
        style={{ width }}
      >
        {!!background && background}
        {!!renderBackground && !background && renderBackground(isDragging)}
        <div
          className="Slider__handle"
          style={{
            left: `${(value / (max - min)) * 100}%`,
          }}
        />
      </div>
    )
  }
)
