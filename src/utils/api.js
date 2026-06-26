import { createVisitorLocation } from "../models/Visitor.js";

export const getCity = async () => {
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
