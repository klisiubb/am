import React from 'react';
import { SignOutButton, useUser } from '@clerk/clerk-react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonLabel } from '@ionic/react';

const Profile: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>
          <IonAvatar style={{ width: '100px', height: '100px' }}>
            <img src={user.imageUrl} alt="User Avatar" />
          </IonAvatar>
          <IonLabel style={{ marginTop: '1em', textAlign: 'center' }}>
            <h2>{user.firstName} {user.lastName}</h2>
          </IonLabel>
          <IonLabel style={{ marginTop: '1em', textAlign: 'center' }}>
            <h3>{user.primaryEmailAddress?.emailAddress}</h3>
            <h3>User since: {user.createdAt?.toLocaleDateString()}</h3>
          </IonLabel>
          <IonLabel>
            <SignOutButton />
          </IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
