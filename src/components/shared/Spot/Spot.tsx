import { useCreateReservation } from '@/hooks/useCreateReservation'
import { toast } from 'sonner';
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

    const handleClick = () => {
        if (isOccupied || isPending) return

        mutate({ parkingId, spotId, floorNumber, carPlate, email },
            {
                onSuccess: () => {
                    console.log(`Espacio ${spotId} reservado`)
                    toast.success(`¡Espacio reservado correctamente!`)
                },
                onError: (error) => {
                    console.error('Ha ocurrido un error:', error)
                    toast.error(`Ha ocurrido un error, inténtalo de nuevo.`)
                }
            }
        )
    };

    return (
        <span className={`parking-spot ${isOccupied ? 'occupied' : 'available'}`} onClick={handleClick}>
            {isPending ? '...' : number}
        </span>
    )
}