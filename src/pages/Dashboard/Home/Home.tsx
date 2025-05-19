import { useParkings } from "@/hooks/useParkings"

import { Header } from "@/components/shared/Header/Header"
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { MarkersMap } from "@/components/maps/MarkersMap/MarkersMap"
import { Parking } from "@/components/shared/Parking/Parking"
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle"
import { Button } from "@/components/shared/Button/Button"

import carIcon from "@/assets/car.svg"
import "./Home.scss"

export function Home() {
    const { data: parkings, isLoading, error, refetch } = useParkings()

    return (
        <>
            <Header />
            <main className="home-main">
                <PageTitle
                    title="El parqueadero ideal a un clic de distancia"
                    description="Encuentre plazas de aparcamiento disponibles en tiempo real."
                />
                {isLoading && (
                    <div className="query-container">
                        <div className="spinner" />
                    </div>
                )}
                {error && (
                    <div className="query-container">
                        <p>Ocurrió un error al cargar el mapa</p>
                        <Button variant="success" onClick={() => refetch()}>
                            Reintentar
                        </Button>
                    </div>
                )}
                {parkings && parkings.length > 0 && (
                    <div className="home-content">
                        <MarkersMap parkings={parkings} center={parkings[0].position} />
                        <section>
                            <ContentTitle
                                icon={carIcon}
                                title="Seleccione un parqueadero"
                                description="Haga clic en un marcador para ver más información sobre las plazas de aparcamiento disponibles."
                            />
                            <div className="parking-list">
                                {
                                    parkings?.map(parking => (
                                        <Parking
                                            key={parking.id}
                                            name={parking.name}
                                            address={parking.address}
                                            availableSlots={parking.availableSlots}
                                        />
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                )}
            </main >
        </>
    )
}