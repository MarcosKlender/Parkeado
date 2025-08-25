import { useParkings } from "@/hooks/useParkings";

import { PageTitle } from "@/components/shared/PageTitle/PageTitle";
import { MarkersMap } from "@/components/maps/MarkersMap/MarkersMap";
import { ParkingCard } from "@/components/shared/ParkingCard/ParkingCard";
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle";
import { QueryState } from "@/components/shared/QueryState/QueryState";

import trafficIcon from "@/assets/traffic.svg";
import "./Reservation.scss";

/**
 * Renders the reservation page for the reserved parking spot.
 *
 * - Displays the details of the reserved parking spot.
 * - Allows users to manage their reservation.
 *
 * @component
 * @returns The rendered reservation page component.
 */
export function Reservation() {
  const { data: parkings, isLoading, error, refetch } = useParkings();

  return (
    <>
      <PageTitle
        title="Mi Reserva"
        description="Aquí podrás administrar tu plaza de aparcamiento."
      />
      {isLoading && <QueryState status="loading" />}
      {error && (
        <QueryState
          status="error"
          errorMessage="Ocurrió un error al cargar la información de la reserva"
          onClick={() => refetch()}
        />
      )}
      {parkings && parkings.length > 0 && (
        <div className="reservation-content">
          <MarkersMap
            parkings={parkings}
            center={parkings[0].details[0].position}
            zoom={16}
          />
          <section>
            <ContentTitle
              icon={trafficIcon}
              title="Maneja con cuidado"
              description="Recuerda que tu reserva expirará automáticamente dentro de 1 hora."
            />
            <ParkingCard
              name={parkings[0].name}
              address={parkings[0].details[0].address}
              availableSlots={parkings[0].details[0].availableSpots}
            />
          </section>
        </div>
      )}
    </>
  );
}
