import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, homeOutline, navigateCircleOutline, personOutline, square, star, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ClerkProvider, SignedOut, RedirectToSignIn, SignedIn } from '@clerk/clerk-react';
import Home from './pages/Home';
import Routes from './pages/Routes';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';
import View from './pages/View';

setupIonicReact();
const clerkPubKey = "pk_test_bWVhc3VyZWQtYmVhZ2xlLTQ0LmNsZXJrLmFjY291bnRzLmRldiQ";
const App: React.FC = () => (
  <IonApp>
     <ClerkProvider publishableKey={clerkPubKey}>
     <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    <SignedIn>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/routes">
            <Routes />
          </Route>
          <Route exact path="/routes/:id">
              <View/>
            </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Routes" href="/routes">
            <IonIcon aria-hidden="true" icon={navigateCircleOutline} />
            <IonLabel>Routes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Reviews" href="/reviews">
            <IonIcon aria-hidden="true" icon={star} />
            <IonLabel>Review</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </SignedIn>
    </ClerkProvider>
  </IonApp>
);

export default App;
