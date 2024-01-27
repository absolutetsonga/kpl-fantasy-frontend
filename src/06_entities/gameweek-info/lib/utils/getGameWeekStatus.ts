import { IGameWeekStatus } from "@/src/07_shared/models";
import { formatDate } from "./formatDate";

export const getGameWeekStatus = (
  startDateString: string,
  endDateString: string,
  currentTime: number
): IGameWeekStatus => {
  const gameWeekStart = formatDate(startDateString);
  const gameWeekEnd = formatDate(endDateString);

  const startDate = new Date(startDateString).getTime();
  const endDate = new Date(endDateString).getTime();

  if (currentTime < startDate) {
    return {
      status: "Start",
      process: "Not started yet",
      message: `Complete all changes until: ${gameWeekStart}`,
      time: gameWeekStart,
    };
  } else if (currentTime >= startDate && currentTime <= endDate) {
    return {
      status: "End",
      process: "In the process",
      message: `You can not make any changes until: ${gameWeekEnd}`,
      time: gameWeekStart,
    };
  } else {
    return {
      status: "Database Update",
      process: "Ended, updating database...",
      message: "Please wait until we update our database...",
      time: "",
    };
  }
};
