import createButton from "./Button";
import createSearchResult from "./SearchResult";
import createTextInput from "./TextInput";

export default function createSearchBar({
  state,
  onSearchInput,
  onSelectCity,
}) {
  const searchBar = document.createElement("div");
  searchBar.className = "w-full relative";

  const searchInputGroup = document.createElement("div");
  searchInputGroup.className = "flex gap-2 items-center";

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className:
      "flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-shadow",
    value: "",
    onSearchInput: (keyword) => {
      onSearchInput(keyword.toLowerCase());
    },
  });

  const searchButton = createButton({
    text: "Cari",
    className:
      "px-4 py-2 text-white bg-green-600 border rounded-lg border-green-600",
    onClickFn: () => {
      onSearchInput(
        document.getElementById("citySearch").value.trim().toLowerCase(),
      );
    },
  });

  searchInputGroup.append(searchInput, searchButton);

  searchBar.append(searchInputGroup);

  if (Array.isArray(state.suggestions)) {
    const searchResult = createSearchResult({
      searchSuggestions: state.suggestions,
      onSelectCity,
    });

    searchBar.append(searchResult);
  }

  return searchBar;
}
