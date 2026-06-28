import createFooter from "./Footer";
import createMain from "./Main";

export default function createUI({ state, onSearchInput }) {
  const app = document.getElementById("app");
  app.className = "flex flex-col min-h-screen";

  const render = () => {
    app.innerHTML = "";

    const main = createMain({
      state,
      onSearchInput: (e) => {
        onSearchInput(e);
      },
    });

    const footer = createFooter();

    app.append(main, footer);
  };

  return { render };
}
