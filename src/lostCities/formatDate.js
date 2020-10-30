export default function formatDate(matchesDatabase) {
  return new Date(matchesDatabase.games[0].date).toLocaleString("de", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  });
}
