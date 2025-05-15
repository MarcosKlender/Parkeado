import { Header } from "@/components/shared/Header/Header";
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { MarkersMap, MapMarker } from "@/components/maps/MarkersMap/MarkersMap";
import { Parking } from "@/components/shared/Parking/Parking";
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle";
import trafficIcon from "@/assets/traffic.svg"
import "./Reservation.scss"

export function Reservation() {
    const markers: MapMarker[] = [
        { position: [4.719, -74.089], text: "Parqueadero 1" }
    ];

    return (
        <>
            <Header />
            <main className="reservation-main">
                <PageTitle
                    title="Mi Reserva"
                    description="Aquí podrás administrar tu plaza de aparcamiento."
                />
                <div className="reservation-content">
                    <MarkersMap markers={markers} center={markers[0].position} zoom={16} />
                    <section>
                        <ContentTitle
                            icon={trafficIcon}
                            title="Maneja con cuidado"
                            description="Recuerda que tu reserva expirará automáticamente dentro de 1 hora."
                        />
                        <Parking name="Parqueadero 1" address="Avenida Siempreviva 742" availableSlots={20} />
                    </section>
                </div>
            </main>
        </>
    )
}