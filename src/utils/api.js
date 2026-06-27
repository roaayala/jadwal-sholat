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

export const getSchedule = async (cityId) => {
  // output VisitorInfo object
};

getVisitorApproximatelyLocation()
  .then((crudeLocation) => getCityId(crudeLocation))
  .then((city) => console.log(city));
