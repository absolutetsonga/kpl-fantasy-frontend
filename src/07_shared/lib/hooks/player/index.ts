import { player_service } from "@/src/07_shared/api/services";
import { IPlayer, IPlayerTransfermarkt } from "@/src/07_shared/models";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetPlayers = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => await player_service.getPlayers(),
  });
};

export const useGetPlayer = (id: number) => {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => await player_service.getPlayer(id),
  });
};

export const useCreatePlayer = () => {
  return useMutation({
    mutationFn: async (player: IPlayer) =>
      await player_service.createPlayer(player),
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
