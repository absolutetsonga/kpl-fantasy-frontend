export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const dayOfWeek = weekdays[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${dayOfWeek} ${dayOfMonth} ${month} ${formattedHours}:${formattedMinutes}`;
};
