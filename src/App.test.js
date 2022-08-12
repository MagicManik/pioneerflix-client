import { render, screen } from "@testing-library/react";
//import App from "./App";
import TvChannels from "./components/Home/TvChannels/TvChannels";

test("renders learn react link", () => {
  render(<TvChannels />);
  const linkElement = screen.getByText(/TV CHANNELS/i);
  expect(linkElement).toBeInTheDocument();
});
