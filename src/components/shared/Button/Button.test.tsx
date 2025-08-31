import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "@/components/shared/Button/Button";

describe("Button Component", () => {
  test("should render children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  test("should have default props when not provided", () => {
    render(<Button>Default Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveClass("custom-button primary");
  });

  test("should apply custom class when provided", () => {
    render(<Button variant="success">Success Button</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-button success");
  });

  test("should apply button type when provided", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("should be accessible as a button", () => {
    render(<Button>Accessible Button</Button>);
    const button = screen.getByRole("button", { name: "Accessible Button" });
    expect(button).toBeInTheDocument();
  });

  test("should call onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should work without onClick handler", async () => {
    const user = userEvent.setup();
    render(<Button>Click me</Button>);
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
