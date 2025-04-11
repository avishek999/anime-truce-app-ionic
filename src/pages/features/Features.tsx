import React from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import TabBar from "../../components/TabBar";
import FeatureBannerSwiper from "../../components/feature-banner-swiper/FeatureBannerSwiper";
import UpcomingEpisode from "../../components/UpcomingEpisode";
import FeatureTitanBanner from "../../components/FeatureTitanBanner";
import SliderSwiper from "../../components/slider-swiper/SliderSwiper";
import FeatureTitan2Banner from "../../components/FeatureTitan2Banner";
import {
  usePopularAnime,
  useRandomAnime,
  useRecentAnime,
} from "../../Hooks/react-query";

const Features = () => {
  const {
    data: recentAnimeData,
    isLoading: isLoadingRecent,
    isError: isErrorRecent,
    error: recentAnimeError,
  } = useRecentAnime();

  const {
    data: PopularAnimeData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
    error: popularAnimeError,
  } = usePopularAnime();

  const {
    data: RandomAnimeData,
    isLoading: isLoadingRandom,
    isError: isErrorRandom,
    error: RandomAnimeError,
  } = useRandomAnime();

  return (
    <Wrapper>
      <h1 className="text-4xl font-sans-sarif mt-10 font-bold text-center">
        Released <span className="text-purple-100/40">Today</span>
      </h1>
      {/* <FeatureBannerSwiper slides={animeSlides} /> */}
      <UpcomingEpisode />
      <FeatureTitanBanner />
      <SliderSwiper
        slides={recentAnimeData?.results}
        heading="Recent Episode"
      />
      <SliderSwiper slides={PopularAnimeData?.results} heading="Most Popular" />
      <SliderSwiper
        slides={RandomAnimeData?.results}
        heading="Random Episode"
      />
      <FeatureTitan2Banner />
      <TabBar />
    </Wrapper>
  );
};

export default Features;
