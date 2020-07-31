import {MINUTES_ON_HOUR, SECONDS_ON_MINUTE} from "../utils/const.js";


const castDateTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const calculateDurationInHMS = (duration) => {

  const hoursCount = Math.trunc(duration / MINUTES_ON_HOUR / SECONDS_ON_MINUTE);
  duration -= hoursCount * MINUTES_ON_HOUR * SECONDS_ON_MINUTE;
  const minutesCount = Math.trunc(duration / SECONDS_ON_MINUTE);
  duration -= minutesCount * SECONDS_ON_MINUTE;
  const secondsCount = duration;

  return {
    hours: hoursCount,
    minutes: castDateTimeFormat(minutesCount),
    seconds: castDateTimeFormat(secondsCount),
  };
};
