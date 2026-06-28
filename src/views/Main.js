import { capitalizeLetter } from "../utils/helpers";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import createSearchBar from "./components/SearchBar";

export default function createMain(state) {
  const main = document.createElement("main");
  main.className =
    "flex-1 flex flex-col items-center justify-center gap-4 px-4 ";

  if (state.isLoading) {
    main.textContent = "Loading...";
    return main;
  }

  if (state.errorMessage) {
    main.textContent = state.errorMessage;

    return main;
  }

  const searchBar = createSearchBar();

  const mainHeader = document.createElement("header");
  mainHeader.className = "w-full";

  const mainHeading = document.createElement("h1");
  mainHeading.className = "text-2xl";
  mainHeading.textContent = `Jadwal Sholat: ${format(parseISO(state.data.schedules.today.date), "EEEE, dd MMMM yyyy", { locale: id })}`;

  const mainLeading = document.createElement("p");
  mainLeading.className = "";
  mainLeading.textContent = `${capitalizeLetter(state.data.location.city)}, ${capitalizeLetter(state.data.location.province)}, ${capitalizeLetter(state.data.location.country)}`;

  mainHeader.append(mainHeading, mainLeading);

  const scheduleBoard = document.createElement("div");
  scheduleBoard.className = "w-full";

  const todaySchedules = document.createElement("ul");
  todaySchedules.className = "flex flex-col gap-2";

  state.data.schedules.today.times.forEach((prayer) => {
    const todayList = document.createElement("li");
    todayList.className =
      "flex flex-row justify-between border border-black border-solid rounded-lg px-4 py-2 font-bold";

    const name = document.createElement("span");
    name.textContent = prayer.name;

    const time = document.createElement("span");
    time.textContent = prayer.time;

    todayList.append(name, time);

    todaySchedules.append(todayList);
  });

  scheduleBoard.append(todaySchedules);

  main.append(searchBar, mainHeader, scheduleBoard);

  return main;
}
