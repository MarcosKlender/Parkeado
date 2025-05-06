import { LinkButton } from "../LinkButton/LinkButton"
import reactLogo from "@/assets/react.svg"
import "./Header.scss"

export function Header() {
    const appName = import.meta.env.VITE_APP_NAME

    return (
        <header>
            <nav className="navbar">
                <div className="brand">
                    <img src={reactLogo} alt="Logo de React" />
                    <p>{appName}</p>
                </div>
                <ul>
                    <li>
                        <LinkButton to="/home" variant="text">Mapa</LinkButton>
                    </li>
                    <li>
                        <LinkButton to="/profile" variant="text">Mi Perfil</LinkButton>
                    </li>
                </ul>
            </nav>
        </header>
    )
}