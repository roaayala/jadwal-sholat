export const createLocation = ({ cityId, city, province, country }) => {
  return { cityId, city, province, country };
};

export const createSchedule = ({
  date,
  dawn,
  sunrise,
  noon,
  afternoon,
  dusk,
  evening,
}) => {
  return {
    date,
    times: [
      { id: "dawn", name: "Subuh", time: dawn },
      { id: "sunrise", name: "Terbit", time: sunrise },
      { id: "noon", name: "Zuhur", time: noon },
      { id: "afternoon", name: "Ashar", time: afternoon },
      { id: "dusk", name: "Maghrib", time: dusk },
      { id: "evening", name: "Isya", time: evening },
    ],
  };
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
