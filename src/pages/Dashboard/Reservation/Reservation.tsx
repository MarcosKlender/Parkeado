import { Header } from "@/components/shared/Header/Header";
import { Hero } from "@/components/shared/Hero/Hero"
import "./Reservation.scss"

export function Reservation() {
    return (
        <>
            <Header />
            <main className="reservation-main">
                <Hero
                    title="Mi Reserva"
                    description="Aquí podrás administrar tu plaza de aparcamiento."
                />
            </main>
        </>
    )
}