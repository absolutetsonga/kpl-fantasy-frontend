import { useEffect } from "react";
import { useGetGameWeeks } from "@/src/07_shared/lib/hooks/game-week";

import { useAtom } from "jotai";
import {
  gameWeekAtom,
  gameWeekStatusAtom,
  gameWeeksAtom,
} from "@/src/07_shared/lib/store";

import { getGameWeekStatus, findGameWeek } from "../lib/utils";

export const GameWeekInfo = () => {
  const { data: gameWeeksData } = useGetGameWeeks();

  const [gameWeeks, setGameWeeks] = useAtom(gameWeeksAtom);
  const [gameWeek, setGameWeek] = useAtom(gameWeekAtom);
  const [gameWeekStatus, setGameWeekStatus] = useAtom(gameWeekStatusAtom);

  useEffect(() => {
    if (gameWeeksData) {
      const time = new Date().getTime();

      const gameWeekData = findGameWeek(gameWeeksData, time);

      const gameWeekStatus = getGameWeekStatus(
        gameWeekData?.start_date,
        gameWeekData?.end_date,
        time
      );

      setGameWeeks(gameWeeksData);
      setGameWeek(gameWeekData);
      setGameWeekStatus(gameWeekStatus);
    }
  }, [gameWeeksData, setGameWeeks, setGameWeekStatus, setGameWeek]);

  return (
    <section className="flex w-full items-center justify-center flex-col rounded-xl bg-field-gradient px-6 py-4">
      <div className="w-full max-w-[860px] h-[80px] px-2 bg-white bg-opacity-60 rounded-md shadow flex justify-start items-start">
        <div className="flex flex-col w-full h-full pb-2 justify-between items-center">
          <div className="self-stretch px-4 py-1 bg-fuchsia-950 rounded-bl-md rounded-br-md">
            <div className="text-center text-emerald-400 text-md md:text-lg lg:text-xl font-normal">
              {gameWeeks[0] && (
                <h3>
                  Game Week {gameWeek?.number}: {gameWeekStatus.process}
                </h3>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-fuchsia-950 text-xs sm:text-sm md:text-lg lg:text-xl font-normal">
              Game Week {gameWeek?.number} {gameWeekStatus.status}:{" "}
              {gameWeekStatus.time}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
