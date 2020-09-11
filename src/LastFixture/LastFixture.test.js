import React from "react";
import renderer from "react-test-renderer";

import LastFixture from "../LastFixture/LastFixture";

it("renders correctly", () => {
  const tree = renderer.create(<LastFixture />).toJSON();
  expect(tree).toMatchSnapshot();
});
