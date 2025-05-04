import reactLogo from "@/assets/react.svg"
import { Input } from "@/components/shared/Input/Input"
import { Button } from "@/components/shared/Button/Button"
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from "leaflet"

import "@/../node_modules/leaflet/dist/leaflet.css"
import "./Login.scss"

export function Login() {
    const appName = import.meta.env.VITE_APP_NAME
    const position: LatLngExpression = [4.68, -74.10]

    return (
        <main>
            <MapContainer
                scrollWheelZoom={false}
                center={position}
                zoom={12}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <section className="login">
                <form>
                    <img src={reactLogo} alt="Logo de React" width="50px" />
                    <h1>Inicio de Sesión</h1>
                    <p>Bienvenido a {appName}</p>
                    <hr />
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
        </main>
    )
}