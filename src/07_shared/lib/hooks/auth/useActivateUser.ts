import { user_service } from "@/src/07_shared/api/services";
import { useMutation } from "@tanstack/react-query";

type useActivateUserParams = {
  uid: string;
  token: string;
};

export const useActivateUser = () => {
  return useMutation({
    mutationFn: async ({ uid, token }: useActivateUserParams) =>
      await user_service.activateUser(uid, token),
  });
};
