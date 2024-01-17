import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "../../store";
import { Mutex } from "async-mutex";
import axios from "axios";
import Cookies from "js-cookie";

type reAuthArgs = {
  url: string;
  method: string;
  data?: object;
};

export const useReAuth = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const mutex = new Mutex();

  const reAuth = async ({ url, method, data = {} }: reAuthArgs) => {
    await mutex.waitForUnlock();

    const options = {
      url,
      method,
      data,
      withCredentials: true,
    };

    let response = await axios.request(options);

    if (response.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          const refreshResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}jwt/refresh/`,
            {
              method: "POST",
            }
          );

          if (refreshResponse.ok) {
            const newToken = await refreshResponse.json();

            Cookies.set("access", newToken);

            setIsAuthenticated(true);

            response = await axios.request(options);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error(error);
        } finally {
          release();
        }
      }
    } else {
      await mutex.waitForUnlock();

      response = await axios.request(options);
    }

    return response;
  };

  return reAuth;
};
