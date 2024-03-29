import React from "react";
import { render } from "@testing-library/react";
import Root from "./Root";

const AllTheProviders = ({ children }) => {
  return <Root>{children}</Root>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
