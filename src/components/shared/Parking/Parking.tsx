import './Parking.scss'

type ParkingProps = {
    name: string
    address: string
    availableSlots: number
    onClick?: () => void
}

export function Parking({ name, address, availableSlots, onClick }: ParkingProps) {
    return (
        <article className='parking' onClick={onClick}>
            <div>
                <h3>{name}</h3>
                <p>{address}</p>
            </div>

            <span>{availableSlots} libres</span>
        </article>
    )
}