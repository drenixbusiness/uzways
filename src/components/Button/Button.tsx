import React from 'react'

interface ButtonProps {
    text: string
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({ text, className, disabled, type }: ButtonProps) => {
  return (
    <button className={className} disabled={disabled} type={type}>
        {text}
    </button>
  )
}

export default Button