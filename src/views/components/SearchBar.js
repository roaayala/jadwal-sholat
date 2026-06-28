import createButton from "./Button";
import createTextInput from "./TextInput";

export default function createSearchBar({ onSearchFn }) {
  const searchBar = document.createElement("div");
  searchBar.className = "w-full ";

  const searchInput = createTextInput({
    id: "citySearch",
    placeholder: "Tulis lokasi anda",
    className: "",
    value: "",
    onSearchFn: (e) => {
      onSearchFn(e);
    },
  });

  const searchButton = createButton({
    text: "Search",
    onClickFn: () => {
      console.log(document.getElementById("citySearch").value);
    },
  });

  searchBar.append(searchInput, searchButton);

  return searchBar;
}
