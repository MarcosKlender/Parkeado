import { Header } from "@/components/shared/Header/Header"
import { Hero } from "@/components/shared/Hero/Hero"
import "./Profile.scss"

export function Profile() {
    return (
        <>
            <Header />
            <main className="profile-main">
                <Hero
                    title="Mi Perfil"
                    description="Aquí podrás editar la información de tu cuenta."
                />
            </main>
        </>
    )
}