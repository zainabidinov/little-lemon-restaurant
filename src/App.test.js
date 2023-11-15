import { render, screen } from "@testing-library/react";
import App, { initializeTimes, updateTimes } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const expectedArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const resultArray = initializeTimes();
  expect(resultArray).toEqual(expectedArray);
});

describe("updateTimes", () => {
  it("returns the same value that is provided in the state", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // const selectedDate = "2023-03-25";
    const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes(initialState)).toEqual(expectedState);
  });
});
