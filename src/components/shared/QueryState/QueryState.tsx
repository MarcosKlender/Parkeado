import { Button } from "../Button/Button";
import "./QueryState.scss";

/**
 * Props for the Query State component.
 * @property status - The current status of the query (loading or error).
 * @property errorMessage - Optional error message to display.
 * @property onClick - Optional callback function for retrying the query.
 */
type QueryStateProps = {
  status: "loading" | "error";
  errorMessage?: string;
  onClick?: () => void;
};

/**
 * Conditional component for displaying the query state.
 * @component
 * @param props - Props for the Query State component.
 * @returns Displays a loading spinner or an error message, depending on the query status.
 */
export function QueryState({ status, errorMessage, onClick }: QueryStateProps) {
  return (
    <div className="query-container">
      {status === "loading" && <div className="spinner" />}
      {status === "error" && (
        <div className="query-container">
          <p>{errorMessage}</p>
          <Button variant="success" onClick={onClick}>
            Reintentar
          </Button>
        </div>
      )}
    </div>
  );
}
