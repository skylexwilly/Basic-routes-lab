 import { render, screen, waitFor } from "@testing-library/react";
import Home from "../components/Home"; // Adjust the path as needed
import React from "react";

// ✅ Mock MovieCard just to check it's being called
vi.mock("../components/MovieCard", () => ({
  default: ({ movie }) => <div>{movie.title}</div>,
}));

// ✅ Mock fetch globally
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Sample Movie 1" },
          { id: 2, title: "Sample Movie 2" },
        ]),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test("renders movies fetched from the server", async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByText("Sample Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Movie 2")).toBeInTheDocument();
  });
});

