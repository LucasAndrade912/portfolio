interface Props {
    value: string
}

export default function Title({ value }: Props) {
    return (
        <h2 className="font-oswald text-primary text-5xl">
            {value}
            <span className="text-secondary">.</span>
        </h2>
    )
}
