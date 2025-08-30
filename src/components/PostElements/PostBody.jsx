import React from "react";
import { TbFaceIdError } from "react-icons/tb";

const PostBody = ({ poster, content }) => {
  return <>
    <div className="">
      {/* caption */}
      <div className="flex py-3 bg-[#0d1321]">
      <p className="text-[14px] bg-[#0d1321] font-basic">{content}</p>
    </div>
    {/* post image */}
    <div className="flex justify-center items-center">
      <img className=" w-[800px] h-auto" src={poster ? (`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`) : (<TbFaceIdError />)} alt="Your Post is here..." />
    </div>
    </div>
  </>;
};

export default PostBody;
