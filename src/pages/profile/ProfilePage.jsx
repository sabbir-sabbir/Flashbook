import { useEffect } from "react";
import useAxios from "../../hooks/useAxios.js";
import { useAuth } from "../../hooks/useAuth.js";
import { useProfile } from "../../hooks/useProfile.js";
import { actions } from "../../actions/index.js";
import Profileinfo from "../../components/profileComponents/Profileinfo.jsx";
import Myposts from "../../components/profileComponents/Myposts.jsx";

const ProfilePage = () => {
  const {  dispatch } = useProfile();
  const { api } = useAxios();
  const { authState } = useAuth();

  useEffect(() => {
    if (!authState?.user?.id) return;

    dispatch({ type: actions.profile.DATA_FETCHING });

    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${authState?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [authState?.user?.id]);

  return (
    <>
     <Profileinfo/>
     <Myposts/>
    </>
  );
};

export default ProfilePage;
