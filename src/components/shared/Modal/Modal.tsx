import { Button } from "../Button/Button";
import "./Modal.scss"

type ModalProps = {
    open: boolean
    text: string
    onClose: () => void
    onConfirm?: () => void
}

export default function Modal({ open, text, onClose, onConfirm }: ModalProps) {
    if (!open) return null;

    return (
        <>
            <div className="modal-overlay" />

            <div className="modal-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                <p className="modal-text">{text}</p>
                <div className="modal-actions">
                    <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                    <Button variant="success" onClick={onConfirm}>Reservar</Button>
                </div>
            </div>
        </>
    )
}
