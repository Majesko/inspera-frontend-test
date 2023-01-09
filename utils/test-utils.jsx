import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../src/store/configureStore";

const configuredStore = configureStore();

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configuredStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { configuredStore as store }
