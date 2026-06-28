import createButton from "./Button";
import createTextInput from "./TextInput";

export default function createSearchBar() {
  const searchBar = document.createElement("div");
  searchBar.className = "w-full ";

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className: "",
    value: "",
    onSearchFn: (e) => {
      console.log(e.target.value);
    },
  });

  const searchButton = createButton({
    text: "Search",
    onClickFn: () => {},
  });

  searchBar.append(searchInput, searchButton);

  return searchBar;
}
