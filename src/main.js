import "./style.css";
import {
  getCityId,
  getSchedules,
  getVisitorApproximatelyLocation,
  searchCities,
} from "./utils/api";
import createUI from "./views/UI";

const state = {
  isLoading: true,
  data: null,
  errorMessage: null,
  suggestions: null,
};

const UI = createUI({
  state,
  onSearchInput: async (keyword) => {
    if (!keyword) {
      state.suggestions = null;
      UI.render();
      return;
    }

    const cities = await searchCities(keyword);
    state.suggestions = cities;
    UI.render();
  },

  onSelectCity: async (cityId) => {
    state.suggestions = [];
    state.isLoading = true;
    UI.render();

    try {
      const visitorInfo = await getSchedules(cityId);
      state.data = visitorInfo;
    } catch (err) {
      state.errorMessage = err.message;
    } finally {
      state.isLoading = false;
      state.suggestions = null;
      UI.render();
    }
  },
});

const init = async () => {
  UI.render();

  try {
    const crudeLocation = await getVisitorApproximatelyLocation();

    const cityId = await getCityId(crudeLocation);

    const visitorInfo = await getSchedules(cityId);

    state.data = visitorInfo;
    state.isLoading = false;
  } catch (err) {
    state.errorMessage = err.message;
    state.isLoading = false;
  } finally {
    UI.render();
  }
};

init();
