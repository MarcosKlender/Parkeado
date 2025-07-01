import { ParkingProps } from "@/lib/fetch-parkings"
import { Button } from "../Button/Button"
import { Spot } from "../Spot/Spot"
import './ParkingDetail.scss'

type ParkingDetailProps = {
    parking: ParkingProps
    onClick?: () => void
}

export function ParkingDetail({ parking, onClick }: ParkingDetailProps) {
    return (
        <article className='parking-detail'>
            <Button variant="secondary" onClick={onClick}>Volver</Button>

            <div className='parking-info'>
                <div>
                    <h3>{parking.name}</h3>
                    <p className="address">{parking.details[0].address}</p>
                </div>
                <div>
                    <span>Piso 1</span>
                </div>
            </div>

            <div className='spots-info'>
                <h3>Espacios Disponibles</h3>
                <span>{parking.details[0].availableSpots} libres</span>
            </div>

            <div className='spots'>
                <Spot number={1} isAvailable={true} />
                <Spot number={2} isAvailable={false} />
                <Spot number={3} isAvailable={true} />
            </div>
        </article>
    )
}