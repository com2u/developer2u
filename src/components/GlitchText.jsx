import React from 'react'
import './GlitchText.css'

const GlitchText = ({ children, className = '' }) => {
  return (
    <div className={`glitch-container ${className}`}>
      <div className="glitch-text" data-text={children}>
        {children}
      </div>
    </div>
  )
}

export default GlitchText
