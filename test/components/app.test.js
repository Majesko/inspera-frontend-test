import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, store } from "../../utils/test-utils";
import { setRemainingTime } from "../../src/actions/timeActions";
import App from "../../src/components/App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ timeRemaining: 25 }),
  })
);

describe("App component", () => {
  beforeEach(() => {
     jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });


  test('Increment timer from api call', async () => {
    renderWithProviders(<App />);

    const counter = screen.getByTestId("counter");

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(counter.textContent).toBe('25 seconds remaining');
  });

  test('Timer decremented with time', () => {
    renderWithProviders(<App />);

    const counter = screen.getByTestId("counter");

    jest.advanceTimersByTime(2000);

    expect(counter.textContent).toBe('23 seconds remaining');
  });

  test('Increment timer with dispatch event', async () => {
    renderWithProviders(<App />);

    const counter = screen.getByTestId("counter");

    store.dispatch(setRemainingTime(234))

    expect(counter.textContent).toBe('234 seconds remaining');
  });
});
