export default function Navigation() {
    const links = [
        { label: 'Sobre Mim', to: '#about-me' },
        { label: 'Habilidades', to: '#skills' },
        { label: 'Projetos', to: '#projects' },
        { label: 'Contato', to: '#contact' },
    ]

    return (
        <ul className="flex font-oswald text-lg text-zinc-200 gap-12">
            {links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.to}
                        className="underline decoration-secondary underline-offset-8 hover:text-white transition-colors">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}
