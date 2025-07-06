import { useCreateReservation } from '@/hooks/useCreateReservation'
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
                    console.log("Reservation created successfully")
                },
                onError: (error) => {
                    console.error('Error reserving spot:', error)
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