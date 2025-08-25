import { useState } from "react";
import { useParkings } from "@/hooks/useParkings";

import { PageTitle } from "@/components/shared/PageTitle/PageTitle";
import { MarkersMap } from "@/components/maps/MarkersMap/MarkersMap";
import { ParkingCard } from "@/components/shared/ParkingCard/ParkingCard";
import { ParkingDetail } from "@/components/shared/ParkingDetail/ParkingDetail";
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle";
import { QueryState } from "@/components/shared/QueryState/QueryState";

import carIcon from "@/assets/car.svg";
import "./Home.scss";

/**
 * Renders the home page of the application.
 *
 * - Displays available parking spots on a map.
 * - Allows users to select a parking spot to view more details.
 *
 * @component
 * @returns The rendered home page component.
 */
export function Home() {
  const { data: parkings, isLoading, error, refetch } = useParkings();

  const [selectedParkingId, setSelectedParkingId] = useState<string | null>(
    null
  );

  const selectedParking =
    parkings?.find((parking) => parking.id === selectedParkingId) || null;

  return (
    <>
      <PageTitle
        title="El parqueadero ideal a un clic de distancia"
        description="Encuentre plazas de aparcamiento disponibles en tiempo real."
      />
      {isLoading && <QueryState status="loading" />}
      {error && (
        <QueryState
          status="error"
          errorMessage="Ocurrió un error al cargar el mapa"
          onClick={() => refetch()}
        />
      )}
      {parkings && parkings.length > 0 && (
        <div className="home-content">
          <MarkersMap
            parkings={parkings}
            center={
              selectedParking
                ? selectedParking.details[0].position
                : [4.66015, -74.1377067]
            }
            zoom={selectedParking ? 16 : 11}
          />
          <section>
            {selectedParking ? (
              <ParkingDetail
                parking={selectedParking}
                onClick={() => setSelectedParkingId(null)}
              />
            ) : (
              <>
                <ContentTitle
                  icon={carIcon}
                  title="Seleccione un parqueadero"
                  description="Haga clic en un marcador para ver más información sobre las plazas de aparcamiento disponibles."
                />
                <div className="parking-list">
                  {parkings?.map((parking) => (
                    <ParkingCard
                      key={parking.id}
                      name={parking.name}
                      address={parking.details[0].address}
                      availableSlots={parking.details[0].availableSpots}
                      onClick={() => {
                        setSelectedParkingId(parking.id);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
