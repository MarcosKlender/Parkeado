import './Spot.scss'

type SpotProps = {
    number: number
    isOccupied: boolean
    onClick?: () => void
}

export function Spot({ number, isOccupied, onClick }: SpotProps) {
    return (
        <span className={`parking-spot ${isOccupied ? 'occupied' : 'available'}`} onClick={onClick}>
            {number}
        </span>
    )
}