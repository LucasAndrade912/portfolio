import { getImage } from 'astro:assets'

import Logo from './Logo'
import githubIcon from '../assets/icons/github-icon.svg'
import linkedinIcon from '../assets/icons/linkedin-icon.svg'
import mailIcon from '../assets/icons/mail-icon.svg'

export default async function Footer() {
    const links = [
        {
            title: 'Email',
            to: 'mailto:lucasantos.dev@gmail.com',
            icon: await getImage({ src: mailIcon, format: 'svg' }),
        },
        {
            title: 'Linkedin',
            to: 'https://linkedin.com/in/lucasandrade912',
            icon: await getImage({ src: linkedinIcon, format: 'svg' }),
        },
        {
            title: 'Github',
            to: 'https://github.com/lucasandrade912',
            icon: await getImage({ src: githubIcon, format: 'svg' }),
        },
    ]

    return (
        <footer
            id="contact"
            className="flex w-full justify-between bg-zinc-900 px-22 py-12">
            <Logo />

            <ul className="flex gap-10">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="w-10 h-10 p-2 rounded bg-zinc-600 flex justify-center items-center">
                        <a href={link.to} target="_blank" rel="noreferrer">
                            <img
                                src={link.icon.src}
                                alt={link.title}
                                className="w-8 h-8"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
