import { useEffect } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";
import { api } from "../api";

const useAxios = () => {
  const { authState, setAuthState } = useAuth();

  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = authState?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error) 
    );


    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;


          try {
            const refreshToken = authState?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { token } = response.data;
            // console.log(`New token ${token}`);
            setAuthState({ ...authState, authToken: token }); 
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [authState.authToken]);

  return {api};
};

export default useAxios;
