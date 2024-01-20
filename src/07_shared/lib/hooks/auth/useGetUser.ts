import { user_service } from "@/src/07_shared/api/services";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  return useQuery({
    queryFn: async () => await user_service.getUser(),
    queryKey: ["users"],
  });
};
