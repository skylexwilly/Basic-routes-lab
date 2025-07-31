 import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test('wraps content in a div with "navbar" class', () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders Home <NavLink> as active when path is "/"', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  );
  const homeLink = screen.getByText(/Home/);
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.tagName).toBe("A");
  expect(homeLink.href).toContain("/");
  expect(homeLink.classList).toContain("active");
});

test('renders Actors <NavLink> as active when path is "/actors"', () => {
  render(
    <MemoryRouter initialEntries={["/actors"]}>
      <NavBar />
    </MemoryRouter>
  );
  const actorsLink = screen.getByText(/Actors/);
  expect(actorsLink).toBeInTheDocument();
  expect(actorsLink.tagName).toBe("A");
  expect(actorsLink.href).toContain("/actors");
  expect(actorsLink.classList).toContain("active");
});

test('renders Directors <NavLink> as active when path is "/directors"', () => {
  render(
    <MemoryRouter initialEntries={["/directors"]}>
      <NavBar />
    </MemoryRouter>
  );
  const directorsLink = screen.getByText(/Directors/);
  expect(directorsLink).toBeInTheDocument();
  expect(directorsLink.tagName).toBe("A");
  expect(directorsLink.href).toContain("/directors");
  expect(directorsLink.classList).toContain("active");
});
