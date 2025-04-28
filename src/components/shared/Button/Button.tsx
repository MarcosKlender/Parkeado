import { ReactNode } from 'react';
import './Button.scss'

type ButtonProps = {
    children: ReactNode
    variant?: 'success' | 'danger' | 'primary' | 'secondary'
    onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
    return (
        <button className={`custom-button ${variant}`} onClick={onClick}>
            {children}
        </button>
    )
} 