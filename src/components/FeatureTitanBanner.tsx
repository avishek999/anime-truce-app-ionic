import React from "react";

const FeatureTitanBanner = () => {
  return (
    <div className="mt-32 ">
      <div className="backdrop-blur-sm sticky   mx-auto bg-white/20 border border-white h-20 border-dotted  w-96 rounded-xl  shadow-lg shadow-white/20 relative">
        <h1 className="text-center flex justify-center items-center h-full text-2xl absolute left-[90px] text-purple-300/70 ">
          {" "}
          <span> Save Me!</span>
        </h1>
        <img
          src="images/today/titan2.png"
          alt=""
          className="absolute bottom-[-1px] left-[-20px]"
          width={120}
        />
        <img
          src="images/today/aot.png"
          alt=""
          className="absolute bottom-[-1px] right-[-20px]"
          width={200}
        />
      </div>
    </div>
  );
};

export default FeatureTitanBanner;
