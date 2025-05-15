import { Header } from "@/components/shared/Header/Header"
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { HomeMap } from "@/components/maps/HomeMap/HomeMap"
import { Parking } from "@/components/shared/Parking/Parking"
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle"
import carIcon from "@/assets/car.svg"
import "./Home.scss"

export function Home() {
    return (
        <>
            <Header />
            <main className="home-main">
                <PageTitle
                    title="El parqueadero ideal a un clic de distancia"
                    description="Encuentre plazas de aparcamiento disponibles en tiempo real."
                />
                <div className="home-content">
                    <HomeMap />
                    <section>
                        <ContentTitle
                            icon={carIcon}
                            title="Seleccione un parqueadero"
                            description="Haga clic en un marcador para ver más información sobre las plazas de aparcamiento disponibles."
                        />
                        <div className="parking-list">
                            <Parking name="Parqueadero 1" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 2" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 3" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 4" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 5" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 6" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 7" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 8" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 9" address="Avenida Siempreviva 742" availableSlots={20} />
                            <Parking name="Parqueadero 10" address="Avenida Siempreviva 742" availableSlots={20} />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}