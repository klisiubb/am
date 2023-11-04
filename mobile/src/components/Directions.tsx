import React from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";

interface DirectionsProps {
    startCoords: [number, number];
    endCoords: [number, number];
}

const Directions: React.FC<DirectionsProps> = ({ startCoords, endCoords }) => {
    const map = useMap();

    React.useEffect(() => {
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(startCoords[0], startCoords[1]),
                L.latLng(endCoords[0], endCoords[1]),
            ],
     
        }).addTo(map);

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, startCoords, endCoords]);

    return null;
};

export default Directions;