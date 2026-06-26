const createLocation = ({ cityId, city, province }) => {
  return { cityId, city, province };
};

const createSchedule = ({ date, fajr, sunrise, dhuhr, maghrib, isha }) => {
  return { date, fajr, sunrise, dhuhr, maghrib, isha };
};

const createMonthlySchedule = (arr) => {
  if (!Array.isArray(arr)) return [];

  return arr.map((day) => createSchedule(day));
};

const createVisitorInfo = (locData, todayData, monthlyData) => {
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
