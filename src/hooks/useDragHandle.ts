import { useCallback, useEffect, useState } from 'react'

export const useDragHandle = (
  dragHandleRef: React.RefObject<HTMLDivElement>,
  initialHeight: number,
  minHeight: number
) => {
  const [handleIsDragging, setHandleIsDragging] = useState(false)
  const [outputHeightPx, setOutputHeightPx] = useState(initialHeight)
  // const minHeight = 45

  const handleMouseUp = useCallback(() => setHandleIsDragging(false), [
    setHandleIsDragging,
  ])
  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      setOutputHeightPx((prev) =>
        prev - e.movementY >= minHeight ? prev - e.movementY : minHeight
      )
    },
    [minHeight]
  )

  useEffect(() => {
    const dragHandle = dragHandleRef.current
    const handleMouseDown = () => setHandleIsDragging(true)
    if (dragHandle) dragHandle.addEventListener('mousedown', handleMouseDown)

    return () => {
      if (dragHandle)
        dragHandle.removeEventListener('mousedown', handleMouseDown)
    }
  }, [dragHandleRef])

  useEffect(() => {
    if (handleIsDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = 'none'
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.removeProperty('user-select')
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleIsDragging, handleMouseUp, handleMouseMove])
  return outputHeightPx
}
