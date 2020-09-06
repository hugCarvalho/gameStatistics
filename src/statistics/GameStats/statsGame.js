export const gameStats = {
  totalOfGames: 0, //equals length of match reports
  teams: ["Boston", "San Francisco", "New York", "Los Angeles"].sort((a, b) =>
    a > b ? 1 : -1
  ),
  players: [], //name of players in match reports. Add only if doesn't exist
};

export default gameStats;

// , "San Francisco", "New York", "Los Angeles"
