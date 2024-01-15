import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useLoginUserParams = {
  email: string;
  password: string;
};

export const useLoginUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: useLoginUserParams) =>
      await user_service.loginUser(email, password),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
