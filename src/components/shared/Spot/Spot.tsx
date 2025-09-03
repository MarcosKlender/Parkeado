import { toast } from "sonner";
import { useState } from "react";
import { useCreateReservation } from "@/hooks/useCreateReservation";

import Modal from "../Modal/Modal";
import "./Spot.scss";

/**
 * Props for the parking spot component.
 * @property number - The spot number.
 * @property isOccupied - Indicates if the spot is occupied.
 * @property parkingId - The ID of the parking.
 * @property spotId - The ID of the parking spot.
 * @property floorNumber - The floor number where the spot is located.
 * @property carPlate - The car plate number of the user.
 * @property email - The email of the user.
 */
type SpotProps = {
  number: number;
  isOccupied: boolean;
  parkingId: string;
  spotId: string;
  floorNumber: number;
  carPlate: string;
  email: string;
};

/**
 * Reusable spot component with the reservation functionality.
 * @component
 * @param props - Props for the parking spot component.
 * @returns Displays a parking spot with its number and allows the user to reserve it through a modal.
 */
export function Spot({
  number,
  isOccupied,
  parkingId,
  spotId,
  floorNumber,
  carPlate,
  email,
}: SpotProps) {
  const { mutate, isPending } = useCreateReservation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    if (isOccupied || isPending) return;
    setIsModalOpen(true);
  };

  const handleClick = () => {
    mutate(
      { parkingId, spotId, floorNumber, carPlate, email },
      {
        onSuccess: (resp) => {
          let data = resp.data;
          setIsModalOpen(false);
          if(data?.code !== 200){
            toast.error(`${data?.message}`);
            return;
          }
          console.log(`Espacio ${spotId} reservado`);
          toast.success(`¡Espacio reservado correctamente!`);
        },
        onError: (error) => {
          console.error("Ha ocurrido un error:", error);
          toast.error(`Ha ocurrido un error, inténtalo de nuevo.`);
          setIsModalOpen(false);
        },
      }
    );
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        textContent={`¿Deseas reservar el espacio ${number}?`}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleClick}
        textOnConfirm="Reservar"
      />
      <span
        className={`parking-spot ${isOccupied ? "occupied" : "available"}`}
        onClick={showModal}
      >
        {isPending ? "···" : number}
      </span>
    </>
  );
}
