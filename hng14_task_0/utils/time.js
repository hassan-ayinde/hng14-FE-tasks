export const updateRemainingTime = (dueDate, dueDateElement) => {
  const currentDate = new Date();
  const timeRemaining = dueDate - currentDate;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, timeRemaining };
};

export const formatRemainingTime = (timeData, dueDateElement) => {
  const { days, hours, minutes, seconds, timeRemaining } = timeData;
  if (timeRemaining < 0) {
    dueDateElement.textContent = `overdue by ${Math.abs(days)}d ${Math.abs(hours)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`;
    return;
  } else if (timeRemaining === 0) {
    dueDateElement.textContent = "due now";
  } else {
    dueDateElement.textContent = `due in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
};
