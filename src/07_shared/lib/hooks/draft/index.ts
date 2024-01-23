import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { draft_service } from "@/src/07_shared/api/services";

export function useCreateDraft() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: number) => await draft_service.createDraft(user),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["draft"] }),
  });
}

export function useGetDraft(id: number) {
  return useQuery({
    queryFn: async () => await draft_service.getDraft(id),
    queryKey: ["draft"],
  });
}
