import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Home.scss";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h1 className="text-center"> Home </h1>
      <TabBar />
    </Wrapper>
  );
};

export default Home;
