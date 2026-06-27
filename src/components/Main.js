import { capitalizeLetter } from "../utils/helpers";

export default function createMain(state) {
  const main = document.createElement("main");
  main.className = "flex-1 flex flex-col items-center justify-center px-4 ";

  if (state.isLoading) {
    main.textContent = "Loading...";
    return main;
  }

  if (state.errorMessage) {
    main.textContent = state.errorMessage;

    return main;
  }

  const mainHeader = document.createElement("header");
  mainHeader.className = "w-full";

  const mainHeading = document.createElement("h1");
  mainHeading.className = "text-2xl px-4";
  mainHeading.textContent = `Jadwal Sholat: ${capitalizeLetter(state.data.schedules.today.date)} `;

  const mainLeading = document.createElement("p");
  mainLeading.className = "px-4";
  mainLeading.textContent = `${capitalizeLetter(state.data.location.city)}, ${capitalizeLetter(state.data.location.province)}, ${capitalizeLetter(state.data.location.country)}`;

  mainHeader.append(mainHeading, mainLeading);

  const scheduleBoard = document.createElement("div");
  scheduleBoard.className = "w-full";

  const todaySchedules = document.createElement("ul");
  todaySchedules.className = "flex justify-between gap-2";

  state.data.schedules.today.times.forEach((prayer) => {
    const todayList = document.createElement("li");
    todayList.className =
      "flex-1 flex flex-col items-center justify-center text-center p-2";

    const name = document.createElement("span");
    name.textContent = prayer.name;

    const time = document.createElement("span");
    time.textContent = prayer.time;

    todayList.append(name, time);

    todaySchedules.append(todayList);
  });

  scheduleBoard.append(todaySchedules);

  main.append(mainHeader, scheduleBoard);

  return main;
}
