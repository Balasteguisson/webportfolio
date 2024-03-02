import '@/styles/layout.css'
import PortfolioNavigation from '@/components/portfolioNavigation'
import Image from 'next/image'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="parentLayout">
      <div className="headerDiv">
        <div className="logo">
          <p>Guillermo.</p>
          <Image src='/nobcLogo.png' alt='Logo personal de Guillermo' width={180} height={60}/>
        </div>
        <PortfolioNavigation></PortfolioNavigation>
      </div>
      <div>{children}</div>
    </div>
  )
}
