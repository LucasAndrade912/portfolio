import { getImage } from 'astro:assets'

import Title from './Title'
import html5Icon from '../assets/icons/html5-icon.svg'
import css3Icon from '../assets/icons/css3-icon.svg'
import javascriptIcon from '../assets/icons/javascript-icon.svg'
import typescriptIcon from '../assets/icons/typescript-icon.svg'
import reactIcon from '../assets/icons/react-icon.svg'
import nodejsIcon from '../assets/icons/nodejs-icon.svg'
import angularIcon from '../assets/icons/angular-icon.svg'
import vuejsIcon from '../assets/icons/vuejs-icon.svg'
import tailwindcssIcon from '../assets/icons/tailwindcss-icon.svg'
import pythonIcon from '../assets/icons/python-icon.svg'
import javaIcon from '../assets/icons/java-icon.svg'
import figmaIcon from '../assets/icons/figma-icon.svg'
import SkillCard from './SkillCard'

export default async function SkillsSection() {
    const skills = [
        {
            title: 'HTML5',
            icon: await getImage({ src: html5Icon, format: 'svg' }),
        },
        {
            title: 'CSS3',
            icon: await getImage({ src: css3Icon, format: 'svg' }),
        },
        {
            title: 'Javascript',
            icon: await getImage({
                src: javascriptIcon,
                format: 'svg',
            }),
        },
        {
            title: 'Typescript',
            icon: await getImage({
                src: typescriptIcon,
                format: 'svg',
            }),
        },
        {
            title: 'Nodejs',
            icon: await getImage({
                src: nodejsIcon,
                format: 'svg',
            }),
        },
        {
            title: 'React',
            icon: await getImage({ src: reactIcon, format: 'svg' }),
        },
        {
            title: 'Angular',
            icon: await getImage({
                src: angularIcon,
                format: 'svg',
            }),
        },
        {
            title: 'Vue',
            icon: await getImage({ src: vuejsIcon, format: 'svg' }),
        },
        {
            title: 'Tailwind',
            icon: await getImage({
                src: tailwindcssIcon,
                format: 'svg',
            }),
        },
        {
            title: 'Python',
            icon: await getImage({
                src: pythonIcon,
                format: 'svg',
            }),
        },
        {
            title: 'Java',
            icon: await getImage({ src: javaIcon, format: 'svg' }),
        },
        {
            title: 'Figma',
            icon: await getImage({ src: figmaIcon, format: 'svg' }),
        },
    ]

    return (
        <section id="skills" className="px-22 py-12 bg-zinc-900">
            <Title value="Habilidades" />

            <ul className="mt-16 grid grid-cols-6 grid-rows-2 w-full gap-y-20 gap-x-14">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <SkillCard title={skill.title} icon={skill.icon.src} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
