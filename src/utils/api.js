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
      date: today.tanggal,
      fajr: today.subuh,
      sunrise: today.terbit,
      dhuhr: today.dzuhur,
      asr: today.ashar,
      maghrib: today.maghrib,
      isha: today.isya,
    });

    const monthlySchedules = Object.values(monthlyData.data.jadwal).map((s) =>
      createSchedule({
        date: s.tanggal,
        fajr: s.subuh,
        sunrise: s.terbit,
        dhuhr: s.dzuhur,
        asr: s.ashar,
        maghrib: s.maghrib,
        isha: s.isya,
      }),
    );

    return createVisitorInfo(visitorLocation, todaySchedules, monthlySchedules);
  } catch (err) {
    throw err;
  }
};
