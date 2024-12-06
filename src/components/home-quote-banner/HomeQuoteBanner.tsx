import React, { useEffect, useState } from "react";

import FourStar from "/Home/HomeQuoteBanner/dragon-ball-4-star.png";
import OneStar from "/Home/HomeQuoteBanner/dragon-ball-1-star.png";
import Shenron from "/Home/HomeQuoteBanner/shenron.png";
import Goku from "/Home/HomeQuoteBanner/goku.png";

const animeHeadings = [
  "Stream Epic Anime Adventures",
  "Discover Your Anime Universe",
  "Endless Anime Streaming Hub",
  "Unleash Ultimate Anime Worlds",
  "Watch Legendary Anime Now",
  "Dive Into Anime Realms",
];
export const HomeQuoteBanner = () => {
  const [fade, setFade] = useState(true);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      const timeout = setTimeout(() => {
        setCurrentHeadingIndex(
          (prevIndex) => (prevIndex + 1) % animeHeadings.length
        );
        setFade(true);
      }, 500);

      return () => clearTimeout(timeout);
    }, 2500);

    return () => clearInterval(interval);
  }, [animeHeadings.length]);

  const currentHeading = animeHeadings[currentHeadingIndex].split(" ");

  return (
    <div className="relative w-100 flex justify-center mt-20 items-center will-change-scroll  transition-all group ">
      <img
        height={30}
        width={50}
        className="absolute right-24 animate-random1  "
        src={FourStar}
        alt=""
        loading="lazy"
      />
      <img
        height={30}
        width={240}
        className="absolute left-[-0px] top=[-120px]  animate-pulse group-hover:animate-ping"
        src={Shenron}
        alt=""
        loading="lazy"
      />

      <img
        height={30}
        width={50}
        className="absolute top-[-20px] left-[0] z-[1] animate-random2 "
        src={FourStar}
        alt=""
        loading="lazy"
      />
      <img
        height={30}
        width={50}
        className="absolute top-[-30px] right-40 animate-random3 "
        src={OneStar}
        alt=""
        loading="lazy"
      />

      <div className="backdrop-blur-sm sticky   bg-white/20 border border-neutral-500 h-20  w-96 rounded-xl  shadow-lg shadow-white/20">
        <div className="flex relative items-center ">
          <div
            className={`text-lg  pt-7 pl-3 font-bold  transition-all duration-200 ease-in-out  text-white${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentHeading.map((word, index) =>
              word.toLowerCase() === "anime" ? (
                <span
                  key={index}
                  className="text-purple-200 mx-1  transition-all duration-200 ease-in-out"
                >
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </div>

          <img
            className="absolute bottom-[-22px] right-0 "
            height={20}
            width={130}
            src={Goku}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
