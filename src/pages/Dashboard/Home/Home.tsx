import { Header } from "@/components/ui/Header/Header"
import { Footer } from "@/components/ui/Footer/Footer"
import "./Home.scss"

export function Home() {
    return (
        <>
            <Header />
            <main className="home-main">
                <h1>Home</h1>
            </main>
            <Footer />
        </>
    )
}