import React from "react";
import { render } from "@testing-library/react";
import ProductScreen from "./ProductScreen";

describe("ProductScreen tests", () => {
  it("should render", () => {
    expect(render(<ProductScreen />)).toBeTruthy();
  });
});
