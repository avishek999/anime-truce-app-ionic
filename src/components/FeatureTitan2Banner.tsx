import React from "react";

const FeatureTitan2Banner = () => {
  return (
    <div className="mt-20 ">
      <div className=" banner_background_image backdrop-blur-sm    mx-auto bg-white/20 border border-neutral-500 h-[100px] border-dotted  w-96 rounded-xl  shadow-lg shadow-white/20  mb-24 ">
        {/* <img width={50} className="absolute left-[-120px] bottom-0  " src="https://static.vecteezy.com/system/resources/thumbnails/038/143/521/small/ai-generated-realistic-cloud-cut-out-cloud-on-transparent-background-png.png" alt="" /> */}
        <img
          src="images/today/titan.png"
          alt=""
          className="absolute bottom-0 right-2"
          width={500}
        />
        <h1 className="absolute bottom-0 left-1/2 font-bold  transform -translate-x-1/2  z-10 text-2xl">
          Anime <span className="text-red-400/70">Truce</span>
        </h1>
      </div>
    </div>
  );
};

export default FeatureTitan2Banner;
