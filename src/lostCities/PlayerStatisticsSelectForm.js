import React from "react";

function PlayerStatisticsSelectForm({ allPlayers, handleOnChange }) {
  return (
    <form onChange={(e) => handleOnChange(e)}>
      <label htmlFor="player">Choose a player:</label>
      <select name="player" id="player">
        <option name="empty" value={null}>
          {" "}
        </option>
        {allPlayers.map((name, i) => {
          return (
            <option key={i} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default PlayerStatisticsSelectForm;
