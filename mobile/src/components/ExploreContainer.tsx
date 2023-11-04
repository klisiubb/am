import React, { useEffect, useState } from "react";
import { IonButton, IonContent, IonPage, useIonViewDidEnter } from "@ionic/react";
import Map from "./Map";
import { Geolocation } from '@capacitor/geolocation';

const ExploreContainer: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number]>([49.8225, 19.0442]); // Default to Bielsko-Biała
  const [endCoords, setEndCoords] = useState<[number, number]>([49.72, 19.34]);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const currentPosition = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = currentPosition.coords;
        setUserLocation([latitude, longitude]);
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  return (
    <IonPage>
      <IonContent>
        <Map startCoords={userLocation} endCoords={endCoords} />
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
