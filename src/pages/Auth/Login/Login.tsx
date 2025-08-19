import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import { AuthMap } from "@/components/maps/AuthMap/AuthMap";
import { useIsDesktop } from "@/hooks/useIsDesktop";

import reactLogo from "@/assets/react.svg";
import "./Login.scss";

/**
 * Renders a login form that allows users to authenticate into the application.
 * @component
 * @returns The rendered login form.
 */
export function Login() {
  const isDesktop = useIsDesktop();

  return (
    <main className="login-main">
      {
        // Display the authentication map only on desktop
        isDesktop && <AuthMap />
      }
      <section className="login">
        <form>
          <img src={reactLogo} alt="Logo de React" />
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
      </section>
    </main>
  );
}
