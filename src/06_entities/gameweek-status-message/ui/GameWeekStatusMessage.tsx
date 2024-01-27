import { gameWeekStatusAtom } from "@/src/07_shared/lib/store";
import { useAtomValue } from "jotai";
import cn from "classnames";

export const GameWeekStatusMessage = () => {
  const gameWeekStatus = useAtomValue(gameWeekStatusAtom);

  const className = cn("text-md font-semibold", {
    "text-red-600": gameWeekStatus.status === "Start",
    "text-green-500": gameWeekStatus.status === "End",
    "text-yellow-700": gameWeekStatus.status === "Database Update",
  });

  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className={className}>{gameWeekStatus.message}</div>
    </div>
  );
};
