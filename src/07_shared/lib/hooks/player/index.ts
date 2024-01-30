import { player_service } from "@/src/07_shared/api/services";
import { IPlayer } from "@/src/07_shared/models";

import { useMutation, useQuery } from "@tanstack/react-query";
import { userAtom } from "../../store";
import { useAtomValue } from "jotai";
import { toast } from "react-toastify";

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
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (player: IPlayer) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only staff can create players.");
        throw new Error("Unauthorized: Only staff can create players.");
      }
      await player_service.createPlayer(player);
    },
  });
};

export const useUpdatePlayer = () => {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (player: IPlayer) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only staff can create players.");
        throw new Error("Unauthorized: Only staff can create players.");
      }

      await player_service.updatePlayer(player);
    },
  });
};

export const useDeletePlayer = () => {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (player_id: number) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only staff can create players.");
        throw new Error("Unauthorized: Only staff can create players.");
      }
      await player_service.deletePlayer(player_id);
    },
  });
};
