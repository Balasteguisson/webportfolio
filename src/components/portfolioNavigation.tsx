import Link from "next/link"
import '@/styles/navbar.css'

const pages = [
    { name: "Home", href: "/home"},
    { name: "About me", href: "/home/aboutme"},
    { name: "Portfolio", href: "/home/portfolio"},
    { name: "Contact", href: "/home/contact"}
]

export default function PortfolioNavigation () {
    return (
        <div className="container">
            {pages.map((page => {
                return (
                    <Link className="navItem" key={page.name} href={page.href}>{page.name}</Link>
                )
            }))}
        </div>
    )
}