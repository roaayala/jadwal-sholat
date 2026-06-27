export const getCurrentMonthString = () => {
  const today = new Date().getFullYear();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, 0);

  return `${year}-${month}`;
};
