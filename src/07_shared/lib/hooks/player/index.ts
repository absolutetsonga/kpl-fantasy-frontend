import { player_service } from "@/src/07_shared/api/services";
import { IPlayer } from "@/src/07_shared/models";

import { useMutation, useQuery } from "@tanstack/react-query";
import { userAtom } from "../../store";
import { useAtomValue } from "jotai";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface ApiErrorResponse {
  detail: string;
}

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

  return useMutation<any, AxiosError, any>({
    mutationFn: async (player: IPlayer) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }
      await player_service.createPlayer(player);
    },
    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
};

export const useUpdatePlayer = () => {
  const user = useAtomValue(userAtom);

  return useMutation<any, AxiosError, any>({
    mutationFn: async (player: IPlayer) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await player_service.updatePlayer(player);
    },
    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
};

export const useDeletePlayer = () => {
  const user = useAtomValue(userAtom);

  return useMutation<any, AxiosError, any>({
    mutationFn: async (player_id: number) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }
      await player_service.deletePlayer(player_id);
    },

    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
};
