import './Spot.scss'

type SpotProps = {
    number: number
    isAvailable: boolean
    onClick?: () => void
}

export function Spot({ number, isAvailable, onClick }: SpotProps) {
    return (
        <span className={`parking-spot ${isAvailable ? 'available' : 'occupied'}`} onClick={onClick}>
            {number}
        </span>
    )
}