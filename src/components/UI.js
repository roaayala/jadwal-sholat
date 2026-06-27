import createFooter from "./Footer";
import createMain from "./Main";

export default function createUI(state) {
  const app = document.getElementById("app");

  const render = () => {
    if (state.isLoading) {
      console.log("Loading...");
      return;
    }

    if (state.errorMessage) {
      console.log(state.errorMessage);
      return;
    }

    if (state.data) {
      console.log(state.data);
    }

    const main = createMain(state);

    const footer = createFooter();

    app.append(main, footer);
  };

  return { render };
}
