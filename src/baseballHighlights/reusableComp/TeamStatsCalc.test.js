import React from "react";
import renderer from "react-test-renderer";

import TeamStats from "./TeamStats";

it("should render correctly", () => {
  const tree = renderer.create(<TeamStats />).toJSON();
  expect(tree).toMatchSnapshot();
});
