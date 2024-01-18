import { useReAuth } from "./useReAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const reAuth = useReAuth();

  const fetchUser = async () => {
    const response = await reAuth();

    return response.data;
  };

  return useQuery({
    queryFn: async () => await fetchUser(),
    queryKey: ["users"],
  });
};
