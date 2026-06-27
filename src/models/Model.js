export const createLocation = ({ cityId, city, province, country }) => {
  return { cityId, city, province, country };
};

export const createSchedule = ({
  date,
  fajr,
  sunrise,
  dhuhr,
  asr,
  maghrib,
  isha,
}) => {
  return { date, fajr, sunrise, dhuhr, maghrib, asr, isha };
};

export const createVisitorInfo = (locData, todayData, monthlyData) => {
  return {
    location: createLocation(locData),
    schedules: {
      today: todayData,
      monthly: monthlyData,
    },
  };
};
