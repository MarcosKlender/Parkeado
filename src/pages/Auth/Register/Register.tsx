import reactLogo from "@/assets/react.svg"
import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
import './Register.scss'

export function Register() {
    return (
        <section className="register">
            <img src={reactLogo} alt="Logo de React" width="50px" />
            <h1>Registro</h1>
            <p>Vamos a crear tu nueva cuenta</p>
            <hr />
            <form>
                <Input
                    label="Nombre y Apellido"
                    placeholder="John Doe"
                    variant="text"
                />
                <Input
                    label="Correo"
                    placeholder="usuario@ejemplo.com"
                    variant="email"
                />
                <Input
                    label="Placa del Vehículo"
                    placeholder="ABC-1234"
                    variant="text"
                />
                <span>Podrás editar estos datos más adelante</span>
                <Input
                    label="Contraseña"
                    placeholder="********"
                    variant="password"
                />
                <Input
                    label="Confirmar Contraseña"
                    placeholder="********"
                    variant="password"
                />
                <Button variant="success">Registrarse</Button>
                <span>¿Ya tienes una cuenta? <a href="/">Inicia sesión</a></span>
            </form>
        </section>
    )
}