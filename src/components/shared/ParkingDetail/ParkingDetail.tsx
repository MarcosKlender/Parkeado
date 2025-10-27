import { useState } from "react";
import { ParkingProps } from "@/config/fetch-parkings";
import { Button } from "../Button/Button";
import { Spot } from "../Spot/Spot";
import "./ParkingDetail.scss";

/**
 * Props for the Parking Detail component.
 * @property parking - The parking object with detailed information.
 * @property onClick - Callback function to handle click events.
 */
type ParkingDetailProps = {
  parking: ParkingProps;
  onClick?: () => void;
};

/**
 * Reusable component for displaying parking details.
 * @component
 * @param props - Props for the Parking Detail component.
 * @returns Displays detailed information about a specific parking location.
 */
export function ParkingDetail({ parking, onClick }: ParkingDetailProps) {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFloor(Number(event.target.value));
  };

  /**
   * Filter the parking spots by the selected floor.
   */
  const filteredSpots = parking.spots.filter(
    (spot) => spot.floorNumber === selectedFloor
  );

  return (
    <article className="parking-detail">
      <Button variant="secondary" onClick={onClick}>
        Volver
      </Button>

      <div className="parking-info">
        <div>
          <h3>{parking.name}</h3>
          <p className="address">{parking.details[0].address}</p>
        </div>
        <div>
          {parking.details[0].totalFloors === 1 ? (
            <p>Piso Único</p>
          ) : (
            <select
              name="floor"
              id="floor"
              onChange={handleFloorChange}
              value={selectedFloor}
            >
              {Array.from(
                { length: parking.details[0].totalFloors },
                (_, i) => (
                  <option key={i} value={i + 1}>
                    Piso {i + 1}
                  </option>
                )
              )}
            </select>
          )}
        </div>
      </div>

      <div className="spots-info">
        <h3>Espacios Disponibles</h3>
        <span>
          {filteredSpots.filter((spot) => !spot.isOccupied).length} libres
        </span>
      </div>

      {filteredSpots.length === 0 ? (
        <p className="no-spots-message">No hay espacios en este piso.</p>
      ) : (
        <div className="spots">
          {filteredSpots.map((spot) => (
            <Spot
              key={spot.id}
              number={spot.spotNumber}
              isOccupied={spot.isOccupied}
              parkingId={parking.id}
              spotId={spot.id}
              floorNumber={spot.floorNumber}
              carPlate={"ABC-1234"}
              email={"marcosklender@example.com"}
            />
          ))}
        </div>
      )}
    </article>
  );
}
