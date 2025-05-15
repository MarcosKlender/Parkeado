import "./Hero.scss"

type HeroProps = {
    title: string
    description: string
}

export function Hero({ title, description }: HeroProps) {
    return (
        <div className="hero">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    )
}