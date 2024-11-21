import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import { MdLogin } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import React from 'react';
import './Auth.scss'

const Auth: React.FC = () => {

    const handleLogin =  () =>{

    }

    return (
        <IonPage className='auth flex  justify-center px-7 '>

    <img src="auth/log-in-screen-image.webp" />
          <IonCard className="backdrop-blur-sm  bg-black/40">
          <IonCardContent className="login">
            <form onSubmit={handleLogin}>
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="Email"
                type="email"
                // value={email}
                // onIonChange={(e: CustomEvent) => setEmail(e.detail.value!)}
                placeholder="Enter email"
                className=""
                color="dark"
              />
              <IonInput
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Password"
                type="password"
                // value={password}
                // onIonChange={(e: CustomEvent) => setPassword(e.detail.value!)}
                placeholder="Enter email"
                color="dark"
              />
              <IonButton
                className="ion-margin-top"
                expand="block"
                type="submit"
                color={'light'}
                shape={'round'}
              >
                Login
                <MdLogin />
              </IonButton>
              <IonButton
               color={"dark"}
                className="ion-margin-top "
                expand="block"
                routerLink="/register"
                shape={'round'}
              >
                Create Account
                <RiLoginCircleFill />
              </IonButton>
            </form>
            
          </IonCardContent>
        </IonCard>
        </IonPage>
    );
};

export default Auth;