import React, { useEffect, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { arrowBack, mapOutline, pin, navigate } from 'ionicons/icons';

interface Id {
  id: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
  description: string;
  name: string;
}

const DescriptionList: React.FC<Id> = ({ id }) => {
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState<Coordinate | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch waypoints from the API
        const response = await fetch(`http://localhost:3000/routes/${id}`);
        if (response.ok) {
          const data = await response.json();
          const coordinates: Coordinate[] = data.coordinates.map((coord: any) => ({
            latitude: parseFloat(coord.latitude),
            longitude: parseFloat(coord.longitude),
            description: coord.description,
            name: coord.name,
          }));
          setRouteCoordinates(coordinates);
        } else {
          console.error('Failed to fetch route coordinates');
        }
      } catch (error) {
        console.error('Error fetching route coordinates:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButton slot="start" fill="clear" routerLink="/routes">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>Route Coordinates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {routeCoordinates.map((coordinate, index) => (
          <IonCard
            key={index}
            onClick={() => setSelectedCoordinate(coordinate)}
            className={selectedCoordinate === coordinate ? 'selected-card' : 'normal-card'}
          >
            <IonCardContent>
              <h1>{coordinate.name}</h1>
              {selectedCoordinate === coordinate && (
                <>
                  <IonIcon icon={pin} /> Latitude: {coordinate.latitude.toFixed(6)} <br />
                  <IonIcon icon={pin} /> Longitude: {coordinate.longitude.toFixed(6)} <br />
                  <p><i>{coordinate.description} </i></p>
                </>
              )}
            </IonCardContent>
          </IonCard>
        ))}
        <IonButton expand="full" routerLink={`/routes/${id}`}>
                    <IonIcon icon={mapOutline} slot="start" />
                    See on Map
                  </IonButton>
                <IonButton expand="full" routerLink={`/routes/`} color="dark">Go back</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DescriptionList;
