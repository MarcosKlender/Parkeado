import { useEffect, useState } from 'react'

export function useIsDesktop(breakpoint = 768): boolean {
    const query = `(min-width: ${breakpoint + 1}px)`
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    )

    useEffect(() => {
        const media = window.matchMedia(query)
        const handler = () => setIsDesktop(media.matches)

        media.addEventListener('change', handler)
        return () => media.removeEventListener('change', handler)
    }, [query])

    return isDesktop
}
