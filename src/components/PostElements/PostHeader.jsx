import { useState } from "react";
import { dateDifferenceFromNow } from "../../utils/indes";
import fakeuserimg from "../../assets/rabbit.svg";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = ({ post }) => {
  return (
    <>
      <div className="w-full h-auto bg-[#0d1321] flex justify-between  ">
        <div className="flex items-start gap-3 bg-[#0d1321]">
          <div className="bg-[#0d1321]">
            <img className="w-10 h-10 rounded-full " src={fakeuserimg} alt="" />
          </div>
          <div className="flex flex-col items-start justify-start   bg-[#0d1321]">
            <h1 className="font-iceland text-[27px] bg-[#0d1321]">{post?.author?.name}</h1>
            <p className="text-[10px] font-nova bg-[#0d1321]">{`${dateDifferenceFromNow(post?.createAt)} ago`}</p>
          </div>
        </div>
        <div className="bg-[#0d1321] ">
          <button>
            <BsThreeDots className="w-5 h-5 bg-[#0d1321] hover:bg-neutral-300/15 hover:w-6 hover:h-6 hover:p-1 hover:rounded-full duration-300 " />
          </button>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
