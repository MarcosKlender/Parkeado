import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AuthMap.scss";

/**
 * Default coordinates for centering the map (Bogota).
 */
const position: LatLngExpression = [4.68, -74.1];

/**
 * Displays a Leaflet map without markers, intended for authentication pages.
 * @component
 * @returns An interactive Leaflet map component.
 */
export function AuthMap() {
  return (
    <MapContainer
      scrollWheelZoom={false}
      center={position}
      zoom={12}
      className="auth-map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
