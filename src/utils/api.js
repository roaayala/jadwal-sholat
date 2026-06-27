import {
  createLocation,
  createSchedule,
  createVisitorInfo,
} from "../models/Model";
import { getCurrentMonthString } from "./helpers";

export const getVisitorApproximatelyLocation = async () => {
  // output city
  try {
    const url = "https://ipwho.is/";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Can't detect your location automatically");
    }

    const data = await response.json();

    // fallback
    if (!data.success || data.country !== "Indonesia") {
      return "Jakarta";
    }

    return data.city;
  } catch (err) {
    throw err;
  }
};

export const getCityId = async (city) => {
  // output cityId
  try {
    const url = `https://api.myquran.com/v3/sholat/kabkota/cari/${city}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Can't find your location");
    }

    const data = await response.json();

    // set to KOTA JAKARTA
    if (!data.status) {
      return "58a2fc6ed39fd083f55d4182bf88826d";
    }

    return data.data[0].id;
  } catch (err) {
    throw err;
  }
};

export const getSchedules = async (cityId) => {
  // output VisitorInfo object
  try {
    const todayReq = fetch(
      `https://api.myquran.com/v3/sholat/jadwal/${cityId}/today`,
    );

    const monthlyReq = fetch(
      `https://api.myquran.com/v3/sholat/jadwal/${cityId}/${getCurrentMonthString()}`,
    );

    const [todayRes, monthlyRes] = await Promise.all([todayReq, monthlyReq]);

    const [todayData, monthlyData] = await Promise.all([
      todayRes.json(),
      monthlyRes.json(),
    ]);

    const visitorLocation = createLocation({
      cityId: todayData.data.id,
      city: todayData.data.kabko,
      province: todayData.data.prov,
      country: "Indonesia",
    });

    const today = Object.values(todayData.data.jadwal)[0];

    const todaySchedules = createSchedule({
      date: Object.keys(todayData.data.jadwal)[0],
      dawn: today.subuh,
      sunrise: today.terbit,
      noon: today.dzuhur,
      afternoon: today.ashar,
      dusk: today.maghrib,
      evening: today.isya,
    });

    const monthlySchedules = Object.values(monthlyData.data.jadwal).map(
      (s, i) =>
        createSchedule({
          date: Object.keys(monthlyData.data.jadwal)[i],
          dawn: s.subuh,
          sunrise: s.terbit,
          noon: s.dzuhur,
          afternoon: s.ashar,
          dusk: s.maghrib,
          evening: s.isya,
        }),
    );

    const visitorInfo = createVisitorInfo(
      visitorLocation,
      todaySchedules,
      monthlySchedules,
    );

    return visitorInfo;
  } catch (err) {
    throw err;
  }
};
