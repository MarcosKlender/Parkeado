import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
import { AuthMap } from "@/components/shared/AuthMap/AuthMap"
import { useIsDesktop } from "@/hooks/useIsDesktop"

import reactLogo from "@/assets/react.svg"
import "./Login.scss"

export function Login() {
    const appName = import.meta.env.VITE_APP_NAME
    const isDesktop = useIsDesktop()

    return (
        <main>
            {isDesktop && <AuthMap />}
            <section className="login">
                <form>
                    <img src={reactLogo} alt="Logo de React" width="50px" />
                    <h1>Inicio de Sesión</h1>
                    <p>Bienvenido a {appName}</p>
                    <hr />
                    <Input
                        label="Correo"
                        id="email"
                        name="email"
                        placeholder="usuario@ejemplo.com"
                        variant="email"
                        autoComplete="email"
                    />
                    <Input
                        label="Contraseña"
                        id="password"
                        name="password"
                        placeholder="********"
                        variant="password"
                        autoComplete="current-password"
                    />
                    <a href="/register">Olvidé mi contraseña</a>
                    <Button type="submit" variant="success">Ingresar</Button>
                    <span>¿No tienes una cuenta? <a href="/register">Regístrate</a></span>
                </form>
            </section>
        </main>
    )
}