export default function localStorageGet() {
  // console.log("LOCALSTORAGE");
  try {
    if (localStorage.LostCitiesDatabase) {
      return JSON.parse(localStorage.getItem("LostCitiesDatabase"));
    }
  } catch (err) {
    throw new Error("Local storage error");
  }
}

export function saveInLocalStorage(database) {
  return localStorage.setItem("LostCitiesDatabase", JSON.stringify(database));
}
