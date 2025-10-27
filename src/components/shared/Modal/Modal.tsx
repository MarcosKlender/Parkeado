import { Button } from "../Button/Button";
import "./Modal.scss";

/**
 * Props for a custom Modal component.
 * @property open - Determines if the modal is open or closed.
 * @property textContent - The text content to display in the modal.
 * @property onClose - Callback function to close the modal.
 * @property textOnClose - Optional. The text content for the close button. "Cancelar" as default.
 * @property onConfirm - Optional. Callback function to confirm the action.
 * @property textOnConfirm - Optional. The text content for the confirm button. "Confirmar" as default.
 */
type ModalProps = {
  open: boolean;
  textContent: string;
  onClose: () => void;
  textOnClose?: string;
  onConfirm?: () => void;
  textOnConfirm?: string;
};

/**
 * Custom Modal component, made from scratch.
 * @component
 * @param props - Props for the Modal component.
 * @returns A custom modal element with a background overlay.
 */
export default function Modal({
  open,
  textContent,
  onClose,
  textOnClose = "Cancelar",
  onConfirm,
  textOnConfirm = "Confirmar",
}: ModalProps) {
  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" />

      <div className="modal-content">
        <p className="modal-text">{textContent}</p>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onClose}>
            {textOnClose}
          </Button>
          {onConfirm && (
            <Button variant="success" onClick={onConfirm}>
              {textOnConfirm}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
