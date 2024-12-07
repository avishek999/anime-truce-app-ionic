import React, { useState } from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import { IAnimeDetails } from "../../interface/anime";

import { FaCirclePlay } from "react-icons/fa6";

import { IoArrowBack } from "react-icons/io5";
import BackButton from "../../components/BackButton";
const animeData: IAnimeDetails = {
  id: "blue-lock-season-2-19318",
  title: "Blue Lock Season 2",
  image:
    "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg",
  description: "Second season of Blue Lock.",
  type: "TV",
  totalEpisodes: 10,
  episodes: [
    {
      id: "blue-lock-season-2-19318$episode$128447$both",
      number: 1,
      title: "Tryouts",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$128580$both",
      number: 2,
      title: "The Assassin and the Ninja",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$128683$both",
      number: 3,
      title: "The World You Feel",
      isFiller: true,
    },
    {
      id: "blue-lock-season-2-19318$episode$128774$both",
      number: 4,
      title: "Chameleon",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$128861$both",
      number: 5,
      title: "Flow",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$129000$both",
      number: 6,
      title: "The Big Stage",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$129096$both",
      number: 7,
      title: "Itoshi Sae",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$129186$both",
      number: 8,
      title: "Blue Genes",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$129286$both",
      number: 9,
      title: "Night Snow",
      isFiller: false,
    },
    {
      id: "blue-lock-season-2-19318$episode$129600$both",
      number: 10,
      title: "Episode 10",
      isFiller: false,
    },
  ],
  recommendations: [
    {
      id: "gurazeni-money-pitch-6543",
      title: "Gurazeni: Money Pitch",
      image:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3ba10742ef50cf2fdbc3ae142f104e0.jpg",
      duration: "23m",
      type: "TV",
      sub: 12,
      dub: 0,
      episodes: 12,
    },
    {
      id: "gurazeni-money-pitch-6543",
      title: "Gurazeni: Money Pitch",
      image:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3ba10742ef50cf2fdbc3ae142f104e0.jpg",
      duration: "23m",
      type: "TV",
      sub: 12,
      dub: 0,
      episodes: 12,
    },
    {
      id: "gurazeni-money-pitch-6543",
      title: "Gurazeni: Money Pitch",
      image:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3ba10742ef50cf2fdbc3ae142f104e0.jpg",
      duration: "23m",
      type: "TV",
      sub: 12,
      dub: 0,
      episodes: 12,
    },
    {
      id: "gurazeni-money-pitch-6543",
      title: "Gurazeni: Money Pitch",
      image:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3ba10742ef50cf2fdbc3ae142f104e0.jpg",
      duration: "23m",
      type: "TV",
      sub: 12,
      dub: 0,
      episodes: 12,
    },
    {
      id: "gurazeni-money-pitch-6543",
      title: "Gurazeni: Money Pitch",
      image:
        "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3ba10742ef50cf2fdbc3ae142f104e0.jpg",
      duration: "23m",
      type: "TV",
      sub: 12,
      dub: 0,
      episodes: 12,
    },
  ],
};

const AnimeDetails: React.FC<IAnimeDetails> = ({
  title,
  image,
  description,
  type,
  totalEpisodes,
  recommendations,
}) => {
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };


 
  return (
    <Wrapper>
      <div className="anime_details_screen">
        <BackButton />
        <>
          <img
            className="w-[220px] mx-auto mt-5 rounded-2xl p-2 bg-white/70   shadow-2xl shadow-purple-100/30  "
            src={animeData.image}
            alt="img"
          />
          <div className="px-5">
            <h1 className="mt-10 text-3xl font-bold font-sans antialiased tracking-wide leading-9 text-center">
              {animeData.title}
            </h1>
            <p
              onClick={handleLoadMore}
              className={`${
                loadMore ? "line-clamp-4" : ""
              }  mt-5 text-white/70 text-justify  bg-black/20  `}
            >
              {animeData.description}
            </p>
            <h3 className="mt-5">
              Total Episodes:{" "}
              <span className="px-6 py-2 border bg-purple-300/ ml-5     ">
                {animeData.totalEpisodes}
              </span>
            </h3>
            <div className="flex items-center gap-4 mt-3">
              <h4>type</h4>
              <div className="px-2 py-1 border bg-white/20">
                {animeData.type}
              </div>
            </div>
            <div className="w-100 border border-gray-700 h-[500px] overflow-auto rounded-3xl bg-black/30 mt-5">
              <h2 className="text-3xl py-4 font-bold h-18 sticky top-0 bg-black  text-center rounded-xl w-full z-10">
                Episodes
              </h2>

              {animeData.episodes.map((episode) => (
                <div
                  key={episode.id}
                  className="w-100 h-[100px] py-2 px-4 mt-5 bg-white/20"
                >
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={animeData.image}
                        width={60}
                        alt=""
                        className="rounded-xl"
                      />
                      <FaCirclePlay
                        className="absolute inset-0 m-auto text-black animate-pulse"
                        size={40}
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">{episode.title}</h1>
                      <h2 className="mt-2">Episode: {episode.number}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h1 className="text-2xl my-4">Recommendations</h1>
          </div>
        </>
      </div>
    </Wrapper>
  );
};

export default AnimeDetails;
