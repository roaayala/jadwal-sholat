export const getCity = async () => {
  try {
    const url = "http://ip-api.com/json/";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Kabupaten atau kota ngga ketemu nih " + response.status);
    }

    const data = await response.json();

    return data.city;
  } catch (err) {
    throw err;
  }
};

export const getCityId = async (city) => {
  try {
    const url = `https://api.myquran.com/v3/sholat/kabkota/cari/${city}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        "Id dari kabupaten atau kota ga ada nih " + response.status,
      );
    }

    const data = await response.json();

    return data.data[0].id;
  } catch (err) {
    throw err;
  }
};

export const getTodaySchedule = async (cityId) => {
  try {
    const url = `https://api.myquran.com/v3/sholat/jadwal/${cityId}/today`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Jadwal ga ketemu nih " + response.status);
    }

    const data = await response.json();

    return data.data;
  } catch (err) {
    throw err;
  }
};

getCity()
  .then((city) => getCityId(city))
  .then((cityId) => getTodaySchedule(cityId))
  .then((data) => console.log(data));
