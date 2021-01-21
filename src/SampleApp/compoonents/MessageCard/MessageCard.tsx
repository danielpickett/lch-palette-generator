import React from 'react'
import './MessageCard.scss'

export const MessageCard = () => {
  return (
    <div className="MessageCard">
      <div className="MessageCard__header">Card Heading</div>
      <div className="MessageCard__body">
        <p className="MessageCard__success-box">Your action was successful!</p>

        <div className="MessageCard__cta-button">Click here</div>
      </div>
      <div className="MessageCard__footer">
        <button className="MessageCard__danger-button">
          Delete my account
        </button>
        <span className="MessageCard__danger-text">This cannot be undone</span>
      </div>
    </div>
  )
}
