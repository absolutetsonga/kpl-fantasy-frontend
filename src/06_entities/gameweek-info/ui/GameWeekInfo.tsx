import { useEffect } from "react";
import { useGetGameWeeks } from "@/src/07_shared/lib/hooks/game-week";

import { useAtom, useSetAtom } from "jotai";
import { gameWeekStatusAtom, gameWeeksAtom } from "@/src/07_shared/lib/store";

import { getGameWeekStatus } from "../lib/utils";

export const GameWeekInfo = () => {
  const { data: gameWeekData } = useGetGameWeeks();

  const [gameWeeks, setGameWeeks] = useAtom(gameWeeksAtom);
  const [gameWeekStatus, setGameWeekStatus] = useAtom(gameWeekStatusAtom);

  useEffect(() => {
    if (gameWeekData) {
      const time = new Date();
      const currentIsoString = time.toISOString();

      const gameWeekStatus = getGameWeekStatus(
        gameWeekData[0]?.start_date,
        gameWeekData[0]?.end_date,
        currentIsoString
      );

      setGameWeeks(gameWeekData);
      setGameWeekStatus(gameWeekStatus);
    }
  }, [gameWeekData, setGameWeeks, setGameWeekStatus]);

  return (
    <section className="flex w-full items-center justify-center flex-col rounded-xl bg-field-gradient px-6 py-4">
      <div className="w-full max-w-[860px] h-[80px] px-2 bg-white bg-opacity-60 rounded-md shadow flex justify-start items-start">
        <div className="flex flex-col w-full h-full pb-2 justify-between items-center">
          <div className="self-stretch px-4 py-1 bg-fuchsia-950 rounded-bl-md rounded-br-md">
            <div className="text-center text-emerald-400 text-md md:text-lg lg:text-xl font-normal">
              {gameWeeks[0] && (
                <h3>
                  Game Week {gameWeeks[0].id}: {gameWeekStatus}
                </h3>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-fuchsia-950 text-xs sm:text-sm md:text-lg lg:text-xl font-normal">
              Gameweek 21: Sat 13 Jan 17:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
