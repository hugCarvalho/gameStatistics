export default function localStorageGet(getDatabase) {
  try {
    if (localStorage.LostCitiesDatabase) {
      getDatabase(JSON.parse(localStorage.getItem("LostCitiesDatabase")));
    }
  } catch (err) {
    throw new Error("Local storage error");
  }
}

export function localStorageSet(database) {
  return localStorage.setItem("LostCitiesDatabase", JSON.stringify(database));
}
