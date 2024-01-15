import { useAtom, useSetAtom } from "jotai";
import { authTokenAtom, isAuthenticatedAtom } from "../../store";
import { Mutex } from "async-mutex";
import axios from "axios";

type reAuthArgs = {
  url: string;
  method: string;
  data?: object;
};

export const useReAuth = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const mutex = new Mutex();

  const reAuth = async ({ url, method, data = {} }: reAuthArgs) => {
    await mutex.waitForUnlock();

    let headers = {
      Authorization: "",
    };

    if (authToken) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }

    const options = {
      url,
      method,
      data,
      headers,
      credentials: "include",
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
              credentials: "include",
            }
          );

          if (refreshResponse.ok) {
            const newToken = await refreshResponse.json();

            console.log({ newToken });
            setAuthToken(newToken);
            setIsAuthenticated(true);

            headers["Authorization"] = `Bearer ${newToken}`;

            response = await axios.request(options);
          } else {
            setAuthToken(null);
            setIsAuthenticated(false);
          }
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
