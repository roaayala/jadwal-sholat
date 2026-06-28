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

    if (keyword === "indonesia") keyword = "Jakarta";

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

      localStorage.setItem("saved_city_id", cityId);
    } catch (err) {
      state.errorMessage = err.message;
    } finally {
      state.isLoading = false;
      state.suggestions = null;
      UI.render();
    }
  },

  onDissmissSearch: () => {
    state.suggestions = null;
    UI.render();
  },
});

const init = async () => {
  UI.render();

  try {
    const savedCityId = localStorage.getItem("saved_city_id");
    let targetCityId;

    if (savedCityId) {
      targetCityId = savedCityId;
    } else {
      const crudeLocation = await getVisitorApproximatelyLocation();
      targetCityId = await getCityId(crudeLocation);
    }

    const visitorInfo = await getSchedules(targetCityId);

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
