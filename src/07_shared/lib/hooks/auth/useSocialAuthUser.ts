import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useSocialAuthUserParams = {
  provider: string;
  state: string;
  code: string;
};

export const useSociaAuthUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({ provider, state, code }: useSocialAuthUserParams) =>
      await user_service.socialAuthenticateUser(provider, state, code),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
