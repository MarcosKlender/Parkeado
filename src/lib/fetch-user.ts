type UserProps = {
    id: string
    name: string
    email: string
    plate: string
}

export async function fetchUser(): Promise<UserProps> {
    const response = await fetch("https://682918966075e87073a5b965.mockapi.io/users/1")
    if (!response.ok) throw new Error("No se pudo obtener el usuario")
    return response.json()
}