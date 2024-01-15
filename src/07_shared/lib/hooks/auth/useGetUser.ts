import { useReAuth } from "./useReAuth";
import { BASE_URL } from "../../constants";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const reAuth = useReAuth();

  const fetchUser = async () => {
    const response = await reAuth({
      url: `${BASE_URL}users/me/`,
      method: "GET",
    });

    return response.data;
  };

  return useQuery({
    queryFn: async () => await fetchUser(),
    queryKey: ["users"],
  });
};