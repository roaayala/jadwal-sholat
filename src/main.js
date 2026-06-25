import "./style.css";
import van from "vanjs-core";
import { getCityId, getUserApproximatelyLocation } from "./utils/api";

const { h1 } = van.tags;

const App = () => {
  const userLocation = van.state({});
  const cityId = van.state("");
  const schedule = van.state([]);

  const getVisitorInfo = async () => {
    try {
      const user = await getUserApproximatelyLocation();
      userLocation.val = user;

      const id = await getCityId(user.city);
      cityId.val = id;

      fetch(
        `https://api.myquran.com/v3/sholat/jadwal/${cityId.val}/today?tz=Asia%2FJakarta`,
      )
        .then((data) => data.json())
        .then((data) => console.log(data.data.jadwal));
    } catch (error) {
      console.log(error);
      cityId.val = "Kabupaten/Kota ga ketemu nih";
    }
  };

  getVisitorInfo();

  return h1({ class: "font-bold" }, () => cityId.val);
};

van.add(document.getElementById("app"), App());
