import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Directions from "./Directions";
import { IonButton, IonPage } from "@ionic/react";



interface MapProps {
    waypoints: Array<[number, number]>;
}

const Map: React.FC<MapProps> = ({ waypoints }) => {
    const [googleMapsUrl, setGoogleMapsUrl] = useState<string | null>(null);

    const generateGoogleMapsRoute = () => {
        if (waypoints.length >= 2) {
            const start = waypoints[0].join(',');
            const end = waypoints[waypoints.length - 1].join(',');
            const waypointsString = waypoints.slice(1, -1).map(waypoint => waypoint.join(',')).join('|');
            const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${start}&destination=${end}&waypoints=${waypointsString}`;
            window.open(googleMapsUrl, '_blank');
        } else {
            // Handle error: At least two waypoints are needed for a route.
            console.error('At least two waypoints are required.');
        }
    };
    

    return (
        <IonPage>
            <MapContainer
                center={waypoints[0]}
                zoom={13}
                style={{ height: "90vh", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {waypoints.map((waypoint, index) => (
                    <Marker key={index} position={waypoint}>
                    </Marker>
                ))}
                <Directions waypoints={waypoints} />
            </MapContainer>
            <IonButton href="/routes">Back</IonButton>
            <IonButton onClick={generateGoogleMapsRoute}>Google Maps</IonButton>
            {googleMapsUrl && <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>}
        </IonPage>
    );
};

export default Map;
