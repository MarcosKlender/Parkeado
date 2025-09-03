import "./Avatar.scss";

/**
 * Props for the Avatar component.
 * @property name - The name of the user.
 */
type AvatarProps = {
  name: string;
};

/**
 * Displays the signed-in user's initials inside a circular badge.
 * @component
 * @param props - Props for the avatar component.
 * @returns The avatar component with user's initials.
 */
export function Avatar({ name }: AvatarProps) {
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
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = name ? getInitials(name) : "";

  return (
    <span className="avatar" aria-label="User Avatar">
      {initials}
    </span>
  );
}
