import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Input } from "@/components/shared/Input/Input";

describe("Input Component", () => {
  test("should render label", () => {
    render(
      <Input
        label="Test Label"
        id="test-input"
        name="test-input"
        placeholder="Test Placeholder"
        autoComplete="off"
      />
    );
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
  });

  test("should render input with attributes", () => {
    render(
      <Input
        label="Test Label"
        id="test-input"
        name="test-input"
        placeholder="Test Placeholder"
        autoComplete="off"
      />
    );
    const input = screen.getByPlaceholderText("Test Placeholder");
    expect(input).toHaveAttribute("id", "test-input");
    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveAttribute("autoComplete", "off");
  });

  test("should render input variants", () => {
    render(
      <>
        <Input
          label="Email Input"
          id="email-input"
          name="email-input"
          placeholder="Enter email"
          autoComplete="email"
          variant="email"
        />
        <Input
          label="Password Input"
          id="password-input"
          name="password-input"
          placeholder="Enter password"
          autoComplete="current-password"
          variant="password"
        />
      </>
    );

    const textInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Enter password");

    expect(textInput).toHaveAttribute("id", "email-input");
    expect(passwordInput).toHaveAttribute("id", "password-input");
  });

  test("should render input default value", () => {
    render(
      <Input
        label="Email Input"
        id="email-input"
        name="email-input"
        placeholder="Enter email"
        autoComplete="email"
        variant="email"
        defaultValue="test@example.com"
      />
    );

    const input = screen.getByDisplayValue("test@example.com");
    expect(input).toBeInTheDocument();
  });

  test("should user input value", async () => {
    render(
      <Input
        label="Email Input"
        id="email-input"
        name="email-input"
        placeholder="Enter email"
        autoComplete="email"
        variant="email"
      />
    );

    const input = screen.getByPlaceholderText("Enter email");
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });
});
