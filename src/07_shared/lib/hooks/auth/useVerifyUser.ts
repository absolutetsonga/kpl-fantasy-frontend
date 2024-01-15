import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useVerifyUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async () => await user_service.verifyUser(),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
