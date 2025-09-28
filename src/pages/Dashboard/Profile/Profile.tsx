import { useUser } from "@/hooks/useUser";

import { PageTitle } from "@/components/shared/PageTitle/PageTitle";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { QueryState } from "@/components/shared/QueryState/QueryState";

import "./Profile.scss";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useState, useEffect } from "react";

/**
 * Renders the profile page for the authenticated user.
 *
 * - Displays user information.
 * - Allows editing the user information.
 * - Allows changing the user password.
 *
 * @component
 * @returns The rendered profile page component.
 */
export function Profile() {
  const { data: user, isLoading, error, refetch } = useUser();
  const { mutateAsync, isPending } = useUpdateUser();

  // ----- Estado del formulario de datos -----
  const [name, setName] = useState("");
  const [plate, setPlate] = useState("");

  // ----- Estado del formulario de password -----
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Feedback local
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Precarga con datos del usuario
  useEffect(() => {
    if (user?.data) {
      setName(user.data.name ?? "");
      setPlate(user.data.placaVehiculo ?? "");
    }
  }, [user]);

  const email = user?.data?.email ?? "";

  const clearFeedback = () => {
    setSuccessMsg(null);
    setErrorMsg(null);
  };

  const handleSubmitProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearFeedback();
    try {
      // Solo enviar campos modificados/no vacíos
      const payload: Record<string, string> = {};
      if (name && name !== (user?.data?.name ?? "")) payload.name = name.trim();
      if (plate && plate !== (user?.data?.placaVehiculo ?? ""))
        payload.placaVehiculo = plate.trim();

      if (!payload.name && !payload.placaVehiculo) {
        setErrorMsg("No hay cambios para guardar o se encuentra algún campo vacío.");
        return;
      }

      await mutateAsync(payload);
      setSuccessMsg("Datos actualizados correctamente.");
      await refetch();
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Ocurrió un error al actualizar");
    }
  };

  const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearFeedback();
    const nueva = newPassword; // no recortar
    const confirm = confirmNewPassword;
    const current = currentPassword;


    if (nueva.length < 8 || nueva.length > 64) {
      setErrorMsg("La nueva contraseña debe tener entre 8 y 64 caracteres");
      return;
    }
    if (nueva !== confirm) {
      setErrorMsg("La confirmación de la nueva contraseña no coincide");
      return;
    }
    if (current && nueva === current) {
      setErrorMsg("La nueva contraseña no puede ser igual a la actual");
      return;
    }
    const complexity = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,64}$/;
    if (!complexity.test(nueva)) {
      setErrorMsg("La contraseña debe incluir mayúsculas, minúsculas, dígitos y un caracter especial");
      return;
    }


    try {
      await mutateAsync({ currentPassword: current, newPassword: nueva, confirmNewPassword: confirm });
      setSuccessMsg("Contraseña cambiada correctamente.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Ocurrió un error al cambiar la contraseña");
    }
  };


  return (
    <>
      <PageTitle title="Mi Perfil" description="Aquí podrás editar la información de tu cuenta." />
      {isLoading && <QueryState status="loading" />}
      {error && (
        <QueryState
          status="error"
          errorMessage="Ocurrió un error al cargar los datos del usuario"
          onClick={() => refetch()}
        />
      )}
      {!!successMsg && <div className="alert-custom success">{successMsg}</div>}
      {!!errorMsg && <div className="alert-custom error">{errorMsg}</div>}
      {user && (
        <div className="forms-container">
          <form onSubmit={handleSubmitProfile} noValidate>
            <h2>Datos del Usuario</h2>
            <Input
              label="Nombre y Apellido"
              id="name"
              name="name"
              placeholder="John Doe"
              variant="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Input
              label="Correo"
              id="email"
              name="email"
              placeholder="usuario@example.com"
              variant="email"
              autoComplete="email"
              value={email}
              disabled
            />
            <Input
              label="Placa del Vehículo"
              id="plate"
              name="plate"
              placeholder="ABC-1234"
              variant="text"
              autoComplete="on"
              value={plate}
              onChange={(e) => setPlate(e.currentTarget.value.toUpperCase())}
            />
            <Button type="submit" variant="success" disabled={isPending}>
              {isPending ? "Guardando…" : "Actualizar Datos"}
            </Button>
          </form>
          <form onSubmit={handleSubmitPassword} noValidate>
            <h2>Contraseña de Acceso</h2>
            <Input
              label="Contraseña Actual"
              id="current-password"
              name="currentPassword"
              placeholder="********"
              variant="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.currentTarget.value)}
            />
            <Input
              label="Nueva Contraseña"
              id="new-password"
              name="newPassword"
              placeholder="********"
              variant="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.currentTarget.value)}
            />
            <Input
              label="Confirmar Nueva Contraseña"
              id="confirm-password"
              name="confirmNewPassword"
              placeholder="********"
              variant="password"
              autoComplete="new-password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.currentTarget.value)}
            />
            <Button type="submit" variant="success" disabled={isPending}>
              {isPending ? "Guardando…" : "Cambiar Contraseña"}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
