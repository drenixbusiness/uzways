import React from 'react'

interface ButtonProps {
    text: string
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

const ButtonDefault = ({ text, className, disabled, type, onClick }: ButtonProps) => {
    return (
        <button className={className} disabled={disabled} type={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonDefault