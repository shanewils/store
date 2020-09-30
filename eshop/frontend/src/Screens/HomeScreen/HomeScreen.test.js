import React from "react";
import { render } from "@testing-library/react";
import HomeScreen from "./HomeScreen";

describe("HomeScreen tests", () => {
  it("should render", () => {
    expect(render(<HomeScreen />)).toBeTruthy();
  });
});
