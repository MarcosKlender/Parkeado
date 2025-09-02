import { useUser } from "@/hooks/useUser";

import { LinkButton } from "../LinkButton/LinkButton";
import { Avatar } from "@/components/shared/Avatar/Avatar";
import parkeadoLogo from "@/assets/parkeado.svg";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Header component for the application.
 * @component
 * @returns The header element containing the navigation bar.
 */
export function Header() {
  const navigate = useNavigate();
  const { data: user} = useUser();

  const HandleCloseSession = () => {
    sessionStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    console.log(user?.data)
    if(user?.data && user?.data.active === true){
      sessionStorage.setItem("userData", JSON.stringify(user?.data));
    }
  }, [user])

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
          {
            user && (
              <li>
                <LinkButton to="/profile" variant="text">
                  <Avatar name={user.data?.name || ""} />
                </LinkButton>
              </li>
            )
          }
          <li onClick={HandleCloseSession}>
              Salir
          </li>
        </ul>
      </nav>
    </header>
  );
}
