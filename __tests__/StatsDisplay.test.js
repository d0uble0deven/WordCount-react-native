import React from "react";
import { render } from "@testing-library/react-native";
import StatsDisplay from "../components/StatsDisplay";

describe("StatsDisplay", () => {
  it("renders correctly with props", () => {
    const { getByText } = render(
      <StatsDisplay label="Test Label" value={42} unit="units" />
    );

    expect(getByText("Test Label: 42 units")).toBeTruthy();
  });

  it("renders correctly without unit", () => {
    const { getByText } = render(
      <StatsDisplay label="Test Label" value={42} />
    );

    expect(getByText("Test Label: 42")).toBeTruthy();
  });
});
