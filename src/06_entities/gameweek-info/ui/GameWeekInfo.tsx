import { useEffect } from "react";
import { useGetGameWeeks } from "@/src/07_shared/lib/hooks/game-week";

import { useAtom } from "jotai";
import {
  gameWeekAtom,
  gameWeekStartAtom,
  gameWeekStatusAtom,
  gameWeeksAtom,
} from "@/src/07_shared/lib/store";

import { getGameWeekStatus } from "../lib/utils";
import { findGameWeek } from "../lib/utils/findGameWeek";
import { formatDate } from "../lib/utils/formatDate";

export const GameWeekInfo = () => {
  const { data: gameWeeksData } = useGetGameWeeks();

  const [gameWeeks, setGameWeeks] = useAtom(gameWeeksAtom);
  const [gameWeek, setGameWeek] = useAtom(gameWeekAtom);
  const [gameWeekStatus, setGameWeekStatus] = useAtom(gameWeekStatusAtom);
  const [gameWeekStart, setGameWeekStart] = useAtom(gameWeekStartAtom);

  useEffect(() => {
    if (gameWeeksData) {
      const time = new Date();
      const currentIsoString = time.toISOString();

      const gameWeekData = findGameWeek(gameWeeksData);
      const gameWeekStartData = formatDate(gameWeekData.start_date);

      const gameWeekStatus = getGameWeekStatus(
        gameWeekData?.start_date,
        gameWeekData?.end_date,
        currentIsoString
      );

      setGameWeeks(gameWeeksData);
      setGameWeek(gameWeekData);
      setGameWeekStart(gameWeekStartData);
      setGameWeekStatus(gameWeekStatus);
    }
  }, [
    gameWeeksData,
    setGameWeeks,
    setGameWeekStatus,
    setGameWeek,
    setGameWeekStart,
  ]);

  return (
    <section className="flex w-full items-center justify-center flex-col rounded-xl bg-field-gradient px-6 py-4">
      <div className="w-full max-w-[860px] h-[80px] px-2 bg-white bg-opacity-60 rounded-md shadow flex justify-start items-start">
        <div className="flex flex-col w-full h-full pb-2 justify-between items-center">
          <div className="self-stretch px-4 py-1 bg-fuchsia-950 rounded-bl-md rounded-br-md">
            <div className="text-center text-emerald-400 text-md md:text-lg lg:text-xl font-normal">
              {gameWeeks[0] && (
                <h3>
                  Game Week {gameWeek?.id}: {gameWeekStatus}
                </h3>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-fuchsia-950 text-xs sm:text-sm md:text-lg lg:text-xl font-normal">
              Game Week {gameWeek?.id} Start: {gameWeekStart}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
