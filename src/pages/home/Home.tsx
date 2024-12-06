
import "./Home.scss";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";
import BannerSwiper from "../../components/home/BannerSwiper/BannerSwiper";


const animeSlides = [
  {
    id: "1",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "Naruto: Believe It!",
  },
  {
    id: "2",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "One Piece: The Pirate's Journey",
  },
  {
    id: "3",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "Attack on Titan: Humanity's Struggle",
  },
  {
    id: "4",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "Demon Slayer: Kimetsu no Yaiba",
  },
  {
    id: "5",
    image: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b25eb117ecc8cf228d361540c7cfd67.jpg",
    title: "My Hero Academia: Heroes Rising",
  },
  
];



const Home: React.FC = () => {
  return (
    <Wrapper>
      <BannerSwiper slides={animeSlides} />

      <TabBar />
    </Wrapper>
  );
};

export default Home;
