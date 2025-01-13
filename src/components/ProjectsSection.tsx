import { getImage } from 'astro:assets'

import ProjectCard from './ProjectCard'
import Title from './Title'
import cloneNubank from '../assets/clone-nubank.png'
import clonePicPay from '../assets/clone-picpay.png'
import cloneNetflix from '../assets/clone-netflix.png'
import html5Icon from '../assets/icons/html5-icon.svg'
import css3Icon from '../assets/icons/css3-icon.svg'
import javascriptIcon from '../assets/icons/javascript-icon.svg'
import reactIcon from '../assets/icons/react-icon.svg'
import angularIcon from '../assets/icons/angular-icon.svg'
import tailwindcssIcon from '../assets/icons/tailwindcss-icon.svg'
import javaIcon from '../assets/icons/java-icon.svg'

export default async function ProjectsSection() {
    const projects = [
        {
            title: 'Clone do PicPay',
            description:
                'Projeto para tentar replicar algumas coisas do PicPay utilizando tecnologias diferentes como Angular e Java com Springboot.',
            skills: [
                await getImage({
                    src: angularIcon,
                    format: 'svg',
                }),
                await getImage({ src: javaIcon, format: 'svg' }),
            ],
            date: '2024-01-01',
            background: await getImage({ src: clonePicPay, format: 'png' }),
        },
        {
            title: 'Clone do Netflix',
            description:
                'Projeto básico para tentar replicar o design do site da Netflix usando HTML, CSS e Javascript',
            skills: [
                await getImage({ src: html5Icon, format: 'svg' }),
                await getImage({ src: css3Icon, format: 'svg' }),
                await getImage({
                    src: javascriptIcon,
                    format: 'svg',
                }),
            ],
            date: '2021-01-01',
            background: await getImage({ src: cloneNetflix, format: 'png' }),
        },
        {
            title: 'Clone do Nubank',
            description:
                'Projeto para recriar algumas funcionalidades do Nubank utilizando React com Taildwindcss.',
            skills: [
                await getImage({ src: reactIcon, format: 'svg' }),
                await getImage({
                    src: tailwindcssIcon,
                    format: 'svg',
                }),
            ],
            date: '2023-01-01',
            background: await getImage({ src: cloneNubank, format: 'png' }),
        },
    ]

    return (
        <section id="projects" className="px-22 my-20">
            <Title value="Projetos" />

            <div className="flex justify-between mt-16">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={{
                            ...project,
                            background: project.background.src,
                            skills: project.skills.map((skill) => skill.src),
                        }}
                    />
                ))}
            </div>
        </section>
    )
}
