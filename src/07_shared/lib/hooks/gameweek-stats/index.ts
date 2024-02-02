import { useMutation } from "@tanstack/react-query";

import { gameweek_stats_service } from "@/src/07_shared/api/services";
import { IGameWeekStats } from "@/src/07_shared/models";

import { useAtomValue } from "jotai";
import { userAtom } from "../../store";

import { toast } from "react-toastify";

export function useCreateGameWeekStats() {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (gameweek_stats: IGameWeekStats) => {
      if (!user?.is_staff) {
        toast.error(
          "Unauthorized: Only admins can create game week statistics of the user."
        );
        throw new Error(
          "Unauthorized: Only admins can create game week statistics of the user."
        );
      }

      await gameweek_stats_service.createGameWeekStat(gameweek_stats);
    },
  });
}
