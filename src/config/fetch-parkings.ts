import { LatLngExpression } from "leaflet";

/**
 * Props for a parking location retrieved from the API.
 * @property id - The unique identifier of the parking.
 * @property name - The name of the parking location.
 * @property city - The city where the parking is located.
 * @property details - Additional details about the parking location.
 * @property spots - The parking spots available in the location.
 */
export type ParkingProps = {
  id: string;
  name: string;
  city: string;
  details: {
    availableSpots: number;
    address: string;
    position: LatLngExpression;
    totalFloors: number;
  }[];
  spots: {
    id: string;
    spotNumber: number;
    isOccupied: boolean;
    floorId: string;
    floorNumber: number;
  }[];
};

/**
 * Fetch parking locations from the API.
 *
 * - Sends a GET request and returns the parsed parking locations data.
 * - Throws an error with status details if the request fails.
 *
 * @returns A promise that resolves to an array of parking locations.
 */
export async function fetchParkings(): Promise<ParkingProps[]> {
  const response = await fetch(
    "https://spring-cloud-gateway-production-4db6.up.railway.app/ms-elastic-tfm/places"
  );
  // TODO: Fix the error stack
  if (!response.ok) throw new Error("Error al recuperar los parqueaderos");
  const data = await response.json();
  return data.parkings;
}
