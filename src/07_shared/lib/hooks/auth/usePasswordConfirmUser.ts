import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useResetPasswordConfirmUserParams = {
  uid: string;
  token: string;
  password: string;
  re_password: string;
};

export const useResetPasswordConfirmUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({
      uid,
      token,
      password,
      re_password,
    }: useResetPasswordConfirmUserParams) =>
      await user_service.resetPasswordConfirmUser(
        uid,
        token,
        password,
        re_password
      ),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
