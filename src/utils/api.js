export const getVisitorApproximatelyLocation = async () => {
  // ouput city and country
  try {
    const url = "https://ipwho.is/";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Kabupaten atau kota ngga ketemu nih " + response.status);
    }

    const data = await response.json();

    return data;
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
