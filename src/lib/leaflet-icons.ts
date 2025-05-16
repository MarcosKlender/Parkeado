import L from "leaflet"
import markerIcon from "@/assets/leaflet/marker-icon.png"
import markerIcon2x from "@/assets/leaflet/marker-icon-2x.png"
import markerShadow from "@/assets/leaflet/marker-shadow.png"

export const DefaultMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow
})
