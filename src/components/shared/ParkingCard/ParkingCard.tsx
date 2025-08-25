import "./ParkingCard.scss";

/**
 * Props for the ParkingCard component.
 * @property name - The name of the parking location.
 * @property address - The address of the parking location.
 * @property availableSlots - The number of available parking slots.
 * @property onClick - Callback function to handle click events.
 */
type ParkingCardProps = {
  name: string;
  address: string;
  availableSlots: number;
  onClick?: () => void;
};

/**
 * Reusable component for displaying parking location information.
 * @component
 * @param props - Props for the ParkingCard component.
 * @returns A parking article element, displaying name, address, and available slots.
 */
export function ParkingCard({
  name,
  address,
  availableSlots,
  onClick,
}: ParkingCardProps) {
  return (
    <article className="parking" onClick={onClick}>
      <div>
        <h3>{name}</h3>
        <p>{address}</p>
      </div>

      <span>{availableSlots} libres</span>
    </article>
  );
}
