import "./Input.scss";

/**
 * Input component props.
 * @property label - Label text displayed above the input.
 * @property id - Unique identifier for the input element.
 * @property name - Name attribute for form submission.
 * @property placeholder - Placeholder text shown when input is empty.
 * @property autoComplete - Browser auto-complete attribute.
 * @property variant - Defines the input type. Defaults to "text".
 * @property defaultValue - Initial value of the input.
 */
type InputProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  variant?: "text" | "email" | "password";
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
}

/**
 * Reusable input component for text, email, and password fields.
 * @component
 * @param props - Props for the input component.
 * @returns A styled input element with accessible features.
 */
export function Input({
  label,
  id,
  name,
  placeholder,
  autoComplete,
  variant = "text",
  defaultValue,
  onChange,
}: InputProps) {
  return (
    <>
      <label className="custom-label">
        {label}
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={variant}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          className="custom-input"
          required
          onChange={onChange}
        />
      </label>
    </>
  );
}
