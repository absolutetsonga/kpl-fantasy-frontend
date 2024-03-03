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
          "Неавторизованный: Только администраторы могут создавать статистику игрока за игровую неделю."
        );
        throw new Error(
          "Неавторизованный: Только администраторы могут создавать статистику игрока за игровую неделю."
        );
      }

      await gameweek_stats_service.createGameWeekStat(gameweek_stats);
    },
  });
}
