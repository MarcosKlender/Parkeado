import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"

export function Login() {
    return (
        <>
            <h1>Login</h1>
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
            <Button variant="success">Ingresar</Button>
            <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </>
    )
}