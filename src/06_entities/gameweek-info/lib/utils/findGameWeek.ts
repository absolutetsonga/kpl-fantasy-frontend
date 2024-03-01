import { IGameWeekRes } from "@/src/07_shared/models";

export const findGameWeek = (
  gameWeeks: IGameWeekRes[],
  currentTime: number
) => {
  for (let i = 0; i < gameWeeks.length; i++) {
    const start = new Date(gameWeeks[i].start_date).getTime();
    const end = new Date(gameWeeks[i].end_date).getTime();

    if (currentTime < start) {
      return i === 0 ? gameWeeks[0] : gameWeeks[i - 1];
    } else if (currentTime >= start && currentTime <= end) {
      return gameWeeks[i];
    } else if (currentTime > end) {
      if (gameWeeks[i].updated) {
        return gameWeeks[i + 1];
      }

      return gameWeeks[i];
    }
  }

  return gameWeeks[gameWeeks.length - 1];
};
