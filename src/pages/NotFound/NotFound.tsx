import electricCar from "@/assets/electric-car.svg"
import "./NotFound.scss"

export function NotFound() {
    return (
        <main className="notfound-main">
            <img src={electricCar} alt="Logo de React" />

            <h1>¡Parqueadero ocupado!</h1>
            <p>Un coche eléctrico se te ha adelantado, otra vez.</p>
            <a href="/">
                Buscar otro lugar
            </a>
        </main>
    )
}