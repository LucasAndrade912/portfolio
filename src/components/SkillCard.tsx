interface Props {
    title?: string
    icon: string
    minimalist?: boolean
}

export default function SkillCard({ title, icon, minimalist = false }: Props) {
    return (
        <div
            className={`flex flex-col justify-center items-center bg-zinc-600  gap-2 rounded-md border-2 border-zinc-300 ${
                minimalist ? 'w-[34px] h-[34px]' : 'w-full h-[156px]'
            }`}>
            {!minimalist && (
                <p className="font-oswald text-lg uppercase text-white">{title}</p>
            )}
            <img
                src={icon}
                alt={`${title} icon`}
                className={minimalist ? 'w-[18px] h-[18px]' : ''}
            />
        </div>
    )
}
