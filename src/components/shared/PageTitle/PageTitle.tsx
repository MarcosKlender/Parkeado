import "./PageTitle.scss";

/**
 * Props for the Page Title component.
 * @property title - The title text to display.
 * @property description - The description text to display.
 */
type PageTitleProps = {
  title: string;
  description: string;
};

/**
 * Page Title component.
 * @component
 * @param props - Props for the Page Title component.
 * @returns Displays a title and description for the current page.
 */
export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="page-title">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
}
