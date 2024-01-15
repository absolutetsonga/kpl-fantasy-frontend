import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useGoogleUserParams = {
  state: string;
  code: string;
};

export const useGoogleUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({ state, code }: useGoogleUserParams) =>
      await user_service.googleUser(state, code),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
