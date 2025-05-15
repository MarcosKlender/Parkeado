import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css"
import "./HomeMap.scss";

type MapMarker = {
    position: [number, number]
    text: string
}

const position: LatLngExpression = [4.704, -74.087];
const markers: MapMarker[] = [
    { position: [4.719, -74.089], text: "Parqueadero 1" },
    { position: [4.709, -74.057], text: "Parqueadero 2" },
    { position: [4.690, -74.079], text: "Parqueadero 3" },
    { position: [4.702, -74.123], text: "Parqueadero 4" }
];

export function HomeMap() {
    return (
        <MapContainer
            center={position}
            zoom={13}
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