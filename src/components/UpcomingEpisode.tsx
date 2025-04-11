import React, { useEffect, useState } from "react";

interface Episode {
  id: number;
  airingAt: number;
  image: string;
  title: {
    romaji: string;
  };
  episode: number;
}

const getNextFiveDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    days.push({ dayName, formattedDate });
  }
  return days;
};
const UpcomingEpisode = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [hasNextPage, setHasNextPage] = useState(true);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const days = getNextFiveDays();
  const [selectedDate, setSelectedDate] = useState(days[0].dayName);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch(
        `https://consumet-apis.vercel.app/meta/anilist/airing-schedule?currentPage=${currentPage}`
      );
      const data = await response.json();
      const { results, hasNextPage } = data;

      // Append new episodes to existing episodes
      setEpisodes((prevEpisodes) => [...prevEpisodes, ...results]);
      setHasNextPage(hasNextPage);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [currentPage]);

  // Function to load more episodes when the user reaches the bottom of the page
  return (
    <div className="h-[500px] w-[350px] my-5 mx-auto bg-white rounded-xl flex items-center justify-center relative ">
      <img
        className="absolute left-[-40px]  animate-random2"
        width={80}
        src="https://png.pngtree.com/png-clipart/20220725/ourmid/pngtree-shuriken-ninja-kunai-star-png-image_6060895.png"
        alt=""
      />
      <img
        className="absolute right-[-20px]  animate-random1"
        width={80}
        src="https://png.pngtree.com/png-vector/20220818/ourmid/pngtree-mangekyou-sharingan-shisui-uchiha-png-image_6115662.png"
        alt=""
      />
      <img
        className="absolute bottom-[-20px] right-[100px]  animate-random3"
        width={80}
        src="https://png.pngtree.com/png-vector/20221127/ourmid/pngtree-transparent-sasukes-rinnegan-png-image_6482848.png"
        alt=""
      />

      <div className="h-[490px] w-[340px] bg-black/80 backdrop-blur-sm  rounded-xl z-10  ">
        <h1 className="text-xl font-sans font-bold p-auto flex justify-center py-3 items-center ">
          Upcoming <span className="text-purple-500/40 ml-1"> Episodes </span>
        </h1>

        <ul className="flex gap-5 px-2 overflow-auto">
          {days.map((day, index) => (
            <li
              key={index + 1} // Use formatted date for better uniqueness
              onClick={() => setSelectedDate(day.dayName)} // Correctly set the day
              className={`${
                selectedDate === day.dayName ? "bg-white text-black" : ""
              } px-4 py-2 border rounded-full border-white text-white bg-white/20 backdrop-blur-xl cursor-pointer`}
            >
              {day.dayName}
            </li>
          ))}
        </ul>

        <div className="flex overflow-auto mt-5">
          <div className="flex flex-col gap-5 h-[372px] overflow-auto items-start px-4">
            {episodes.map((episode, index) => (
              <div key={index + 1} className="flex items-center gap-4">
                <h1 className="text-md w-[90px]">
                  {new Date(episode.airingAt * 1000).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </h1>
                <div className="flex flex-row justify-center items-center gap-4 w-[200px]">
                  <img
                    className="rounded-3xl w-20 h-24"
                    src={episode.image}
                    alt={episode.title.romaji}
                  />
                  <div className="flex flex-col border-b border-white">
                    <h1 className="text-sm font-sans font-bold ">
                      {episode.title.romaji}
                    </h1>
                    <h1 className="text-sm font-sans font-bold pb-4 ">
                      <span className="text-purple-500/40 ">Episode No: </span>{" "}
                      {episode.episode}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEpisode;
