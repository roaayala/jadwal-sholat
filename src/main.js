import "./style.css";
import van from "vanjs-core";

const { h1 } = van.tags;

const App = () => {
  return h1({ class: "font-bold" }, "Hello");
};

van.add(document.getElementById("app"), App());
