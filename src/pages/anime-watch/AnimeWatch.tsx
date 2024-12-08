import React from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import { IAnimeDetails } from "../../interface/anime";
import { FaCirclePlay } from "react-icons/fa6";
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

const AnimeWatch = () => {
  return (
    <Wrapper>
      <div className="video-container">
        <video
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://example.com/path-to-your-anime-thumbnail.jpg"
          style={{ width: "100%", height: "auto" }}
          className="bg-black shadow-2xl shadow-purple-300/30"
          controls
        />

        <div className="text-center text-2xl mt-2 ">
          <h1 className="font-bold">Blue Lock Season 2</h1>
          <h3 className="mt-4">Episode 1</h3>
        </div>

        <div className="w-100 border border-gray-700 h-[500px] overflow-auto rounded-3xl mt-5 mx-4">
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
      </div>
<BackButton />
    </Wrapper>
  );
};

export default AnimeWatch;
