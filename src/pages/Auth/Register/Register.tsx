import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

import parkeadoLogo from "@/assets/parkeado.svg";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
//import { useNavigate } from "react-router-dom";
import { AuthServices, RegisterFormType } from "@/services/auth/fetch-user.services";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


/**
 * Renders the login form component. Used within the AuthLayout.
 * @component
 * @returns The rendered register form.
 */
export function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormType>({
    name: "",
    email: "",
    plate: "",
    password: "",
    confirmPassword: "",
  });
  
 const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: RegisterFormType) => {
     return await AuthServices.register(data);
    },
    onSuccess: () => {
      toast.success("Registro exitoso");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: (error: any) => {
      console.error("Error en registro", error);
      toast.error("Error en registro");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.plate || !formData.password) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={parkeadoLogo} alt="Logo de Parkeado" />
      <h1>Registro</h1>
      <p>Vamos a crear tu nueva cuenta</p>
      <div className="divider" />
      <Input
        label="Nombre y Apellido"
        id="name"
        name="name"
        placeholder="John Doe"
        autoComplete="name"
        variant="text"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Correo"
        id="email"
        name="email"
        placeholder="usuario@ejemplo.com"
        autoComplete="email"
        variant="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Placa del Vehículo"
        id="plate"
        name="plate"
        placeholder="ABC-1234"
        autoComplete="on"
        variant="text"
        value={formData.plate}
        onChange={handleChange}
      />

      <span>Podrás editar estos datos más adelante</span>

      <Input
        label="Contraseña"
        id="password"
        name="password"
        placeholder="********"
        autoComplete="new-password"
        variant="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Input
        label="Confirmar Contraseña"
        id="confirm-password"
        name="confirmPassword"
        placeholder="********"
        autoComplete="new-password"
        variant="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button type="submit" variant="success">
        Registrarse
      </Button>
      {mutation.isError && (
        <p className="error-message text-status">
          {mutation.error ? mutation.error?.response?.data?.message : "Error en el registro, intenta nuevamente."}
        </p>
      )}
      {mutation.isSuccess && (
        <p className="success-message text-status">¡Registro exitoso!</p>
      )}

      <span>
        ¿Ya tienes una cuenta?{" "}
        <LinkButton to="/" variant="text">
          Inicia sesión
        </LinkButton>
      </span>
    </form>
  );
}