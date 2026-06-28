import createButton from "./Button";
import createTextInput from "./TextInput";

export default function createSearchBar() {
  const searchBar = document.createElement("div");

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className: "",
    value: "",
    onSearchFn: () => {},
  });

  const searchButton = createButton({
    text: "Search",
  });

  searchBar.append(searchInput, searchButton);

  return searchBar;
}
