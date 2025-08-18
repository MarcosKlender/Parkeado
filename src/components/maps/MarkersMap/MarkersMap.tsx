import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { getDefaultMarkerIcon } from "@/config/leaflet-icons";
import { LatLngExpression } from "leaflet";
import { ParkingProps } from "@/config/fetch-parkings";
import "leaflet/dist/leaflet.css";
import "./MarkersMap.scss";

/**
 * Props for the MarkersMap component.
 * @property parkings - The parking locations to display on the map.
 * @property center - The initial center position of the map.
 * @property zoom - The initial zoom level of the map. Defaults to 13.
 */
type MarkersMapProps = {
  parkings: ParkingProps[];
  center: LatLngExpression;
  zoom?: number;
};

/**
 * Displays a Leaflet map with markers for the parking locations.
 * @component
 * @param props - Component props.
 * @returns An interactive Leaflet map component.
 */
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
      {parkings.map((parking) => (
        <Marker
          key={parking.id}
          position={parking.details[0].position}
          icon={getDefaultMarkerIcon()}
        >
          <Tooltip>
            {parking.name} | {parking.details[0].availableSpots} disponibles
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
