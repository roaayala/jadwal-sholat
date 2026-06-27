import createFooter from "./Footer";
import createMain from "./Main";

export default function createUI(state) {
  const app = document.getElementById("app");

  const render = () => {
    app.innerHTML = "";

    // const main = createMain(state);

    // const footer = createFooter();

    // app.append(main, footer);
  };

  return { render };
}
