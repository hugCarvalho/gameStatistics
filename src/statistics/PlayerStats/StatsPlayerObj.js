import { numOfGamesPlayedByPlayer } from "./PlayersStats";
import matchReport from "../../data/matchReports";

const playersStats = {
  hugo: {
    games: () => numOfGamesPlayedByPlayer(matchReport, "hugo"),
    wins: 0,
    defeats: 0,
    Boston: {
      games: 0,
      wins: 0,
      defeats: 0,
      biggestWin: [], //team, diff
    },
    LosAngeles: {
      games: 0,
      wins: 0,
      defeats: 0,
      biggestWin: [], //team, diff
    },
    SanFrancisco: {
      games: 0,
      wins: 0,
      defeats: 0,
      biggestWin: [], //team, diff
    },
    NewYork: {
      games: 0,
      wins: 0,
      defeats: 0,
      biggestWin: [], //team, diff
    },
  },
};

export default playersStats;
