import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type useRegisterUserParams = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
};

export const useRegisterUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async ({
      first_name,
      last_name,
      email,
      password,
      re_password,
    }: useRegisterUserParams) =>
      await user_service.createUser(
        first_name,
        last_name,
        email,
        password,
        re_password
      ),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
