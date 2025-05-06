import "./Footer.scss"

export function Footer() {
    const appName = import.meta.env.VITE_APP_NAME

    return (
        <footer className="custom-footer">
            <span>© 2025 {appName}. Todos los derechos reservados.</span>
        </footer>
    )
}