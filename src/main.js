import "./style.css";
import {
  getCityId,
  getSchedules,
  getVisitorApproximatelyLocation,
} from "./utils/api";
import createUI from "./components/UI";

const state = {
  isLoading: true,
  data: null,
  errorMessage: null,
};

const UI = createUI(state);

const init = async () => {
  UI.render();

  try {
    const crudeLocation = await getVisitorApproximatelyLocation();
    const cityId = await getCityId(crudeLocation);
    const visitorInfo = await getSchedules(cityId);

    state.data = visitorInfo;
    state.isLoading = false;
  } catch (err) {
    console.error(err);
    state.errorMessage = err.message;
    state.isLoading = false;
  } finally {
    UI.render();
  }
};

init();
