import { useMutation, useQuery } from "@tanstack/react-query";

import { gameweek_service } from "@/src/07_shared/api/services";
import { IGameWeekCreateReq } from "@/src/07_shared/models";

import { useAtomValue } from "jotai";
import { userAtom } from "../../store";

import { toast } from "react-toastify";

export function useGetGameWeeks() {
  return useQuery({
    queryFn: async () => await gameweek_service.getGameWeeks(),
    queryKey: ["draft"],
  });
}

export function useGetGameWeek(game_week_id: number) {
  return useQuery({
    queryFn: async () => await gameweek_service.getGameWeek(game_week_id),
    queryKey: ["draft", game_week_id],
  });
}

export function useCreateGameWeek() {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (game_week: IGameWeekCreateReq) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await gameweek_service.createGameWeek(game_week);
    },
  });
}

export function useDeleteGameWeek() {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (game_week_id: number) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await gameweek_service.deleteGameWeek(game_week_id);
    },
  });
}
