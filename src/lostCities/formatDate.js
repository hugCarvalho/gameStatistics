export default function formatDate(matchesDatabase) {
  console.log("RUN");
  return new Date(matchesDatabase.games[0].date).toLocaleString("de", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  });
}
