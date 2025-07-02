import { useState } from "react";
import { ParkingProps } from "@/lib/fetch-parkings";
import { Button } from "../Button/Button";
import { Spot } from "../Spot/Spot";
import './ParkingDetail.scss';

type ParkingDetailProps = {
    parking: ParkingProps;
    onClick?: () => void;
};

export function ParkingDetail({ parking, onClick }: ParkingDetailProps) {
    const [selectedFloor, setSelectedFloor] = useState(1);

    const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFloor(Number(event.target.value));
    };

    const filteredSpots = parking.spots.filter(spot => spot.floorNumber === selectedFloor);

    return (
        <article className='parking-detail'>
            <Button variant="secondary" onClick={onClick}>Volver</Button>

            <div className='parking-info'>
                <div>
                    <h3>{parking.name}</h3>
                    <p className="address">{parking.details[0].address}</p>
                </div>
                <div>
                    <select name="floor" id="floor" onChange={handleFloorChange} value={selectedFloor}>
                        {Array.from({ length: parking.details[0].totalFloors }, (_, i) => (
                            <option key={i} value={i + 1}>Piso {i + 1}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='spots-info'>
                <h3>Espacios Disponibles</h3>
                <span>{filteredSpots.filter(spot => !spot.isOccupied).length} libres</span>
            </div>

            <div className='spots'>
                {filteredSpots.map((spot) => (
                    <Spot key={spot.id} number={spot.spotNumber} isOccupied={spot.isOccupied} onClick={() => console.log(`Spot ${spot.id} clicked!`)} />
                ))}
            </div>
        </article>
    );
}
