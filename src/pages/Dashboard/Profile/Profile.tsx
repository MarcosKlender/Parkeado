import { Header } from "@/components/shared/Header/Header"
import { Hero } from "@/components/shared/Hero/Hero"
import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
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
                <div className="forms-container">
                    <form>
                        <h2>Datos del Usuario</h2>
                        <Input
                            label="Nombre y Apellido"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            variant="text"
                            autoComplete="name"
                        />
                        <Input
                            label="Correo"
                            id="email"
                            name="email"
                            placeholder="usuario@example.com"
                            variant="email"
                            autoComplete="email"
                        />
                        <Input
                            label="Placa del Vehículo"
                            id="plate"
                            name="plate"
                            placeholder="ABC-1234"
                            variant="text"
                            autoComplete="on"
                        />
                        <Button type="submit" variant="success">Actualizar Datos</Button>
                    </form>
                    <form>
                        <h2>Contraseña de Acceso</h2>
                        <Input
                            label="Contraseña Actual"
                            id="current-password"
                            name="current-password"
                            placeholder="********"
                            variant="password"
                            autoComplete="current-password"
                        />
                        <Input
                            label="Nueva Contraseña"
                            id="new-password"
                            name="new-password"
                            placeholder="********"
                            variant="password"
                            autoComplete="new-password"
                        />
                        <Input
                            label="Confirmar Nueva Contraseña"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="********"
                            variant="password"
                            autoComplete="new-password"
                        />
                        <Button type="submit" variant="success">Cambiar Contraseña</Button>
                    </form>
                </div>
            </main>
        </>
    )
}