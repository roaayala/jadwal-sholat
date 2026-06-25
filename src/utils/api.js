import createUser from "../models/User";

export const getUserApproximatelyLocation = async () => {
  try {
    // const url = "https://ipapi.co/json/";
    // const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const data = await response.json();

    const data = {
      city: "Samarinda",
      region: "East Kalimantan",
      country_name: "Indonesia",
    };

    const userLocation = createUser({
      city: data.city,
      province: data.region,
      country: data.country_name,
    });

    return userLocation;
  } catch (error) {
    throw error;
  }
};
