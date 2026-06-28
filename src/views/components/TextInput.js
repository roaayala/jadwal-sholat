export default function createTextInput({
  id,
  placeholder,
  className = "",
  value = "",
  onSearchFn,
}) {
  const textInput = document.createElement("input");

  textInput.id = id;
  textInput.placeholder = placeholder;

  if (className) textInput.className = className;
  if (value) textInput.value = value;

  return textInput;
}
