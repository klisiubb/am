import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import  DescriptionList  from '../components/DescriptionList';

const Description: React.FC = () => {

    const { id } = useParams<{ id: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Description</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Description</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DescriptionList id={id}/>
      </IonContent>
    </IonPage>
  );
};

export default Description;
