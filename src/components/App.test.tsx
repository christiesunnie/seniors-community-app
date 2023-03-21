import { render, screen } from "@testing-library/react";
import App from "./App";

test("h1 render a string", () => {
  render(<App />);
  const h1Elem = screen.getByText("Hello World");
  expect(h1Elem).toBeInTheDocument();
});
