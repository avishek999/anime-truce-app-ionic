import { useState } from "react";

import StrawHat from "/images/Home/HomeQuoteBanner/straw-hat.png";
import DiscoverList from "./DiscoverList";

const CategoryButton = () => {
  const [selected, setSelected] = useState<"discover" | "genre">("discover");

  return (
    <>
      <section>
        <div className="flex justify-center mt-16 items-center">
          <div className="py-1 px-5   backdrop-blur-sm bg-black/30 rounded-full shadow-lg  border inline-flex relative">
            <img
              width={80}
              className="absolute right-[-40px] rotate-[35deg] top-[-25px] hover:animate-random2 transition-all"
              src={StrawHat}
              alt=""
            />

            <div className="flex">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out relative z-10 ${
                  selected === "discover"
                    ? "text-black"
                    : "text-white-foreground"
                }`}
                onClick={() => setSelected("discover")}
              >
                Discover
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all  duration-300 ease-in-out relative z-10 ${
                  selected === "genre" ? "text-black" : "text-white-foreground"
                }`}
                onClick={() => setSelected("genre")}
              >
                Genre
              </button>
            </div>
            <div
              className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full transition-all duration-300 ease-in-out ${
                selected === "discover"
                  ? "left-1"
                  : "left-[calc(50%_-_0.25rem)]"
              }`}
            ></div>
          </div>
        </div>
        <div>{selected === "discover" ? <DiscoverList /> : "Genre"}</div>
      </section>
    </>
  );
};

export default CategoryButton;
