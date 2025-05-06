import { Header } from "@/components/ui/Header/Header"
import { Footer } from "@/components/ui/Footer/Footer"
import "./Profile.scss"

export function Profile() {
    return (
        <>
            <Header />
            <main className="profile-main">
                <h1>Profile</h1>
            </main>
            <Footer />
        </>
    )
}