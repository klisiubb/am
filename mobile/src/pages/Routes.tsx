import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonToast,
  IonButton,
} from "@ionic/react";

const Routes: React.FC = () => {
  const [routes, setRoutes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const cachedRoutes = sessionStorage.getItem("routes");
        if (cachedRoutes) {
          setRoutes(JSON.parse(cachedRoutes));
        } else {
          const response = await fetch("http://localhost:3000/routes/");
          if (response.ok) {
            const data = await response.json();
            setRoutes(data);
            sessionStorage.setItem("routes", JSON.stringify(data));
          } else {
            throw new Error("Failed to fetch routes");
          }
        }
      } catch (error) {
        setError("Error fetching routes. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Routes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {isLoading && <IonSpinner />}
        {error && (
          <IonToast
            isOpen={true}
            message={error}
            color="danger"
            duration={3000}
            onDidDismiss={() => setError(null)}
          />
        )}
        {!isLoading && !error && (
          <IonList>
            {routes.map((route) => (
              <IonItem key={route.id}>
                <IonLabel>{route.name}</IonLabel>
                <IonButton routerLink={`/routes/description/${route.id}`}>See description</IonButton>
                <IonButton routerLink={`/routes/${route.id}`}>View</IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Routes;
