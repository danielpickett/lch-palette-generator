import { IconButton } from 'components'
import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import './Output.scss'
import { faClipboard } from '@fortawesome/pro-light-svg-icons'

export const Output = ({
  heading,
  content,
  style,
}: {
  heading: string
  content: string
  style?: CSSProperties
}) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const timeoutRef = useRef<number>()

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const copyToClipboard = (copyText: HTMLTextAreaElement) => {
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand('copy')
    copyText.setSelectionRange(0, 0)
    setShowConfirm(true)

    const id = window.setTimeout(() => setShowConfirm(false), 1500)
    timeoutRef.current = id
  }

  return (
    <div
      className={'Output' + (showConfirm ? ' Output--is-confirming' : '')}
      style={style}
    >
      <h3 className="Output__heading">{heading}</h3>

      <div className="Output__output">
        <textarea
          className="Output__textarea"
          readOnly
          value={content}
          ref={ref}
        />

        <div className="Output__button">
          <IconButton
            onClick={() => {
              if (ref.current) {
                copyToClipboard(ref.current)
              }
            }}
            // icon="clipboard"
            faIcon={faClipboard}
          />
          <div className="Output__confirmation">Copied</div>
        </div>
      </div>
    </div>
  )
}
