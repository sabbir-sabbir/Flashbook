import React, { useRef } from "react";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions/index";
import fakeuserimage from "../../assets/rabbit.svg";
import { MdOutlineCloudUpload } from "react-icons/md";

const Profileimage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  // image upload function
  const imageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <div className="p-1 bg-white rounded-full w-auto h-auto   ">
          <img
            className="w-16 h-16 rounded-full hover:scale-150 duration-500  "
            src={
                  state?.user?.avatar
                    ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user.avatar}`
                    : {fakeuserimage} 
                }
            alt={state?.user?.firstName}
          />
        </div>
        <form action="">
          <button type="submit" onClick={imageUpload}>
            <MdOutlineCloudUpload className="w-5 h-5 bg-transparent text-white hover:scale-105 duration-500 " />
          </button>
          <input type="file" id="file" ref={fileUploadRef} hidden />
        </form>
      </div>
    </>
  );
};

export default Profileimage;
