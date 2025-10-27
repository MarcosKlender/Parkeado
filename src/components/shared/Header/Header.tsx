import { useUser } from "@/hooks/useUser";

import { LinkButton } from "../LinkButton/LinkButton";
import { Avatar } from "@/components/shared/Avatar/Avatar";
import parkeadoLogo from "@/assets/parkeado.svg";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearToken } from "@/config/security/token";
import { notify } from "@/components/helpers/notify";
import Modal from "@/components/shared/Modal/Modal";

/**
 * Header component for the application.
 * @component
 * @returns The header element containing the navigation bar.
 */
export function Header() {
  const navigate = useNavigate();
  const { data: user } = useUser();

  const HandleCloseSession = () => {
    clearToken();
    notify.loggedOut();
    navigate("/");
  };

  useEffect(() => {
    if (user?.data && user?.data.active === true) {
      sessionStorage.setItem("userData", JSON.stringify(user?.data));
    }
  }, [user]);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {user && (
            <li>
              <LinkButton to="/profile" variant="text">
                <Avatar name={user.data?.name || ""} />
              </LinkButton>
            </li>
          )}
          <li onClick={() => setIsModalOpen(true)}>Salir</li>
        </ul>
      </nav>
      <Modal
        open={isModalOpen}
        textContent="¿Estás seguro de cerrar la sesión?"
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          HandleCloseSession();
          setIsModalOpen(false);
        }}
        textOnConfirm="Confirmar"
        textOnClose="Volver"
      />
    </header>
  );
}
