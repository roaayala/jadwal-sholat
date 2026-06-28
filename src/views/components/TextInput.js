import { debounce } from "../../utils/helpers";

export default function createTextInput({
  id,
  placeholder,
  className = "",
  value = "",
  onSearchInput,
}) {
  const textInput = document.createElement("input");

  textInput.id = id;
  textInput.placeholder = placeholder;

  if (className) textInput.className = className;
  if (value) textInput.value = value;

  const debouncedSearch = debounce((e) => {
    onSearchInput(e);
  }, 500);

  textInput.addEventListener("input", (e) => {
    debouncedSearch(e);
  });

  return textInput;
}
