/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {actions} from '../../actions/index'
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { FiEdit3 } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";

const Bio = () => {
  const { state, dispatch } = useProfile();
    const { api } = useAxios();
  const [bio, setbiography] = useState("");
  const [editMode, setEditMode] = useState(false);

  
  useEffect(() => {
    if (state?.user?.bio !== undefined && state?.user?.bio !== null) {
      setbiography(state.user.bio);
    }
  }, [state?.user?.bio]);
  const SavetheBio = async () => {

    dispatch({ type: actions.profile.DATA_FETCHING });
    
    try {
      
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <>
      <div className=" bg-[#0d1321] shadow-[inset_0_2px_12px_rgba(0,0,0,0.9)]  w-full h-auto p-2  md:p-4 rounded-md flex flex-col gap-1 border-[0.25px] border-white ">
        <div>
          {!editMode ? (
            <p className=" bg-[#0d1321] w-auto h-auto text-[16px] md:text-[24] font-light">
              {state?.user?.bio}
            </p>
          ) : (
            <textarea
              className=" bg-[#0d1321] w-full h-auto text-[16px] font-light outline-none border-none resize-none"
              value={bio}
              onChange={(e) => setbiography(e.target.value)}
              rows={3}
            />
          )}
        </div>
        <div className="bg-[#0d1321]">
          {!editMode ? (
            <button
              className="p-1 bg-[#0d1321]"
              onClick={() => setEditMode(true)}
            >
              <FiEdit3 className=" w-4 h-4 md:w-6 md:h-6 bg-[#0d1321] text-white hover:scale-105 duration-500" />
            </button>
          ) : (
            <button
              className="p-1 bg-[#0d1321] flex items-center gap-1"
              onClick={SavetheBio}
            >
              <IoCheckmarkDone className=" w-4 h-4 md:w-6 md:h-6 bg-[#0d1321] text-white hover:scale-110 duration-500" />
              <span className="bg-[#0d1321]">Save</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Bio;
