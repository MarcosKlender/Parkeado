import { useUser } from '@/hooks/useUser'
import './Avatar.scss'

export function Avatar() {
    const { data: user } = useUser()

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
    }

    const initials = user ? getInitials(user.name) : ''

    return (
        <span className='avatar'>
            {initials}
        </span>
    )
}