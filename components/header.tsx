import Logo from "@/components/logo"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="#about">About Us</a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="#contact">Contact</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
