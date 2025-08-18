import { LinkButton } from "../LinkButton/LinkButton";
import { Avatar } from "@/components/shared/Avatar/Avatar";
import reactLogo from "@/assets/react.svg";
import "./Header.scss";

/**
 * Header component for the application.
 * @component
 * @returns The header element containing the navigation bar.
 */
export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <img src={reactLogo} alt="Logo de React" />
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
              <Avatar />
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
