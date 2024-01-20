import { user_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useResetPasswordUser = () => {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async (email: string) =>
      await user_service.resetPasswordUser(email),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["users"] }),
  });
};
