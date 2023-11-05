import React from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";

interface DirectionsProps {
    waypoints: Array<[number, number]>;
}

const Directions: React.FC<DirectionsProps> = ({ waypoints }) => {
    const map = useMap();

    React.useEffect(() => {
        if (waypoints.length >= 2) {
            const routingControl = L.Routing.control({
                waypoints: waypoints.map((coords) => L.latLng(coords[0], coords[1])),
            }).addTo(map);

            return () => {
                map.removeControl(routingControl);
            };
        }
    }, [map, waypoints]);

    return null;
};

export default Directions;
