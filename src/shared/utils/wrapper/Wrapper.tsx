// core imports
import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import React from "react";

//style imports
import "./Wrapper.scss";

interface IWrapper {
  children: React.ReactNode;
  className?: string;
  fullscreen?: boolean;
}

const Wrapper: React.FC<IWrapper> = ({
  children,
  className = "",
  fullscreen = false,
}) => {
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  return (
    <IonPage>
      <IonContent className={"Ion_content"} fullscreen={fullscreen}>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Wrapper;
