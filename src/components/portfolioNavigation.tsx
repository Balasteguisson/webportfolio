'use client';
import Link from "next/link"
import '@/styles/navbar.css'
import { usePathname } from "next/navigation";
const pages = [
    { name: "Home", href: "/home"},
    { name: "About me", href: "/home/aboutme"},
    { name: "Portfolio", href: "/home/portfolio"},
    { name: "Contact", href: "/home/contact"}
]

export default function PortfolioNavigation () {
    const pathName = usePathname();
    
    
    return (
        <nav className="container">
            {pages.map((page => {
                var className = pathName === page.href ? 'navItemActive' : 'navItem';
                return (
                    <Link className={className} key={page.name} href={page.href}>{page.name}</Link>
                )
            }))}
        </nav>
    )
}