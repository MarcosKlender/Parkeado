import { Header } from "@/components/shared/Header/Header"
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { MarkersMap, MapMarker } from "@/components/maps/MarkersMap/MarkersMap"
import { Parking } from "@/components/shared/Parking/Parking"
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle"
import carIcon from "@/assets/car.svg"
import "./Home.scss"

export function Home() {
    const markers: MapMarker[] = [
        { position: [4.650, -74.083], text: "Parqueadero Teusaquillo" },
        { position: [4.752, -74.091], text: "Parqueadero Suba - Centro" },
        { position: [4.693, -74.030], text: "Parqueadero Usaquén" },
        { position: [4.701, -74.084], text: "Parqueadero Cedritos" },
        { position: [4.678, -74.049], text: "Parqueadero Chapinero" },
        { position: [4.612, -74.070], text: "Parqueadero La Candelaria" },
        { position: [4.624, -74.122], text: "Parqueadero Kennedy Central" },
        { position: [4.643, -74.068], text: "Parqueadero Antonio Nariño" },
        { position: [4.586, -74.100], text: "Parqueadero Bosa" },
        { position: [4.664, -74.145], text: "Parqueadero Engativá" }
    ]



    return (
        <>
            <Header />
            <main className="home-main">
                <PageTitle
                    title="El parqueadero ideal a un clic de distancia"
                    description="Encuentre plazas de aparcamiento disponibles en tiempo real."
                />
                <div className="home-content">
                    <MarkersMap markers={markers} center={markers[0].position} />
                    <section>
                        <ContentTitle
                            icon={carIcon}
                            title="Seleccione un parqueadero"
                            description="Haga clic en un marcador para ver más información sobre las plazas de aparcamiento disponibles."
                        />
                        <div className="parking-list">
                            {
                                markers.map((marker, index) => (
                                    <Parking
                                        key={index}
                                        name={marker.text}
                                        address="Avenida Siempreviva 742"
                                        availableSlots={20}
                                    />
                                ))
                            }
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}