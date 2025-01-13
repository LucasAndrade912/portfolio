import Logo from './Logo'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="flex justify-between items-center pt-12 px-22">
            <Logo />
            <Navigation />
        </header>
    )
}
