import { useUser } from "@/hooks/useUser";

import { LinkButton } from "../LinkButton/LinkButton";
import { Avatar } from "@/components/shared/Avatar/Avatar";
import parkeadoLogo from "@/assets/parkeado.svg";
import "./Header.scss";

/**
 * Header component for the application.
 * @component
 * @returns The header element containing the navigation bar.
 */
export function Header() {
  const { data: user } = useUser();

  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <img src={parkeadoLogo} alt="Logo de React" />
          <p>Parkeado</p>
        </div>
        <ul>
          <li>
            <LinkButton to="/home" variant="text">
              Mapa
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/reservation" variant="text">
              Mi Reserva
            </LinkButton>
          </li>
          <li>
            <LinkButton to="/profile" variant="text">
              <Avatar name={user?.name || ""} />
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
