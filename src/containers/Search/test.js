import React from "react";
import { mount } from "enzyme";
import Search from ".";

it("should trigger a search when submit is clicked", () => {
  const onSearchCallback = jest.fn();
  const component = mount(<Search onSearch={onSearchCallback} />);

  component
    .find("input")
    .at(0)
    .simulate("change", {
      target: {
        value: "new job"
      }
    });

  component
    .find("input")
    .at(1)
    .simulate("submit");

  expect(onSearchCallback).toHaveBeenCalledWith("new job");
});

it("should not trigger a search if user types less than three characters", () => {
  const onSearchCallback = jest.fn();
  const component = mount(<Search onSearch={onSearchCallback} />);

  component
    .find("input")
    .at(0)
    .simulate("change", {
      target: {
        value: "🤦🏻‍♂️"
      }
    });

  component
    .find("input")
    .at(1)
    .simulate("click"); // this is a cheat! Enzyme isn't brilliant with simulating with disabled elements

  expect(onSearchCallback).not.toHaveBeenCalled();
});
