import { Link } from "react-router-dom";
import { ReactNode } from "react";
import "./LinkButton.scss"

type LinkButtonProps = {
    to: string
    children: ReactNode
    variant?: 'primary' | 'success' | 'text'
}

export function LinkButton({ to, children, variant = 'primary' }: LinkButtonProps) {
    return (
        <Link to={to} className={`link-button ${variant}`}>
            {children}
        </Link>
    )
}