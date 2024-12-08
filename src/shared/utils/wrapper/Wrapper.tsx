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
      window.location.reload();
    
    // Mark the refresher as complete
    event.detail.complete();

      event.detail.complete();
    }, 2000);
  }
  return (
    <IonPage>
      <IonContent className={"Ion_content "}>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh} className="refresher" >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Wrapper;
