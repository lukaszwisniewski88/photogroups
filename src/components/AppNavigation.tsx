import { Link } from '@tanstack/react-router'
import { Badge, Camera, Settings, ShoppingCart, UserRound } from 'lucide-react'

function ActiveBadge() {
  return (
    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
    </Badge>
  )
}

const pages: [string, string, JSX.Element][] = [
  ['/albums', "Albumy", <Camera className="h-5 w-5" />],
  ['/orders', "Zamówienia", <ShoppingCart className="h-5 w-5" />],
  ['/setting', "Ustawienia", <Settings className="h-5 w-5" />],
  ['/account', "Moje dane", <UserRound className="h-5 w-5" />]
] as const


export default function AppNavigation() {
  return (
    <nav className="grid gap-2 text-lg font-medium p-2  pt-4">
      {pages.map(page => (
        <Link
          key={page[0]}
          to={page[0]}
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground"
          activeProps={{
            className: 'bg-muted',
          }}
        >{(state) => (
          <>
            {page[2]} {page[1]}
            {state.isActive && <ActiveBadge />}
          </>
        )}
        </Link>

      ))}
    </nav>
  )
}
