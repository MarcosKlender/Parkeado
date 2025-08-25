/**
 * Props for a user retrieved from the API.
 * @property id - The unique identifier of the user.
 * @property name - The name of the user.
 * @property email - The email address of the user.
 * @property plate - The car plate number of the user.
 */
type UserProps = {
  id: string;
  name: string;
  email: string;
  plate: string;
};

/**
 * Fetch user data from the API.
 *
 * - Sends a GET request and returns the parsed user data.
 * - Handles all possible error scenarios (network, HTTP, parsing).
 * - Implements fail-fast principle with immediate error throwing.
 *
 * @returns A promise that resolves to the user data.
 * @throws {Error} When the request fails with detailed context.
 */
export async function fetchUser(): Promise<UserProps> {
  try {
    const response = await fetch(
      "https://682918966075e87073a5b965.mockapi.io/users/1"
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
