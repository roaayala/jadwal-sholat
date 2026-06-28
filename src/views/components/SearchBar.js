import { capitalizeLetter } from "../../utils/helpers";
import createButton from "./Button";
import createTextInput from "./TextInput";

export default function createSearchBar({ state, onSearchInput }) {
  const searchBar = document.createElement("div");
  searchBar.className = "w-full ";

  const searchInputGroup = document.createElement("div");

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className: "",
    value: "",
    onSearchInput: (e) => {
      onSearchInput(e);
    },
  });

  const searchButton = createButton({
    text: "Search",
    onClickFn: () => {
      console.log(document.getElementById("citySearch").value);
    },
  });

  searchInputGroup.append(searchInput, searchButton);

  if (Array.isArray(state.suggestions)) {
    const searchResult = document.createElement("div");

    if (state.suggestions !== null) {
      const suggestionList = document.createElement("ul");

      if (state.suggestions.length === 0) {
        const notFoundItem = document.createElement("li");
        notFoundItem.textContent = "Lokasi tidak ditemukan";

        suggestionList.append(notFoundItem);
      } else {
        state.suggestions.forEach((city) => {
          const listItem = document.createElement("li");
          listItem.textContent = capitalizeLetter(city.lokasi);

          suggestionList.append(listItem);
        });
      }
      searchResult.append(suggestionList);
    }

    searchBar.append(searchResult);
  }

  searchBar.append(searchInputGroup);

  return searchBar;
}
