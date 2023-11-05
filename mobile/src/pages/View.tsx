import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';

const View: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>View Route</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">View Route {id}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <ExploreContainer id={id}/>
    </IonPage>
  );
};

export default View;
