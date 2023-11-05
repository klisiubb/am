import React, { useEffect, useState } from "react";
import { IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import Map from "./Map";

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Id {
  id: string;
}

const ExploreContainer: React.FC<Id> = ({ id }) => {
  const [waypoints, setWaypoints] = useState<Coordinate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user location using the browser's native geolocation API
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const userWaypoint: Coordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setWaypoints([userWaypoint]);

        // Fetch waypoints from the API
        const routeId = id;
        const response = await fetch(`http://localhost:3000/routes/${routeId}`);
        if (response.ok) {
          const data = await response.json();
          const routeCoordinates: Coordinate[] = data.coordinates.map((coord: any) => ({
            latitude: parseFloat(coord.latitude),
            longitude: parseFloat(coord.longitude),
          }));

          // Add user location at the beginning of waypoints array
          setWaypoints([userWaypoint, ...routeCoordinates]);
        } else {
          console.error("Failed to fetch route coordinates");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  return (
    <IonPage>
      <IonContent>
        <Map waypoints={waypoints.map(waypoint => [waypoint.latitude, waypoint.longitude])} />
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
