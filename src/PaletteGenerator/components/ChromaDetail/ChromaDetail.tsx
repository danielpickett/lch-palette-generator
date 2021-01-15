import React from 'react'
import './ChromaDetail.scss'

export const ChromaDetail = React.memo(({ chroma }: { chroma: number }) => {
  return (
    <div className="ChromaDetail" style={{ width: `150px` }}>
      <div className="ChromaDetail__output">{chroma.toFixed(1)}</div>
    </div>
  )
})
