import createTextInput from "./TextInput";

export default function createSearchBar() {
  const searchBar = document.createElement("div");

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className: "",
    value: "",
    searchFn: () => {},
  });

  searchBar.append(searchInput);

  return searchBar;
}
