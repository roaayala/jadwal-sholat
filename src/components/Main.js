import { capitalizeLetter } from "../utils/helpers";

export default function createMain(state) {
  const main = document.createElement("main");

  if (state.isLoading) {
    main.textContent = "Loading...";
    return main;
  }

  if (state.errorMessage) {
    main.textContent = state.errorMessage;
    return main;
  }

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = `Jadwal Sholat: ${capitalizeLetter(state.data.schedules.today.date)} `;

  const mainLeading = document.createElement("p");
  mainLeading.className = "block";
  mainLeading.textContent = `${capitalizeLetter(state.data.location.city)}, ${capitalizeLetter(state.data.location.province)}, ${capitalizeLetter(state.data.location.country)}`;

  console.log(state.data);

  const scheduleBoard = document.createElement("div");

  const todaySchedules = document.createElement("ul");
  const todayList = document.createElement("li");
  todayList.textContent = `Subuh ${state.data.schedules.today.fajr}`;

  todaySchedules.append(todayList);
  scheduleBoard.append(todaySchedules);

  main.append(mainHeading, mainLeading, scheduleBoard);

  return main;
}
