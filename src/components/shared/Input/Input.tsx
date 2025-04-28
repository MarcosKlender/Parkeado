import './Input.scss'

type InputProps = {
    label: string
    placeholder: string
    variant?: 'text' | 'email' | 'password'
}

export function Input({ label, placeholder, variant = 'text' }: InputProps) {
    return (
        <>
            <label className='custom-label'>
                {label}
                <input className='custom-input' type={variant} placeholder={placeholder} />
            </label>
        </>
    )
}