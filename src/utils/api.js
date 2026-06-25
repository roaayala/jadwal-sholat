const url = "https://api.ip2location.io/";

const getCity = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cant get visitor location " + response.status);
    }

    const data = await response.json();

    return data.city_name;
  } catch (err) {
    throw err;
  }
};
