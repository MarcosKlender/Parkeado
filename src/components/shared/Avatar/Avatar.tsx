import { useUser } from "@/hooks/useUser";
import "./Avatar.scss";

/**
 * Displays the signed-in user's initials inside a circular badge.
 * @component
 * @returns The avatar component with user's initials.
 */
export function Avatar() {
  const { data: user } = useUser();

  /**
   * Build uppercase initials from a given name (Ada Lovelace → AL).
   * @param name - The full name.
   * @returns Uppercase initials.
   */
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const initials = user ? getInitials(user.name) : "";

  return <span className="avatar">{initials}</span>;
}
