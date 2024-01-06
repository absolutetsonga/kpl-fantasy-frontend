import { draft_player_service } from "@/src/07_shared/api/services";
import { IDraftPlayer } from "@/src/07_shared/models";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdatePlayer() {
  const query_client = useQueryClient();

  return useMutation({
    mutationFn: async (data: IDraftPlayer) =>
      await draft_player_service.updateDraftPlayer(data),
    onSuccess: () =>
      query_client.invalidateQueries({ queryKey: ["squad", "squad_players"] }),
  });
}
