import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useResetPasswordConfirmUserParams = {
  password: string;
  re_password: string;
};

export const useResetPasswordConfirmUser = ({
  uid,
  token,
}: {
  uid: string;
  token: string;
}) => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({
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
