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
      status: "Старт",
      process: "Тур еще не начался",
      message: `Завершите все изменения состава до: ${gameWeekStart}`,
      time: gameWeekStart,
    };
  } else if (currentTime >= startDate && currentTime <= endDate) {
    return {
      status: "Конец",
      process: "Тур разыгрывается...",
      message: `Вы не можете изменять свой состав до: ${gameWeekEnd}`,
      time: gameWeekStart,
    };
  } else {
    return {
      status: "Обновляем статистику игроков",
      process:
        "Тур закончился, обновляем статистику игроков...",
      message: "Пожалуйста подождите пока мы обновим статистику игроков...",
      time: "",
    };
  }
};
