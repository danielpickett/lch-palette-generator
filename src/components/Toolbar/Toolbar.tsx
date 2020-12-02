import React, { ReactNode } from 'react'
import './Toolbar.scss'

export const Toolbar = ({ children }: { children?: ReactNode }) => (
  <div className="Toolbar">{children}</div>
)
