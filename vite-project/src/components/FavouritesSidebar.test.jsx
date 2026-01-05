import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FavouritesProvider } from "../context/FavouritesContext";
import FavouritesSidebar from "./FavouritesSidebar";

const mockProperty = {
  id: 1,
  type: "House",
};

const renderSidebar = () =>
  render(
    <FavouritesProvider>
      <FavouritesSidebar />
    </FavouritesProvider>
  );

describe("FavouritesSidebar Component", () => {
  it("shows empty message when no favourites exist", () => {
    renderSidebar();
    expect(screen.getByText(/drag properties here/i)).toBeInTheDocument();
  });

  it("adds and clears favourites", () => {
    renderSidebar();

    fireEvent.drop(screen.getByTestId("favourites-sidebar"), {
      dataTransfer: {
        getData: () => JSON.stringify(mockProperty),
      },
    });

    expect(screen.getByText("House")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("clear-favourites"));
    expect(screen.queryByText("House")).not.toBeInTheDocument();
  });
});