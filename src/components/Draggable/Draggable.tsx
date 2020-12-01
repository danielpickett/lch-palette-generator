import React, { useCallback, useEffect, useState } from 'react'
import './Draggable.scss'

export const Draggable = ({
  x,
  onChange,
}: {
  x: number
  onChange: (arg: number) => void
}) => {
  const [clickOriginX, setClickOriginX] = useState<number | null>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setClickOriginX(e.clientX)
  }

  const handleMouseUp = () => {
    console.log('mouseup')
    setClickOriginX(null)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // console.log('moving', e.clientX)
      if (clickOriginX !== null) {
        // const diff = e.clientX - clickOriginX
        // console.log(e.movementX)
        onChange(x + e.movementX)
      }
    },
    [onChange, clickOriginX, x]
  )

  useEffect(() => {
    if (clickOriginX !== null) {
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mousemove', handleMouseMove)
    } else {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [clickOriginX, handleMouseMove])

  return (
    <div className="Draggable" onMouseDown={handleMouseDown}>
      <div className="Draggable__dot" style={{ left: `${x}px` }}>
        {x}
      </div>
    </div>
  )
}
