import createFooter from "./Footer";
import createMain from "./Main";

export default function createUI({
  state,
  onSearchInput,
  onSelectCity,
  onDissmissSearch,
}) {
  const app = document.getElementById("app");
  app.className = "flex flex-col min-h-screen";

  const render = () => {
    app.innerHTML = "";

    const main = createMain({
      state,
      onSearchInput: (keyword) => {
        onSearchInput(keyword);
      },
      onSelectCity: (cityId) => {
        onSelectCity(cityId);
      },
    });

    const footer = createFooter();

    app.append(main, footer);
  };

  document.addEventListener("click", (e) => {
    if (state.suggestions !== null) {
      if (!e.target.closest("#search-container")) {
        console.log("click");
        onDissmissSearch();
      }
    }
  });

  return { render };
}
