import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Directions from "./Directions";


interface MapProps {
    startCoords: [number, number];
    endCoords: [number, number];
}

const Map: React.FC<MapProps> = ({ startCoords, endCoords }) => {
    return (
        <MapContainer
            center={startCoords}
            zoom={13}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={startCoords} />
            <Marker position={endCoords} />
            <Directions startCoords={startCoords} endCoords={endCoords} />
        </MapContainer>
    );
};

export default Map;