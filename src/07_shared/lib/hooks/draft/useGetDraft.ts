import { draft_service } from "@/src/07_shared/api/services";
import { useQuery } from "@tanstack/react-query";

export function useGetDraft(id: number) {
  return useQuery({
    queryFn: async () => await draft_service.getDraft(id),
    queryKey: ["draft", { id }],
  });
}