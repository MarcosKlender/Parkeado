import reactLogo from "@/assets/react.svg"
import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
import './Login.scss'

export function Login() {
    const appName = import.meta.env.VITE_APP_NAME

    return (
        <section className="login">
            <img src={reactLogo} alt="Logo de React" width="50px" />
            <h1>Inicio de Sesión</h1>
            <p>Bienvenido a {appName}</p>
            <hr />
            <form>
                <Input
                    label="Correo"
                    placeholder="usuario@ejemplo.com"
                    variant="email"
                />
                <Input
                    label="Contraseña"
                    placeholder="********"
                    variant="password"
                />
                <a href="/register">Olvidé mi contraseña</a>
                <Button variant="success">Ingresar</Button>
                <span>¿No tienes una cuenta? <a href="/register">Regístrate</a></span>
            </form>
        </section>
    )
}