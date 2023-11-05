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

const ViewRoute: React.FC<Id> = ({ id }) => {
  const [waypoints, setWaypoints] = useState<Coordinate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if user location is present in local storage
        const cachedUserLocation = sessionStorage.getItem("userLocation");
        if (cachedUserLocation) {
          setWaypoints([JSON.parse(cachedUserLocation)]);
        } else {
          // Fetch user location using the browser's native geolocation API
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          const userWaypoint: Coordinate = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setWaypoints([userWaypoint]);
          sessionStorage.setItem("userLocation", JSON.stringify(userWaypoint));
        }

        const cachedRouteData = sessionStorage.getItem(`routeData_${id}`);
        if (cachedRouteData) {
          setWaypoints((prevWaypoints) => [...prevWaypoints, ...JSON.parse(cachedRouteData)]);
        } else {
          // Fetch waypoints from the API
          const response = await fetch(`http://localhost:3000/routes/${id}`);
          if (response.ok) {
            const data = await response.json();
            const routeCoordinates: Coordinate[] = data.coordinates.map((coord: any) => ({
              latitude: parseFloat(coord.latitude),
              longitude: parseFloat(coord.longitude),
            }));

            // Add user location at the beginning of waypoints array
            setWaypoints((prevWaypoints) => [...prevWaypoints, ...routeCoordinates]);
            sessionStorage.setItem(`routeData_${id}`, JSON.stringify(routeCoordinates));
          } else {
            console.error("Failed to fetch route coordinates");
          }
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
        <Map waypoints={waypoints.map((waypoint) => [waypoint.latitude, waypoint.longitude])} />
      </IonContent>
    </IonPage>
  );
};

export default ViewRoute;
