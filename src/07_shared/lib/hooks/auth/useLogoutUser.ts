import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogoutUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async () => await user_service.logoutUser(),
  });
};
