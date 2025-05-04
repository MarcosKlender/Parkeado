import './Input.scss'

type InputProps = {
    label: string
    id: string
    name: string
    placeholder: string
    variant?: 'text' | 'email' | 'password'
    autoComplete: string
}

export function Input({ label, id, name, placeholder, variant = 'text', autoComplete }: InputProps) {
    return (
        <>
            <label className='custom-label'>
                {label}
                <input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={variant}
                    autoComplete={autoComplete}
                    className='custom-input'
                />
            </label>
        </>
    )
}