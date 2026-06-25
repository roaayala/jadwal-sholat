import "./style.css";
import van from "vanjs-core";
import { getUserApproximatelyLocation } from "./utils/api";

const { h1 } = van.tags;

const App = () => {
  const userLocation = van.state({});

  getUserApproximatelyLocation()
    .then((user) => {
      userLocation.val = user;
    })
    .catch((error) => {
      userLocation.val = error;
    });

  return h1(
    {
      class: "font-bold",
    },
    "Hello",
  );
};

van.add(document.getElementById("app"), App());
