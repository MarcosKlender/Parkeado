import { render, screen } from "@testing-library/react";
import { Avatar } from "@/components/shared/Avatar/Avatar";

describe("Avatar Component", () => {
  test("should extract initials from name", () => {
    render(<Avatar name="Homer Simpson" />);
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("HS");
  });

  test("should display empty if no name is provided", () => {
    render(<Avatar name="" />);
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("");
  });

  test("should display one initial for single name", () => {
    render(<Avatar name="Homer" />);
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("H");
  });

  test("should display two initials for names with three or more words", () => {
    render(<Avatar name="Homer Jay Simpson" />);
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent(/^HJ$/);
  });
});
