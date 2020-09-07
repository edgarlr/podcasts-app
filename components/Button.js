import React from 'react'
import { colors, fontWeight } from 'styles/theme'

const Button = ({isActive, handleClick, children}) => {
  return (
    <button onClick={() => handleClick(isActive)} className={isActive ? 'active' : ' ' }>
      
      {children}

      <style jsx>{`
        .active {
          background: ${colors.white};
          color: ${colors.black};
          border: 1px solid ${colors.black};
        }
        button {
          color: ${colors.white};
          background: ${colors.black};
          font-weight: ${fontWeight.bold};
        }
      `}</style>

      <style jsx>{`
        button {
          border: none;
          padding: 8px 16px;
          border-radius: 10px;
          cursor: pointer;
          outline: none;
        }
      `}</style>
    </button>
  )
}

export default Button
