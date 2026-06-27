export const getCurrentMonthString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, 0);

  return `${year}-${month}`;
};

export const capitalizeLetter = (text) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (!word) return "";

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
