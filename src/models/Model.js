export const createLocation = ({ cityId, city, province, country }) => {
  return { cityId, city, province, country };
};

export const createSchedule = ({
  date,
  fajr,
  sunrise,
  dhuhr,
  maghrib,
  isha,
}) => {
  return { date, fajr, sunrise, dhuhr, maghrib, isha };
};

export const createMonthlySchedule = (arr) => {
  if (!Array.isArray(arr)) return [];

  return arr.map((day) => createSchedule(day));
};

export const createVisitorInfo = (locData, todayData, monthlyData) => {
  const today = createSchedule(todayData);
  const monthly = createMonthlySchedule(monthlyData);

  return {
    location: createLocation(locData),
    schedules: {
      today,
      monthly,
    },
  };
};
