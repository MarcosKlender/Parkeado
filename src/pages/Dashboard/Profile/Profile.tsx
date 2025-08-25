import { useUser } from "@/hooks/useUser";

import { PageTitle } from "@/components/shared/PageTitle/PageTitle";
import { Input } from "@/components/shared/Input/Input";
import { Button } from "@/components/shared/Button/Button";
import { QueryState } from "@/components/shared/QueryState/QueryState";

import "./Profile.scss";

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

  return (
    <>
      <PageTitle
        title="Mi Perfil"
        description="Aquí podrás editar la información de tu cuenta."
      />
      {isLoading && <QueryState status="loading" />}
      {error && (
        <QueryState
          status="error"
          errorMessage="Ocurrió un error al cargar los datos del usuario"
          onClick={() => refetch()}
        />
      )}
      {user && (
        <div className="forms-container">
          <form>
            <h2>Datos del Usuario</h2>
            <Input
              label="Nombre y Apellido"
              id="name"
              name="name"
              placeholder="John Doe"
              variant="text"
              autoComplete="name"
              defaultValue={user.name}
            />
            <Input
              label="Correo"
              id="email"
              name="email"
              placeholder="usuario@example.com"
              variant="email"
              autoComplete="email"
              defaultValue={user.email}
            />
            <Input
              label="Placa del Vehículo"
              id="plate"
              name="plate"
              placeholder="ABC-1234"
              variant="text"
              autoComplete="on"
              defaultValue={user.plate}
            />
            <Button type="submit" variant="success">
              Actualizar Datos
            </Button>
          </form>
          <form>
            <h2>Contraseña de Acceso</h2>
            <Input
              label="Contraseña Actual"
              id="current-password"
              name="current-password"
              placeholder="********"
              variant="password"
              autoComplete="current-password"
            />
            <Input
              label="Nueva Contraseña"
              id="new-password"
              name="new-password"
              placeholder="********"
              variant="password"
              autoComplete="new-password"
            />
            <Input
              label="Confirmar Nueva Contraseña"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
              variant="password"
              autoComplete="new-password"
            />
            <Button type="submit" variant="success">
              Cambiar Contraseña
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
