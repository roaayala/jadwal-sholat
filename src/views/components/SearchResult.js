import { capitalizeLetter } from "../../utils/helpers";

export default function createSearchResult({
  searchSuggestions,
  onSelectCity,
}) {
  const searchResult = document.createElement("div");
  searchResult.className =
    "absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden";

  const suggestionList = document.createElement("ul");
  suggestionList.className = "max-h-60 overflow-y-auto custom-scrollbar";

  if (searchSuggestions.length === 0) {
    const notFoundItem = document.createElement("li");
    notFoundItem.className =
      "px-4 py-3 text-sm text-gray-500 text-center italic";
    notFoundItem.textContent = "Lokasi tidak ditemukan";

    suggestionList.append(notFoundItem);
  } else {
    searchSuggestions.forEach((city) => {
      const listItem = document.createElement("li");
      listItem.className =
        "px-4 py-3 text-gray-700 cursor-pointer border-b last:border-b-0 hover:bg-gray-100 hover:text-green-600 transition-colors";
      listItem.textContent = capitalizeLetter(city.lokasi);

      listItem.addEventListener("click", () => {
        onSelectCity(city.id);
      });

      suggestionList.append(listItem);
    });
  }

  searchResult.append(suggestionList);

  return searchResult;
}
