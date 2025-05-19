import { useParkings } from "@/hooks/useParkings"

import { Header } from "@/components/shared/Header/Header"
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { MarkersMap } from "@/components/maps/MarkersMap/MarkersMap"
import { Parking } from "@/components/shared/Parking/Parking"
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle"
import { Button } from "@/components/shared/Button/Button"

import trafficIcon from "@/assets/traffic.svg"
import "./Reservation.scss"

export function Reservation() {
    const { data: parkings, isLoading, error, refetch } = useParkings();

    return (
        <>
            <Header />
            <main className="reservation-main">
                <PageTitle
                    title="Mi Reserva"
                    description="Aquí podrás administrar tu plaza de aparcamiento."
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
                    <div className="reservation-content">
                        <MarkersMap parkings={parkings} center={parkings[0].position} zoom={16} />
                        <section>
                            <ContentTitle
                                icon={trafficIcon}
                                title="Maneja con cuidado"
                                description="Recuerda que tu reserva expirará automáticamente dentro de 1 hora."
                            />
                            <Parking
                                name={parkings[0].name}
                                address={parkings[0].address}
                                availableSlots={parkings[0].availableSlots}
                            />
                        </section>
                    </div>
                )}
            </main>
        </>
    )
}