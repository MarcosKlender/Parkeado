import { Header } from "@/components/shared/Header/Header";
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { HomeMap } from "@/components/maps/HomeMap/HomeMap";
import "./Reservation.scss"

export function Reservation() {
    return (
        <>
            <Header />
            <main className="reservation-main">
                <PageTitle
                    title="Mi Reserva"
                    description="Aquí podrás administrar tu plaza de aparcamiento."
                />
                <HomeMap />
            </main>
        </>
    )
}