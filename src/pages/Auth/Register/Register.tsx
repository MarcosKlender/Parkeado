import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
import { AuthMap } from "@/components/shared/AuthMap/AuthMap"
import { LinkButton } from "@/components/shared/LinkButton/LinkButton"
import { useIsDesktop } from "@/hooks/useIsDesktop"

import reactLogo from "@/assets/react.svg"
import "./Register.scss"

export function Register() {
    const isDesktop = useIsDesktop()

    return (
        <main className="register-main">
            {isDesktop && <AuthMap />}
            <section className="register">
                <form>
                    <img src={reactLogo} alt="Logo de React" />
                    <h1>Registro</h1>
                    <p>Vamos a crear tu nueva cuenta</p>
                    <hr />
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
                        placeholder="usuario@ejemplo.com"
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
                    <span>Podrás editar estos datos más adelante</span>

                    <Input
                        label="Contraseña"
                        id="password"
                        name="password"
                        placeholder="********"
                        variant="password"
                        autoComplete="new-password"
                    />
                    <Input
                        label="Confirmar Contraseña"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="********"
                        variant="password"
                        autoComplete="new-password"
                    />
                    <Button type="submit" variant="success">Registrarse</Button>
                    <span>
                        ¿Ya tienes una cuenta? <LinkButton to="/" variant="text">Inicia sesión</LinkButton>
                    </span>
                </form>
            </section>
        </main>
    )
}