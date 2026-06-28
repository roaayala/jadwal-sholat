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
};

const UI = createUI({
  state,
  onSearchFn: async (e) => {
    const keyword = e.target.value.trim();

    if (!keyword) return;

    try {
      const searchResult = await searchCities(keyword);
      console.log(searchResult);
    } catch (err) {
    } finally {
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
