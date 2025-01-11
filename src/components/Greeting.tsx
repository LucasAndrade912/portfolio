interface Props {
    title: string
    greeting: string
}

export default function Greeting({ title, greeting }: Props) {
    return (
        <>
            <h1 className="font-oswald text-primary text-5xl">{title}</h1>

            <p className="text-lg text-secondary">{greeting}</p>
        </>
    )
}
