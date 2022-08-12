import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MostPopular from "./components/Home/MostPopular/MostPopular";
import PioneerflixFree from "./components/Home/PioneerflixFree/PioneerflixFree";
import PioneerflixKids from "./components/Home/PioneerflixKids/PioneerflixKids";
import PioneerplixExclusive from "./components/Home/PioneerplixExclusive/PioneerplixExclusive";
import TvChannels from "./components/Home/TvChannels/TvChannels";

test("tv channel header", () => {
  render(<TvChannels />);
  const textElement = screen.getByText(/TV CHANNELS/i);
  expect(textElement).toBeInTheDocument();
});
test("most pupular header", () => {
  render(<MostPopular />);
  const textElement = screen.getByText(/MOST POPULAR/i);
  expect(textElement).toBeInTheDocument();
});
// test("exclusive header", () => {
//   render(
//     <MemoryRouter>
//       <PioneerplixExclusive />
//     </MemoryRouter>
//   );
//   const textElement = screen.getByText(/EXCLUSIVE/i);
//   expect(textElement).toBeInTheDocument();
// });
test("pioneerflix kids header", () => {
  render(
    <MemoryRouter>
      <PioneerflixKids />
    </MemoryRouter>
  );
  const textElement = screen.getByText(/PIONEERFLIX KIDS/i);
  expect(textElement).toBeInTheDocument();
});

test("pioneerflix free header", () => {
  render(
    <MemoryRouter>
      <PioneerflixFree />
    </MemoryRouter>
  );
  const textElement = screen.getByText(/PIONEERFLIX FREE/i);
  expect(textElement).toBeInTheDocument();
});
