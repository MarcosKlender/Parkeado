import './Slot.scss'

type SlotProps = {
    number: number
    isAvailable: boolean
    onClick?: () => void
}

export function Slot({ number, isAvailable, onClick }: SlotProps) {
    return (
        <span className={`parking-slot ${isAvailable ? 'available' : 'occupied'}`} onClick={onClick}>
            {number}
        </span>
    )
}