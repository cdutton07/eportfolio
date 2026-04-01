import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { links, profile } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

function GitHubLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.19.78.84 1.24 1.92 1.24 3.23 0 4.6-2.81 5.62-5.49 5.91.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 9.5h4v11H3v-11Zm7 0h3.83v1.5h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16v5.39h-4v-4.78c0-1.14-.02-2.62-1.6-2.62s-1.84 1.25-1.84 2.54v4.86h-4v-11Z" />
    </svg>
  )
}

function SiteNavLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={cn('flex items-center gap-2', mobile && 'flex-col items-start')}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export function SiteLayout() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,#fbe3b5_0%,transparent_36%),radial-gradient(circle_at_80%_20%,#c7efe8_0%,transparent_34%),linear-gradient(180deg,#f8f2e6_0%,#fffdf9_100%)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="leading-tight">
            <p className="text-xs uppercase tracking-[0.24em] text-foreground/60">My Portfolio</p>
            <p className="font-heading text-xl font-bold tracking-tight">{profile.name}</p>
          </Link>

          <div className="hidden md:block">
            <SiteNavLinks />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation menu"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background',
                  'outline-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                )}
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] max-w-sm">
                <SheetHeader>
                  <SheetTitle>{profile.name}</SheetTitle>
                  <SheetDescription>Navigate portfolio sections</SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <SiteNavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <Outlet />
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6">
        <Separator className="mb-5 bg-black/20" />
        <div className="flex flex-col gap-2 text-sm text-foreground/75 md:flex-row md:items-center md:justify-between">
          <p>{profile.name} | Computer Engineering | Georgia Tech</p>
          <div className="flex items-center gap-3">
            <p>{profile.email} | {profile.phone}</p>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <LinkedInLogo className="h-5 w-5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <GitHubLogo className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
