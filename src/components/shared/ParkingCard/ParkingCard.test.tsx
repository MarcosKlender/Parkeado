import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ParkingCard } from "@/components/shared/ParkingCard/ParkingCard";

describe("ParkingCard Component", () => {
  test("should render an article", () => {
    render(
      <ParkingCard
        name="Test Parking"
        address="742 Evergreen Terrace"
        availableSlots={10}
      />
    );
    const card = screen.getByRole("article");
    expect(card).toBeInTheDocument();
  });

  test("should render a heading and a paragraph", () => {
    render(
      <ParkingCard
        name="Test Parking"
        address="742 Evergreen Terrace"
        availableSlots={10}
      />
    );
    const heading = screen.getByRole("heading");
    const paragraph = screen.getByText("742 Evergreen Terrace");
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  test("should call onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <ParkingCard
        name="Test Parking"
        address="742 Evergreen Terrace"
        availableSlots={10}
        onClick={handleClick}
      />
    );
    const card = screen.getByRole("article");
    await user.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should work without onClick handler", async () => {
    const user = userEvent.setup();
    render(
      <ParkingCard
        name="Test Parking"
        address="742 Evergreen Terrace"
        availableSlots={10}
      />
    );
    const card = screen.getByRole("article");
    await user.click(card);
    expect(card).toBeInTheDocument();
  });
});
