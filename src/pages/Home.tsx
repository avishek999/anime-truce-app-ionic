import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Wrapper from '../shared/utils/wrapper/Wrapper';
import Swipper from '../components/swiper/Swipper';


const Home: React.FC = () => {
  return (
    <Wrapper>
      <Swipper />
    </Wrapper>
  );
};

export default Home;
