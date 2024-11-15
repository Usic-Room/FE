export function calculateRunningTime(runningTime: number) {
  const minutes = Math.floor(runningTime / 60);
  const seconds = runningTime % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function caclulateDate(date: Date) {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const dateString = year + " / " + month + " / " + day;
  return dateString;
}
