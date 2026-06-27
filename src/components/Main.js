import { capitalizeLetter } from "../utils/helpers";

export default function createMain(state) {
  const main = document.createElement("main");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = `Jadwal Sholat di ${capitalizeLetter(state.data.location.city)}, ${capitalizeLetter(state.data.location.country)}.`;

  main.append(mainTitle);

  return main;
}
