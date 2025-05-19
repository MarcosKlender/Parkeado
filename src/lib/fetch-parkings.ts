import { LatLngExpression } from "leaflet"

export type ParkingProps = {
    id: string
    name: string
    address: string
    position: LatLngExpression
    availableSlots: number
}

export async function fetchParkings(): Promise<ParkingProps[]> {
    const response = await fetch("https://682918966075e87073a5b965.mockapi.io/parkings")
    if (!response.ok) throw new Error("No se pudo obtener los parqueaderos")
    return response.json()
}