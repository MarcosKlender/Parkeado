import { Button } from "../Button/Button"
import "./QueryState.scss"

type QueryStateProps = {
    status: "loading" | "error"
    errorMessage?: string
    onClick?: () => void
}

export function QueryState({ status, errorMessage, onClick }: QueryStateProps) {
    return (
        <div className="query-container">
            {status === "loading" && (
                <div className="spinner" />
            )}
            {status === "error" && (
                <div className="query-container">
                    <p>{errorMessage}</p>
                    <Button variant="success" onClick={onClick}>
                        Reintentar
                    </Button>
                </div>
            )}
        </div>
    )
}