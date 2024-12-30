import "./Home.scss";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";
import BannerSwiper from "../../components/Banner-swiper/BannerSwiper";
import SliderSwiper from "../../components/slider-swiper/SliderSwiper";
import { HomeQuoteBanner } from "../../components/home-quote-banner/HomeQuoteBanner";
import CategoryButton from "../../components/CategoryButton";
import AllAnimeList from "../../components/AllAnimeList";
import HomeBottomBanner from "../../components/HomeBottomBanner";
import { useRecentAnime, useTopAiringAnime } from "../../Hooks/react-query";

const Home: React.FC = () => {
  const {
    data: topAiringAnimeData,
    isLoading: isLoadingTopAiring,
    isError: isErrorTopAiring,
    error: topAiringError,
  } = useTopAiringAnime();

  const {
    data: recentAnimeData,
    isLoading: isLoadingRecent,
    isError: isErrorRecent,
    error: recentAnimeError,
  } = useRecentAnime();


  return (
    <Wrapper>
      {/* <BannerSwiper slides={topAiringAnimeData || []}/> */}
      <BannerSwiper slides={topAiringAnimeData?.results || []} />
      <SliderSwiper
        slides={recentAnimeData?.results || []}
        heading="Recent Episode"
      />
      <HomeQuoteBanner />
      <CategoryButton />
      <AllAnimeList url="www.google.com" />
      <HomeBottomBanner />
      <TabBar />
    </Wrapper>
  );
};

export default Home;
