import React from "react";
import "./PlayerForm.scss";

function PlayerForm({ player, matchesDatabase }) {
  return (
    <div className="PlayerForm">
      <div className="wrapper__name name-total">
        <h2>
          <label htmlFor={`${player}-name`}>Player name</label>
        </h2>
        <input
          placeholder="Your name"
          className="name"
          id={`${player}-name`}
          name={`${player}-name`}
          type="text"
        />
      </div>

      {/***  ROUNDS ***/}
      <div className="wrapper__rounds">
        <div className="wrapper__label-input">
          <label htmlFor={`${player}-round1`}>Round 1</label>
          <input id={`${player}-round1`} name={`${player}-round1`} type="number" />
        </div>
        <div className="wrapper__label-input">
          <label htmlFor={`${player}-round2`}>Round 2</label>
          <input id={`${player}-round2`} name={`${player}-round2`} type="number" />
        </div>
        <div className="wrapper__label-input">
          <label htmlFor={`${player}-round3`}>Round 3</label>
          <input id={`${player}-round3`} name={`${player}-round3`} type="number" />
        </div>
      </div>

      {/***  TOTAL ***/}
      <div className="wrapper__total name-total total">
        <label htmlFor={`${player}-total`}>Total</label>
        <input
          id={`${player}-total`}
          name={`${player}-total`}
          value={matchesDatabase.games[0] ? matchesDatabase.games[0][player].total : 0}
          readOnly
        />
      </div>
    </div>
  );
}

export default PlayerForm;
