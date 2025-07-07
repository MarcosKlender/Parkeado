import { toast } from 'sonner';
import { useState } from 'react';
import { useCreateReservation } from '@/hooks/useCreateReservation'

import Modal from '../Modal/Modal';
import './Spot.scss'

type SpotProps = {
    number: number
    isOccupied: boolean
    parkingId: string
    spotId: string
    floorNumber: number
    carPlate: string
    email: string
}

export function Spot({ number, isOccupied, parkingId, spotId, floorNumber, carPlate, email }: SpotProps) {
    const { mutate, isPending } = useCreateReservation()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        if (isOccupied || isPending) return;
        setIsModalOpen(true);
    }

    const handleClick = () => {
        mutate({ parkingId, spotId, floorNumber, carPlate, email },
            {
                onSuccess: () => {
                    console.log(`Espacio ${spotId} reservado`)
                    toast.success(`¡Espacio reservado correctamente!`)
                    setIsModalOpen(false)
                },
                onError: (error) => {
                    console.error('Ha ocurrido un error:', error)
                    toast.error(`Ha ocurrido un error, inténtalo de nuevo.`)
                    setIsModalOpen(false)
                }
            }
        )
    };

    return (
        <>
            <Modal
                open={isModalOpen}
                text={`¿Deseas reservar el espacio ${number}?`}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleClick}
            />
            <span
                className={`parking-spot ${isOccupied ? 'occupied' : 'available'}`}
                onClick={showModal}
            >
                {isPending ? '···' : number}
            </span>
        </>
    )
}