import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import { getDefaultMarkerIcon } from "@/lib/leaflet-icons"
import { LatLngExpression } from "leaflet"
import { ParkingProps } from "@/lib/fetch-parkings"
import "leaflet/dist/leaflet.css"
import "./MarkersMap.scss"

type MarkersMapProps = {
    parkings: ParkingProps[]
    center: LatLngExpression
    zoom?: number
}

export function MarkersMap({ parkings, center, zoom = 13 }: MarkersMapProps) {
    return (
        <MapContainer
            key={JSON.stringify(center)}
            center={center}
            zoom={zoom}
            className="markers-map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                parkings.map(parking => (
                    <Marker
                        key={parking.id}
                        position={parking.details[0].position}
                        icon={getDefaultMarkerIcon()}
                    >
                        <Tooltip>{parking.name} | {parking.details[0].availableSpots} disponibles</Tooltip>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}