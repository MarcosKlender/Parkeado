import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

import parkeadoLogo from "@/assets/parkeado.svg";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AuthServices } from "@/services/auth/fetch-user.services";

/**
 * Renders the login form component. Used within the AuthLayout.
 * @component
 * @returns The rendered login form.
 */
export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: AuthServices.login,
    onSuccess: (data) => {
      console.log("Login exitoso", data.data);
      // Save token in storage if applicable
    },
    onError: (err) => {
      console.error("Error en login", err);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    if (!formData.email || !formData.password) {
      console.error("Faltan campos requeridos");
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Contraseña"
        id="password"
        name="password"
        placeholder="********"
        variant="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
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
