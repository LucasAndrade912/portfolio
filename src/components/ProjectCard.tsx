import SkillCard from './SkillCard'

interface Props {
    project: {
        title: string
        description: string
        background: string
        skills: string[]
        date: string
    }
}

export default function ProjectCard({ project }: Props) {
    const formmatedDate = new Date(project.date).toLocaleDateString('pt-br')

    return (
        <div className="border-2 border-primary bg-zinc-900 w-[380px] h-[264px] rounded-md overflow-hidden text-white">
            <div className="w-full h-[190px] relative">
                <img
                    className="absolute z-0 w-full h-full"
                    src={project.background}
                    alt={project.title}
                />
                <div className="bg-overlay w-full h-full absolute z-10" />

                <div className="p-8">
                    <span className="font-oswald text-2xl block mb-[18px] z-10 relative">
                        {project.title}
                    </span>
                    <span className="text-xs leading-relaxed block z-10 relative">
                        {project.description}
                    </span>
                </div>
            </div>

            <div className="flex w-full justify-between items-centers px-8 my-5">
                <ul className="flex gap-[14px]">
                    {project.skills.map((skill, index) => (
                        <SkillCard icon={skill} key={index} minimalist />
                    ))}
                </ul>

                <span className="text-xs self-center">{formmatedDate}</span>
            </div>
        </div>
    )
}
