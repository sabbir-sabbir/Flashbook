import { useState } from "react";
import { dateDifferenceFromNow } from "../../utils/indes";
import fakeuserimg from "../../assets/rabbit.svg";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useAvatar } from "../../hooks/useAvatar";
import {useProfile} from "../../hooks/useProfile"

const PostHeader = ({ post }) => {
  const [showActions, setShowSctions] = useState(false)


  const {avatarURL} = useAvatar(post)
  return (
    <>
      <div className="w-full h-auto bg-[#0d1321] flex justify-between relative ">
        <div className="flex items-start gap-3 bg-[#0d1321]">
          <div className="bg-[#0d1321]">
            <img className="w-10 h-10 rounded-full " src={
              avatarURL ? (avatarURL) : (fakeuserimg)
            } alt="Author Profile Image" />
          </div>
          <div className="flex flex-col items-start justify-start  bg-[#0d1321]">
            <p className="text-[10px] font-nova bg-[#0d1321]">{`${dateDifferenceFromNow(post?.createAt)} ago`}</p>
            <h1 className="font-iceland text-[27px] bg-[#0d1321]">{post?.author?.name}</h1>
          </div>
        </div>
        <div className="bg-[#0d1321] ">
          <button onClick={()=> setShowSctions(!showActions)} >
            <BsThreeDots className="w-5 h-5 bg-[#0d1321] hover:bg-neutral-300/15 hover:w-6 hover:h-6 hover:p-1 hover:rounded-full duration-300 " />
          </button>
        </div>
        {/* actions */}
        {showActions && <div className="absolute right-7 top-3 w-[150px] h-auto p-2 bg-[#0d1321] border-[0.25px] border-white rounded-sm hover:w-[155px] duration-500 transition-all">
           <div className="flex flex-col items-start justify-start gap-2 bg-[#0d1321] ">
            <button className="flex items-center gap-3 bg-[#0d1321] w-full ">
              <FiEdit3 className="bg-[#0d1321]"/>
              Edit
            </button>
            <button className="flex items-center gap-3 bg-[#0d1321] w-full ">
              <RiDeleteBin4Line  className="bg-[#0d1321]"/>
              Delete
            </button>
           </div>
        </div>

        }
      </div>
    </>
  );
};

export default PostHeader;
