import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search Component", () => {
  it("renders the search form", () => {
    render(<Search onSearch={vi.fn()} />);
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("calls onSearch when Search button is clicked", async () => {
    const user = userEvent.setup();
    const mockSearch = vi.fn();

    render(<Search onSearch={mockSearch} />);
    await user.click(screen.getByTestId("search-button"));

    expect(mockSearch).toHaveBeenCalled();
  });

  it("filters properties by postcode", async () => {
    const user = userEvent.setup();
    const mockSearch = vi.fn();

    render(<Search onSearch={mockSearch} />);
    await user.type(
      screen.getByPlaceholderText(/br, london/i),
      "London"
    );
    await user.click(screen.getByTestId("search-button"));

    expect(mockSearch).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          location: expect.stringMatching(/london/i),
        }),
      ])
    );
  });
});