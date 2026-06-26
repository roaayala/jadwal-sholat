import "./style.css";
import { getCity } from "./utils/api";

const app = document.getElementById("app");

getCity().then((data) => console.log(data));
