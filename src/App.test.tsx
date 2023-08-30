import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; //
import App from "./App";
import Home from "./Home";

type TestData = {
  ITEMS_PER_PAGE: number;
};

test("toggles background color", () => {
  render(<App />);

  // Initially, background color should be "color"
  const appContainer = screen.getByTestId("app-container");
  expect(appContainer).toHaveClass("color");

  // Click the toggle button
  const toggleButton = screen.getByText("Toggle Background");
  fireEvent.click(toggleButton);

  // Background color should change to "black-and-white"
  expect(appContainer).toHaveClass("black-and-white");

  // Click the toggle button again
  fireEvent.click(toggleButton);

  // Background color should change back to "color"
  expect(appContainer).toHaveClass("color");
});

test("renders movie list with pagination and genre buttons", () => {
  const testData: TestData = {
    ITEMS_PER_PAGE: 20,
  };
  render(<Home />);

  // Check if the initial movie list is rendered
  const movieElements = screen.getAllByTestId("movie-item");
  expect(movieElements).toHaveLength(testData.ITEMS_PER_PAGE); // Assuming ITEMS_PER_PAGE = 20

  // Check if genre buttons are rendered
  const genreButtons = screen.getAllByRole("button", {
    name: /All|Action|Comedy|Drama/,
  });
  expect(genreButtons).toHaveLength(4);

  // Click on a genre button
  const actionButton = genreButtons[1]; // Assuming Action is at index 1
  fireEvent.click(actionButton);

  // Check if the movie list updates based on the selected genre
  const filteredMovieElements = screen.getAllByTestId("movie-item");
  expect(filteredMovieElements.length).toBeLessThanOrEqual(
    testData.ITEMS_PER_PAGE
  ); // Movies can be less due to filtering

  // Pagination buttons
  const paginationButtons = screen.getAllByRole("button", { name: /\d+/ }); // Matches page numbers
  const expectedPaginationButtons = Math.ceil(
    filteredMovieElements.length / testData.ITEMS_PER_PAGE
  );
  expect(paginationButtons).toHaveLength(expectedPaginationButtons);

  // Click on a pagination button using userEvent
  const page2Button = paginationButtons[1];
  userEvent.click(page2Button);

  // Check if the movie list updates based on the selected page
  const updatedMovieElements = screen.getAllByTestId("movie-item");
  expect(updatedMovieElements).toHaveLength(filteredMovieElements.length);
});
