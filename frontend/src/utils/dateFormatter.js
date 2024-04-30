//2024-04-29T23:20:30.067+00:00
export default function getHourMinute(rawDateString) {
  const hourMinute = rawDateString.slice(11, 16);
  return hourMinute;
}
