import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login page", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Connect with friends and the world around you on ShareSphere/i
  );
  expect(linkElement).toBeInTheDocument();
});
