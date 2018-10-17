import React from "react";
import { shallow } from "enzyme";
import SearchResults from ".";

it("should report how many cards were found", () => {
  const component = shallow(<SearchResults results={[{}, {}, {}]} />);

  expect(component.find("Summary").text()).toEqual("We have 3 cards");
});
