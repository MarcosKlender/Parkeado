import "./PageTitle.scss"

type PageTitleProps = {
    title: string
    description: string
}

export function PageTitle({ title, description }: PageTitleProps) {
    return (
        <div className="page-title">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    )
}