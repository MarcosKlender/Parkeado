import { Header } from "@/components/shared/Header/Header"
import { Hero } from "@/components/shared/Hero/Hero"
import { HomeMap } from "@/components/maps/HomeMap/HomeMap"
import { Parking } from "@/components/shared/Parking/Parking"
import carIcon from "@/assets/car.svg"
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
                <div className="home-content">
                    <HomeMap />
                    <section>
                        <div className="content-header">
                            <img src={carIcon} alt="Logo de React" />
                            <h2>Seleccione un parqueadero</h2>
                            <p>Haga clic en un marcador para ver más información sobre las plazas de aparcamiento disponibles.</p>
                        </div>
                        <Parking name="Parqueadero 1" address="Avenida Siempreviva 742" availableSlots={20} />
                        <Parking name="Parqueadero 1" address="Avenida Siempreviva 742" availableSlots={20} />
                        <Parking name="Parqueadero 1" address="Avenida Siempreviva 742" availableSlots={20} />
                    </section>
                </div>
            </main>
        </>
    )
}