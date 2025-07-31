 /* eslint-env vitest */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes"; // Make sure /directors route is defined here

const mockDirectors = [
  {
    name: "Christopher Nolan",
    movies: ["Inception", "Interstellar", "Dunkirk"],
  },
  {
    name: "Steven Spielberg",
    movies: ["Jaws", "E.T.", "Jurassic Park"],
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockDirectors),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

const router = createMemoryRouter(routes, {
  initialEntries: ["/directors"],
  initialIndex: 0,
});

test("renders the Directors Page heading", () => {
  render(<RouterProvider router={router} />);
  expect(screen.getByRole("heading", { name: /directors page/i })).toBeInTheDocument();
});

test("renders all director names", async () => {
  render(<RouterProvider router={router} />);
  for (const director of mockDirectors) {
    expect(await screen.findByText(director.name)).toBeInTheDocument();
  }
});

test("renders a <li> for each movie", async () => {
  render(<RouterProvider router={router} />);
  for (const director of mockDirectors) {
    for (const movie of director.movies) {
      const li = await screen.findByText(movie);
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});

test("renders the NavBar component", () => {
  render(<RouterProvider router={router} />);
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});
