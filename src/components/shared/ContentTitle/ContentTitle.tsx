import "./ContentTitle.scss";

/**
 * Props for the Content Title component.
 * @property icon - The icon image source.
 * @property title - The title text.
 * @property description - The description text.
 */
type ContentTitleProps = {
  icon: string;
  title: string;
  description: string;
};

/**
 * Reusable content title component.
 * @component
 * @param props - Props for the Content Title component.
 * @returns A styled content title element.
 */
export function ContentTitle({ icon, title, description }: ContentTitleProps) {
  return (
    <div className="content-title">
      <img className="icon" src={icon} alt="Icono del contenido" />
      <h2 className="title">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
