export const getGameWeekStatus = (
  startDateString: string,
  endDateString: string,
  currentDateString: string
): string => {
  const startDate = new Date(startDateString).getTime();
  const endDate = new Date(endDateString).getTime();
  const currentTime = new Date(currentDateString).getTime();

  if (currentTime < startDate) {
    return "Not started yet";
  } else if (currentTime >= startDate && currentTime <= endDate) {
    return "In the process";
  } else {
    return "Ended, updating database...";
  }
};
