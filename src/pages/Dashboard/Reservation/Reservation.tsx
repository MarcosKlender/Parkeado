import { PageTitle } from "@/components/shared/PageTitle/PageTitle";
import { MarkersMap } from "@/components/maps/MarkersMap/MarkersMap";
import { ParkingCard } from "@/components/shared/ParkingCard/ParkingCard";
import { ContentTitle } from "@/components/shared/ContentTitle/ContentTitle";
import { QueryState } from "@/components/shared/QueryState/QueryState";

import trafficIcon from "@/assets/traffic.svg";
import "./Reservation.scss";
import { useReservation } from "@/hooks/useReservation";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  CancelReservationType,
  ParkingsServices,
} from "@/services/dashboard/fetch-parkings.services";
import { Button } from "@/components/shared/Button/Button";
import { toast } from "sonner";
import Modal from "@/components/shared/Modal/Modal";

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
  const sessionEmail =
    JSON.parse(sessionStorage.getItem("userData") || "{}")?.email || "";
  const {
    data: reservation,
    isLoading,
    error,
    refetch,
  } = useReservation(sessionEmail);
  const [detailsParking, setDetailsParking] = useState<any[]>([]);
  let errorServer: any = error;

  const mutation = useMutation({
    mutationKey: ["get-data-parking"],
    mutationFn: ParkingsServices.getDetailsParking,
    onSuccess: (data) => {
      let response = data.data;
      if (response?.code === 200) {
        setDetailsParking(response.data);
      }
    },
    onError: (err: any) => {
      console.error("Error al obtener detalles del parking", err);
    },
  });

  useEffect(() => {
    if (reservation?.length > 0) {
      mutation.mutate(reservation[0]);
    }
  }, [reservation]);

  const mutationCancel = useMutation({
    mutationKey: ["cancel-reservation"],
    mutationFn: ParkingsServices.cancelReservation,
    onSuccess: () => {
      toast.success("Reserva cancelada con éxito");
      refetch();
      setTimeout(() => {
        setDetailsParking([]);
      }, 1000);
    },
    onError: () => {
      toast.error("Error al cancelar la reserva");
    },
  });

  const handleCancelReservation = () => {
    let data: CancelReservationType = {
      id: reservation[0]?.id,
      parkingId: reservation[0]?.parkingId,
      spotId: reservation[0]?.spotId,
      floorNumber: reservation[0]?.floorNumber,
    };
    mutationCancel.mutate(data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageTitle
        title="Mi Reserva"
        description="Aquí podrás administrar tu plaza de aparcamiento."
      />

      {isLoading && <QueryState status="loading" />}

      {errorServer && (
        <QueryState
          status="error"
          errorMessage={
            errorServer?.status === 404
              ? errorServer?.response?.data?.message
              : "Ocurrió un error al cargar la información de la reserva"
          }
          onClick={() => refetch()}
        />
      )}

      {detailsParking && detailsParking.length > 0 && !errorServer && (
        <div className="reservation-content">
          <MarkersMap
            parkings={detailsParking}
            center={detailsParking[0]?.details[0]?.position}
            zoom={16}
          />

          <section>
            <ContentTitle
              icon={trafficIcon}
              title="Maneja con cuidado"
              description="Recuerda que tu reserva expirará automáticamente dentro de 1 hora."
            />

            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsModalOpen(true)}
            >
              Cancelar Reserva
            </Button>

            <Modal
              open={isModalOpen}
              textContent="¿Estás seguro de que deseas cancelar tu reserva?"
              onClose={() => setIsModalOpen(false)}
              onConfirm={() => {
                handleCancelReservation();
                setIsModalOpen(false);
              }}
              textOnConfirm="Confirmar"
              textOnClose="Volver"
            />

            <ParkingCard
              name={detailsParking[0]?.name}
              address={detailsParking[0]?.details[0]?.address}
              availableSlots={detailsParking[0]?.details[0]?.availableSpots}
              floorNumber={reservation[0]?.floorNumber}
              slotId={reservation[0]?.spotId}
            />
          </section>
        </div>
      )}
    </>
  );
}
