import { player_service } from "@/src/07_shared/api/services";
import { IPlayer } from "@/src/07_shared/models";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetPlayers = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => await player_service.getPlayers(),
  });
};

export const useUpdatePlayer = () => {
  return useMutation({
    mutationFn: async ({
      player_id,
      sofascore_id,
    }: {
      player_id: number;
      sofascore_id: number;
    }) => await player_service.updatePlayer(sofascore_id, player_id),
  });
};
