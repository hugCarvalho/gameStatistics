import React from "react";
import renderer from "react-test-renderer";
import PlayerStats from "./PlayersStats";

it("should render correctly", () => {
  const tree = renderer.create(<PlayerStats />).toJSON();
  expect(tree).toMatchSnapshot();
});
