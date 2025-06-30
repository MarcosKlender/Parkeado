import './ParkingDetail.scss'

type ParkingDetailProps = {
    name: string
    address: string
    availableSlots: number
    floorNumber: number
    onClick?: () => void
}

export function ParkingDetail({ name, address, availableSlots, floorNumber, onClick }: ParkingDetailProps) {
    return (
        <article className='parking' onClick={onClick}>
            <div>
                <h3>{name}</h3>
                <p>{address}</p>
            </div>

            <span>{availableSlots} libres</span>
            <span>Piso {floorNumber}</span>
        </article>
    )
}