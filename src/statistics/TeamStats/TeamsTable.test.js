import React from "react";
import renderer from "react-test-renderer";
import TeamsTable from "./TeamsTable";

it("should render correctly", () => {
  const component = renderer.create(<TeamsTable />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
