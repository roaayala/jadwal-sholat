export const getVisitorApproximatelyLocation = async () => {
  // ouput city and country
  try {
    const url = "https://ipwho.is/";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Can't detect your location automatically");
    }

    const data = await response.json();

    // fallback
    if (!data.success || data.country !== "Indonesia") {
      return { city: "Jakarta", country: "Indonesia" };
    }

    return { city: data.city, country: data.country };
  } catch (err) {
    throw err;
  }
};

getVisitorApproximatelyLocation().then((data) => console.log(data));

export const getVisitorLocation = async (city) => {
  // output Location object
};

export const getSchedule = async (locationObject) => {
  // output VisitorInfo object
};
