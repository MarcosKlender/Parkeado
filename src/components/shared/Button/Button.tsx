import { ReactNode } from 'react';
import './Button.scss'

type ButtonProps = {
    children: ReactNode
    type?: 'button' | 'submit'
    variant?: 'primary' | 'secondary' | 'success' | 'danger'
    onClick?: () => void;
}

export function Button({ children, type = 'button', variant = 'primary', onClick }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`custom-button ${variant}`}
        >
            {children}
        </button>
    )
} 