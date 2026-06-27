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

  const scheduleBoard = document.createElement("div");

  const todaySchedules = document.createElement("ul");

  state.data.schedules.today.times.forEach((prayer) => {
    const todayList = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = prayer.name;

    const time = document.createElement("span");
    time.textContent = prayer.time;

    todayList.append(name, time);

    todaySchedules.append(todayList);
  });

  scheduleBoard.append(todaySchedules);

  main.append(mainHeading, mainLeading, scheduleBoard);

  return main;
}
