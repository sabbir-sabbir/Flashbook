import React from 'react'
import { BiLike } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { PiShareFat } from "react-icons/pi";


const PostActions = ({postId, commentCount}) => {
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="  w-[800px] h-[45px] py-2  flex  items-center  justify-between text-[14px]">
         <div className="flex items-center gap-1 cursor-pointer p-1 rounded-lg hover:border-[0.25px] border-white ">
          <BiLike />
          <span >Like</span>
         </div>

         <div className="flex items-center gap-1 cursor-pointer p-1 rounded-lg hover:border-[0.25px] border-white">
          <VscComment/>
          <span >Comments ({commentCount ?? 0})</span>
         </div>

         <div className="flex items-center gap-1 cursor-pointer p-1 rounded-lg hover:border-[0.25px] border-white">
          <PiShareFat/>
          <span>Share</span>
         </div>
    </div>
    </div>
    </>
  )
}

export default PostActions