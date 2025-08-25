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
 * - Handles all possible error scenarios (network, HTTP, parsing).
 * - Implements fail-fast principle with immediate error throwing.
 *
 * @returns A promise that resolves to an array of parking locations.
 * @throws {Error} When the request fails with detailed context.
 */
export async function fetchParkings(): Promise<ParkingProps[]> {
  try {
    const response = await fetch(
      "https://spring-cloud-gateway-production-4db6.up.railway.app/ms-elastic-tfm/places"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data.parkings;
  } catch (error) {
    if (error instanceof Error && error.message.includes("HTTP Error: ")) {
      throw error;
    }

    throw new Error(
      `Network error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
