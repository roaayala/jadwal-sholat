import { createVisitorLocation } from "../models/Visitor.js";

const getCity = async () => {
  try {
    const url = "https://api.ip2location.io/";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cant get visitor location " + response.status);
    }

    const data = await response.json();

    return {
      city: data.city_name,
      province: data.region_name,
      country: data.country_name,
    };
  } catch (err) {
    throw err;
  }
};

const getCityId = async (location) => {
  try {
    const url = `https://api.myquran.com/v3/sholat/kabkota/cari/${location.city}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ngga tau lokasinya dimana " + response.status);
    }

    const data = await response.json();

    const visitorLocation = createVisitorLocation({
      cityId: data.data[0].id,
      ...location,
    });

    return visitorLocation;
  } catch (err) {
    throw err;
  }
};

getCity()
  .then((data) => {
    return getCityId(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
