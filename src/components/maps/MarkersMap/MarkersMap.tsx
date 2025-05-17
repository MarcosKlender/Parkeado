import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import { getDefaultMarkerIcon } from "@/lib/leaflet-icons"
import { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import "./MarkersMap.scss"

export type MapMarker = {
    position: LatLngExpression
    text: string
}

type MarkersMapProps = {
    markers: MapMarker[]
    center: LatLngExpression
    zoom?: number
}

export function MarkersMap({ markers, center, zoom = 13 }: MarkersMapProps) {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            className="markers-map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={getDefaultMarkerIcon()}>
                        <Tooltip>{marker.text}</Tooltip>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}