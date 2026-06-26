import "./style.css";
import van from "vanjs-core";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

const { main } = van.tags;

const App = () => {
  return [Header(), Main(), Footer()];
};

van.add(document.getElementById("app"), App());
