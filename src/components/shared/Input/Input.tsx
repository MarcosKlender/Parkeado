import './Input.scss'

type InputProps = {
    label: string
    id: string
    name: string
    placeholder: string
    autoComplete: string
    variant?: 'text' | 'email' | 'password'
    defaultValue?: string
}

export function Input({ label, id, name, placeholder, autoComplete, variant = 'text', defaultValue }: InputProps) {
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
                    defaultValue={defaultValue}
                    className='custom-input'
                    required
                />
            </label>
        </>
    )
}