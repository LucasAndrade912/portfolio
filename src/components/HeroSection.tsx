import { getImage } from 'astro:assets'

import photo from '../assets/lucas-andrade-photo.png'

export default async function HeroSection() {
    const photoOpitmized = await getImage({ src: photo, format: 'png' })

    return (
        <section
            id="about-me"
            className="px-22 my-20 flex justify-between items-center gap-16 2xl:gap-20">
            <div className="text-white font-lato">
                <h1 className="text-[64px] leading-tight">
                    Opa, tudo bem?
                    <br /> Eu sou{' '}
                    <span className="text-primary font-semibold">Lucas Andrade</span> :)
                </h1>

                <p className="mt-16 text-lg leading-loose">
                    Desenvolvedor fullstack com experiência em React, Angular, Vue,
                    Node.js, TypeScript, HTML, CSS e design de projetos no Figma.
                    Apaixonado por criar aplicações inovadoras, modernas e responsivas,
                    atuo em todo o ciclo de desenvolvimento, do frontend ao backend.
                </p>
            </div>

            <div className="bg-primary rounded-full min-w-[420px] h-[420px] 2xl:min-w-[512px] 2xl:h-[512px] overflow-hidden flex justify-center items-end ring-4 ring-secondary ring-offset-4 ring-offset-zinc-800">
                <img
                    src={photoOpitmized.src}
                    alt="Foto de Lucas Andrade"
                    className="w-11/12"
                />
            </div>
        </section>
    )
}
