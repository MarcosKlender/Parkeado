import L from "leaflet";
import markerIcon from "@/assets/leaflet/marker-icon.png";
import markerIcon2x from "@/assets/leaflet/marker-icon-2x.png";
import markerShadow from "@/assets/leaflet/marker-shadow.png";

/**
 * Fix the default marker icon for different screen sizes.
 * @returns The default leaflet marker icon.
 */
export function getDefaultMarkerIcon(): L.Icon {
  const isMobile = window.innerWidth <= 768;

  return new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: isMobile ? [20, 30] : [25, 41],
    iconAnchor: isMobile ? [10, 30] : [12, 41],
    shadowSize: isMobile ? [30, 30] : [41, 41],
    shadowAnchor: isMobile ? [10, 30] : [12, 41],
  });
}
