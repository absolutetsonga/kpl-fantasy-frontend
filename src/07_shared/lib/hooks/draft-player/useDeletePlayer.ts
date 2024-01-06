import { draft_player_service } from "@/src/07_shared/api/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePlayer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (draftPlayerId: number) =>
      await draft_player_service.deleteDraftPlayer(draftPlayerId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["squad", "squad_players"] });
    },
  });
}
