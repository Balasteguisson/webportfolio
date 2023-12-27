import '@/styles/layout.css'
import PortfolioNavigation from '@/components/portfolioNavigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="parentLayout">
      <div className="headerDiv">
        <div className="logo">Guillermo.</div>
        <PortfolioNavigation></PortfolioNavigation>
      </div>
      <div>{children}</div>
    </div>
  )
}
