import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css"
import "./HomeMap.scss";

export type MapMarker = {
    position: LatLngExpression
    text: string
}

type HomeMapProps = {
    markers: MapMarker[]
    center: LatLngExpression
    zoom?: number
}

export function HomeMap({ markers, center, zoom = 13 }: HomeMapProps) {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            className="home-map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Tooltip>{marker.text}</Tooltip>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}