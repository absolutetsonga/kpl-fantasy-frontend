import { useMutation, useQuery } from "@tanstack/react-query";

import { game_week_service } from "@/src/07_shared/api/services/game_week";
import { IGameWeekCreateReq } from "@/src/07_shared/models/game_week";
import { useAtomValue } from "jotai";
import { userAtom } from "../../store";
import { toast } from "react-toastify";

export function useGetGameWeeks() {
  return useQuery({
    queryFn: async () => await game_week_service.getGameWeeks(),
    queryKey: ["draft"],
  });
}

export function useGetGameWeek(game_week_id: number) {
  return useQuery({
    queryFn: async () => await game_week_service.getGameWeek(game_week_id),
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

      await game_week_service.createGameWeek(game_week);
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

      await game_week_service.deleteGameWeek(game_week_id);
    },
  });
}
