import { LinkButton } from "@/components/shared/LinkButton/LinkButton"
import notFoundImage from "@/assets/not-found.svg"
import "./NotFound.scss"

export function NotFound() {
    return (
        <main className="notfound-main">
            <img src={notFoundImage} alt="Logo de React" />

            <h1>¡Parqueadero ocupado!</h1>
            <p>Un coche eléctrico se te ha adelantado, otra vez.</p>
            <LinkButton to="/">
                Buscar otro lugar
            </LinkButton>
        </main>
    )
}