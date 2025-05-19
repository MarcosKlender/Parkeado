import { useUser } from "@/hooks/useUser"

import { Header } from "@/components/shared/Header/Header"
import { PageTitle } from "@/components/shared/PageTitle/PageTitle"
import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"

import "./Profile.scss"

export function Profile() {
    const { data: user, isLoading, error } = useUser()

    return (
        <>
            <Header />
            <main className="profile-main">
                <PageTitle
                    title="Mi Perfil"
                    description="Aquí podrás editar la información de tu cuenta."
                />

                {
                    isLoading ? (
                        <p className="query-message">Cargando perfil del usuario...</p>
                    ) : error || !user ? (
                        <p className="query-message">Error al cargar los datos.</p>
                    ) : (
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
                                    defaultValue={user.name}
                                />
                                <Input
                                    label="Correo"
                                    id="email"
                                    name="email"
                                    placeholder="usuario@example.com"
                                    variant="email"
                                    autoComplete="email"
                                    defaultValue={user.email}
                                />
                                <Input
                                    label="Placa del Vehículo"
                                    id="plate"
                                    name="plate"
                                    placeholder="ABC-1234"
                                    variant="text"
                                    autoComplete="on"
                                    defaultValue={user.plate}
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
                    )
                }
            </main>
        </>
    )
}