import React, { useState } from "react";
import TabBar from "../../components/TabBar";
import Wrapper from "../../shared/utils/wrapper/Wrapper";

const Bot = () => {
  const [isTapped, setIsTapped] = useState(true);
  return (
    <Wrapper>
     
      <div
        className={`flex justify-center items-center h-[100%] w-[100%] ${
          isTapped ? " bg-white/20 backdrop-blur-lg" : ""
        } flex-col gap-5 `}
      >
        {isTapped && (
          <>
            <h1 className="text-2xl font-bold ">Tap to Talk</h1>
            <div className="grid grid-cols-2 grid-flow-row gap-10">
              <div
                className="flex justify-center items-center flex-col translate--6 "
                onClick={() => setIsTapped(false)}
              >
                {" "}
                <img
                  className=" rounded-full "
                  width={100}
                  height={20}
                  src="https://i.pinimg.com/564x/e7/68/46/e76846ec30e1c9a1b804499e2368ac6b.jpg"
                  alt=""
                />{" "}
                Goku{" "}
              </div>
              <div
                className="flex justify-center items-center flex-col"
                onClick={() => setIsTapped(false)}
              >
                {" "}
                <img
                  className=" rounded-full "
                  width={100}
                  height={20}
                  src="https://i.pinimg.com/564x/e7/68/46/e76846ec30e1c9a1b804499e2368ac6b.jpg"
                  alt=""
                />{" "}
                Goku{" "}
              </div>
              <div
                className="flex justify-center items-center flex-col"
                onClick={() => setIsTapped(false)}
              >
                {" "}
                <img
                  className=" rounded-full "
                  width={100}
                  height={20}
                  src="https://i.pinimg.com/564x/e7/68/46/e76846ec30e1c9a1b804499e2368ac6b.jpg"
                  alt=""
                />{" "}
                Goku{" "}
              </div>
              <div
                className="flex justify-center items-center flex-col"
                onClick={() => setIsTapped(false)}
              >
                {" "}
                <img
                  className=" rounded-full "
                  width={100}
                  height={20}
                  src="https://i.pinimg.com/564x/e7/68/46/e76846ec30e1c9a1b804499e2368ac6b.jpg"
                  alt=""
                />{" "}
                Goku{" "}
              </div>
            </div>
          </>
        )}
      </div>
  
      <TabBar />
    </Wrapper>
  );
};

export default Bot;
