import './Parking.scss'

type ParkingProps = {
    name: string,
    address: string,
    available_slots: number
}

export function Parking({ name, address, available_slots }: ParkingProps) {
    return (
        <article className='parking'>
            <div>
                <h3>{name}</h3>
                <p>{address}</p>
            </div>

            <span>{available_slots} libres</span>
        </article>
    )
}