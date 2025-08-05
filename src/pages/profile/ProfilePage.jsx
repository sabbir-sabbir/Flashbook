import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios.js";
import { useAuth } from "../../hooks/useAuth.js";

const ProfilePage = () => {
  const {api} = useAxios(); 
  const { authState } = useAuth();

  const [mainUser, setMainUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authState?.user?.id) return; 

    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${authState?.user?.id}`
        );

        setMainUser(response?.data?.user);
        setPosts(response?.data?.posts);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [authState?.user?.id]); // added dependency

  

  return (
    <div>
      {loading && <p>Loading...</p>}

      {!loading && mainUser && (
        <p>{mainUser.firstName}</p>
      )}

      {error && <p className="text-red-500">Error loading profile</p>}
    </div>
  );
};

export default ProfilePage;
