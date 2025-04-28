import './Avatar.scss'

type AvatarProps = {
    name: string
}

export function Avatar({ name }: AvatarProps) {
    const getInitials = (fullName: string) => {
        return fullName
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
    }

    return (
        <span className='avatar'>
            {getInitials(name)}
        </span>
    )
}