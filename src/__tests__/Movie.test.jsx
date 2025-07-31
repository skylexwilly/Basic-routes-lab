 import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";
import "@testing-library/jest-dom";

// mock movie data that matches expected structure
const mockMovie = {
  id: 1,
  title: "Doctor Strange",
  time: 115,
  genres: ["Action", "Adventure", "Fantasy"]
};

// Setup fetch mock
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockMovie)
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks(); // clean up after each test
});

// use a memory router to simulate route
const router = createMemoryRouter(routes, {
  initialEntries: ["/movies/1"],
});

test("renders a span for each genre", async () => {
  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];

  for (const genre of genres) {
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});
