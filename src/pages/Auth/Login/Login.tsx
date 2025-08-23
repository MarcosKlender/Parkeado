import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

import parkeadoLogo from "@/assets/parkeado.svg";

/**
 * Renders the login form component. Used within the AuthLayout.
 * @component
 * @returns The rendered login form.
 */
export function Login() {
  return (
    <form>
      <img src={parkeadoLogo} alt="Logo de Parkeado" />
      <h1>Inicio de Sesión</h1>
      <p>Bienvenido a Parkeado</p>
      <div className="divider" />
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
      <span>
        <LinkButton to="/register" variant="text">
          Olvidé mi contraseña
        </LinkButton>
      </span>
      <Button type="submit" variant="success">
        Ingresar
      </Button>
      <span>
        ¿No tienes una cuenta?{" "}
        <LinkButton to="/register" variant="text">
          Regístrate
        </LinkButton>
      </span>
    </form>
  );
}
