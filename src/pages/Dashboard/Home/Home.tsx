import { Header } from "@/components/shared/Header/Header"
import { Hero } from "@/components/shared/Hero/Hero"
import "./Home.scss"

export function Home() {
    return (
        <>
            <Header />
            <main className="home-main">
                <Hero
                    title="El parqueadero ideal a un clic de distancia"
                    description="Encuentre plazas de aparcamiento disponibles en tiempo real. Seleccione un parqueadero para ver información detallada sobre las plazas."
                />
            </main>
        </>
    )
}