export const $searchInput = document.querySelector(
  "#search_input"
) as HTMLInputElement;

function searchMovie(e: KeyboardEvent) {
  if (e.key === "Enter") {
    const valueInput = (e.target as HTMLInputElement).value;
    return valueInput;
    console.log(valueInput);
  }
}

$searchInput?.addEventListener("keydown", searchMovie);
