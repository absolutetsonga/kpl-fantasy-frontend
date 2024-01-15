import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useActivateUserParams = {
  uid: string;
  token: string;
};

export const useActivateUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({ uid, token }: useActivateUserParams) =>
      await user_service.activateUser(uid, token),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
