import React, { useState } from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";

const AnimeDetails = () => {
  const [loadMore, setLoadMore] = useState(true);
  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };
  return (
    <Wrapper>
      <div className="anime_details_screen overflow-auto ">
        <>
          <img
            className="w-[220px] mx-auto mt-5 rounded-2xl p-2 bg-white/70   shadow-2xl shadow-purple-100/30  "
            src="https://cdn.noitatnemucod.net/thumbnail/300x400/100/92701d4864595e6cd3ce3c4effa2c198.jpg"
            alt="img"
          />
          <div className="px-5">
            <h1 className="mt-10 text-3xl font-bold font-sans antialiased tracking-wide leading-9 text-center">
              naruto
            </h1>
            <p
              onClick={handleLoadMore}
              className={`${loadMore ? "line-clamp-4": ""}  mt-5 text-white/70 text-justify  bg-black/20  `}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              asperiores eligendi quaerat laboriosam nobis adipisci iste odit
              impedit repudiandae cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae libero maiores quaerat ex? Eos quam id optio laudantium, quidem esse, a accusamus, error rerum voluptate excepturi consectetur explicabo? Iure!
            </p>
            <h3 className="mt-5">
              Total Episodes:{" "}
              <span className="px-6 py-2 border bg-purple-300/20 ml-5     ">
                20
              </span>
            </h3>
            <h4 className="mt-7 ">
              Type:
              <span className=" bg-white/30 px-4 py-2  text-center"> Tv</span>{" "}
            </h4>

            
          </div>
        </>
      </div>
    </Wrapper>
  );
};

export default AnimeDetails;
