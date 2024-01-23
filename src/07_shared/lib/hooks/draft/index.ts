import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { draft_service } from "@/src/07_shared/api/services";

export function useGetDraft(user_id: number) {
  return useQuery({
    queryFn: async () => await draft_service.getDraft(user_id),
    queryKey: ["draft", user_id],
  });
}

export function useCreateDraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: number) => await draft_service.createDraft(user),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["draft"] }),
  });
}
