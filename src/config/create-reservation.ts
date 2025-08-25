/**
 * Payload props for creating a reservation.
 * @property parkingId - The ID of the parking location.
 * @property spotId - The ID of the parking spot.
 * @property floorNumber - The floor number of the parking spot.
 * @property carPlate - The car plate number of the user.
 * @property email - The email of the user.
 */
export type PayloadProps = {
  parkingId: string;
  spotId: string;
  floorNumber: number;
  carPlate: string;
  email: string;
};

/**
 * Create a reservation via the REST API.
 *
 * - Sends a POST request with JSON body and returns the parsed reservation data.
 * - Handles all possible error scenarios (network, HTTP, parsing).
 * - Implements fail-fast principle with immediate error throwing.
 *
 * @param payload - Payload reservation details to create.
 * @returns The created reservation data returned by the API.
 * @throws {Error} When the request fails with detailed context.
 */
export async function createReservation(payload: PayloadProps) {
  try {
    const response = await fetch(
      "https://spring-cloud-gateway-production-4db6.up.railway.app/ms-elastic-tfm/reservations",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
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
