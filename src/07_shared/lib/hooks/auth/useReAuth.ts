import { useSetAtom } from "jotai";
import { api_client } from "@/src/07_shared/api/client";
import { isAuthenticatedAtom } from "../../store";
import { Mutex } from "async-mutex";
import axios from "axios";
import Cookies from "js-cookie";

const mutex = new Mutex();

export const useReAuth = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const reAuth = async () => {
    let response;
    const access = Cookies.get("access");

    try {
      if (access === undefined) {
        if (!mutex.isLocked()) {
          const release = await mutex.acquire();
          try {
            // Ensure the mutex was not acquired in the meantime
            if (access === undefined) {
              const refreshResponse = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}jwt/refresh/`,
                {},
                { withCredentials: true }
              );

              if (refreshResponse.status === 200) {
                const newToken = refreshResponse.data.access;

                Cookies.set("access", newToken);
                setIsAuthenticated(true);

                response = await api_client.makeRequest("GET", "users/me/");
              } else {
                setIsAuthenticated(false);
                throw new Error("Failed to refresh token");
              }
            }
          } catch (error) {
            console.error("Error during token refresh:", error);
            throw error; // Re-throw the error after logging
          } finally {
            release();
          }
        }
      }
    } catch (err) {
      console.error("Request error:", err);
      throw err; // Re-throw the error after logging
    }
    return response;
  };

  return reAuth;
};
