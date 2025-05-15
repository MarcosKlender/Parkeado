import "./ContentTitle.scss"

type ContentTitleProps = {
    icon: string
    title: string
    description: string
}

export function ContentTitle({ icon, title, description }: ContentTitleProps) {
    return (
        <div className="content-title">
            <img className="icon" src={icon} alt="Icono del contenido" />
            <h2 className="title">{title}</h2>
            <p>{description}</p>
        </div>
    )
}