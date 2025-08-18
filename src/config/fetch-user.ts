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
 * - Throws an error with status details if the request fails.
 *
 * @returns A promise that resolves to the user data.
 */
export async function fetchUser(): Promise<UserProps> {
  const response = await fetch(
    "https://682918966075e87073a5b965.mockapi.io/users/1"
  );
  // TODO: Fix the error stack
  if (!response.ok) throw new Error("No se pudo obtener el usuario");
  return response.json();
}
