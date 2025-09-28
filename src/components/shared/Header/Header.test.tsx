import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

// Mock del hook
vi.mock("@/hooks/useUser", () => ({
  useUser: vi.fn(),
}));

import { useUser } from "@/hooks/useUser";

// Helper para construir un resultado de React Query usando any
function makeQueryResult(overrides: any = {}): any {
  const base: any = {
    data: undefined,
    error: undefined,
    isError: false,
    isLoading: false,
    isSuccess: true,
    status: "success",
    fetchStatus: "idle",
    refetch: vi.fn(),
    isFetched: true,
    isFetching: false,
    isPending: false,
  };
  return { ...base, ...overrides };
}

const mockedUseUser = vi.mocked(useUser);

function HeaderWrapper() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Header />
    </BrowserRouter>
  );
}

describe("Header Navigation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render all navigation links with user data", () => {
    mockedUseUser.mockReturnValue(
      makeQueryResult({
        data: { name: "John Doe" },
        isLoading: false,
        isError: false,
        isSuccess: true,
      })
    );

    render(<HeaderWrapper />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Mapa" })).toHaveAttribute(
      "href",
      "/home"
    );
    expect(screen.getByRole("link", { name: "Mi Reserva" })).toHaveAttribute(
      "href",
      "/reservation"
    );
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("JD");
  });

  test("should render avatar empty when user is not loaded", () => {
    mockedUseUser.mockReturnValue(
      makeQueryResult({
        data: undefined,
        isLoading: true,
        isError: false,
        isSuccess: false,
        status: "pending",
        fetchStatus: "fetching",
      })
    );

    render(<HeaderWrapper />);

    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("");
    const profileLink = screen.getByRole("link", { name: "User Avatar" });
    expect(profileLink).toHaveAttribute("href", "/profile");
  });

  test("should handle user loading state", () => {
    mockedUseUser.mockReturnValue(
      makeQueryResult({
        data: undefined,
        isLoading: true,
        isError: false,
        isSuccess: false,
        status: "pending",
        fetchStatus: "fetching",
      })
    );

    render(<HeaderWrapper />);

    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("");
    expect(screen.getByRole("link", { name: "Mapa" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Mi Reserva" })).toBeInTheDocument();
  });

  test("should integrate Avatar with LinkButton correctly", async () => {
    const user = userEvent.setup();

    mockedUseUser.mockReturnValue(
      makeQueryResult({
        data: { name: "John Doe" },
        isLoading: false,
        isError: false,
        isSuccess: true,
      })
    );

    render(<HeaderWrapper />);

    const profileLink = screen.getByRole("link", { name: /User Avatar/i });
    expect(profileLink).toHaveAttribute("href", "/profile");
    expect(profileLink).toHaveClass("link-button", "text");
    expect(screen.getByLabelText("User Avatar")).toHaveTextContent("JD");

    await user.click(profileLink);
  });

  test("should handle navigation link interactions", async () => {
    const user = userEvent.setup();

    mockedUseUser.mockReturnValue(
      makeQueryResult({
        data: { name: "John Doe" },
        isLoading: false,
        isError: false,
        isSuccess: true,
      })
    );

    render(<HeaderWrapper />);

    const mapLink = screen.getByRole("link", { name: "Mapa" });
    const reserveLink = screen.getByRole("link", { name: "Mi Reserva" });

    await user.hover(mapLink);
    expect(mapLink).toBeInTheDocument();

    await user.hover(reserveLink);
    expect(reserveLink).toBeInTheDocument();

    expect(mapLink).toHaveClass("link-button", "text");
    expect(reserveLink).toHaveClass("link-button", "text");
  });
});
