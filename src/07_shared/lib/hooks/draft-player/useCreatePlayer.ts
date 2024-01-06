import { useMutation, useQueryClient } from "@tanstack/react-query";
import { draft_player_service } from "@/src/07_shared/api/services";
import { IDraftPlayer } from "@/src/07_shared/models";

export function useCreatePlayer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IDraftPlayer) =>
      await draft_player_service.createDraftPlayer(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["draft"] }),
  });
}
