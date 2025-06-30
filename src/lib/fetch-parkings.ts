import { LatLngExpression } from "leaflet"

export type ParkingProps = {
    id: string
    name: string
    city: string
    details: {
        availableSpots: number
        address: string
        position: LatLngExpression
        totalFloors: number
    }[]
    spots: {
        id: string
        spotNumber: number
        isOccupied: boolean
        floorId: string
        floorNumber: number
    }[]
}

export async function fetchParkings(): Promise<ParkingProps[]> {
    const response = await fetch("https://spring-cloud-gateway-production-4db6.up.railway.app/ms-elastic-tfm/places/out")
    if (!response.ok) throw new Error("Error al recuperar los parqueaderos")
    const data = await response.json()
    return data.parkings
}