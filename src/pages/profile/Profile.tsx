import React from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";

import { FaRegEdit } from "react-icons/fa";
import BackButton from "../../components/BackButton";
import { IoLibraryOutline } from "react-icons/io5";
const Profile = () => {
  return (
    <Wrapper>
      <div>
        
        <BackButton />
        <div className="w-100 flex justify-center items-center mt-24 flex-col gap-5">
          <img
            src="https://avatarfiles.alphacoders.com/354/thumb-1920-354743.jpeg"
            width={200}
            alt=""
            className="rounded-full p-4 bg-white shadow-2xl shadow-slate-50"
          />
          <h2 className="font-semibold text-3xl flex gap-4">avishek@test.com <FaRegEdit  color=""/></h2>
           <h2 className="font-semibold text-xl flex gap-4">********** <FaRegEdit  color=""/></h2>
        </div>


        <div className="flex  text-2xl gap-4 font-bold ml-4 mt-10">Library <IoLibraryOutline /></div>

        <div className="w-100 bg-black/30 rounded-2xl">
ef
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
