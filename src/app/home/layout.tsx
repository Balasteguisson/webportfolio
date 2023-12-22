import '@/styles/aboutmeheader.css'
import PortfolioNavigation from '@/components/portfolioNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div className="headerDiv">
          <div className="logo">Guillermo.</div>
          <nav className="breadCrumbs">
            <PortfolioNavigation></PortfolioNavigation>
          </nav>
        </div>
        <div>{children}</div>
    </div>
  )
}
