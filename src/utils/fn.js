
const SECONDS_ON_MINUTE = 60;
const MINUTES_ON_HOUR = 60;
const MONTHS_NAME = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

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

export const getPointDurationInHM = (time) => {
  const duration = calculateDurationInHMS(time);

  if (duration.hours > 0) {
    if (duration.minutes !== `00`) {
      return `${duration.hours}h ${duration.minutes}m`;
    } else {
      return `${duration.hours}h`;
    }
  } else {
    return `${duration.minutes}m`;
  }
};

const calculateDateMonthYear = (dateInUTC) => {
  return {
    date: dateInUTC.slice(8, 10),
    month: dateInUTC.slice(5, 7),
    year: dateInUTC.slice(0, 4),
  };
};

export const getDateInYYYYMMDD = (dateInUTC) => {
  const incomingDate = calculateDateMonthYear(dateInUTC);

  return `${incomingDate.year}-${incomingDate.month}-${incomingDate.date}`;
};

export const getDateInMonthDDYYYY = (dateInUTC) => {
  const incomingDate = calculateDateMonthYear(dateInUTC);

  return `${MONTHS_NAME[Number(incomingDate.month) - 1]} ${incomingDate.date}, ${incomingDate.year}`;
};

export const getRatingScoreWithFloatingPoint = (score) => {
  if (Math.trunc(score) === score && score !== 10) {
    return `${score}.0`;
  } else {
    return score;
  }
};
