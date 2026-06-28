export default function createButton({ id, className, text, onClickFn }) {
  const button = document.createElement("button");

  if (id) button.id = id;
  if (className) button.className = className;
  if (text) button.textContent = text;

  button.addEventListener("click", () => {
    onClickFn();
  });

  return button;
}
