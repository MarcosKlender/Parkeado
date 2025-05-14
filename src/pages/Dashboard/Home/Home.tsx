import { Header } from "@/components/shared/Header/Header"
import { Hero } from "@/components/shared/Hero/Hero"
import { HomeMap } from "@/components/maps/HomeMap/HomeMap"
import "./Home.scss"

export function Home() {
    return (
        <>
            <Header />
            <main className="home-main">
                <Hero
                    title="El parqueadero ideal a un clic de distancia"
                    description="Encuentre plazas de aparcamiento disponibles en tiempo real."
                />
                <HomeMap />
            </main>
        </>
    )
}