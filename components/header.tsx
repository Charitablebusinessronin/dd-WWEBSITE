"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigation = [
  {
    name: "OUR COMMUNITY",
    href: "/community",
    submenu: [
      { name: "About Us", href: "/community/about" },
      { name: "Programs", href: "/community/programs" },
      { name: "Housing Cooperatives", href: "/housing-cooperatives" },
      { name: "Events", href: "/community/events" },
      { name: "News", href: "/community/news" },
    ],
  },
  {
    name: "MEMBERSHIP",
    href: "/membership",
    submenu: [
      { name: "Join", href: "/membership/join" },
      { name: "Benefits", href: "/membership/benefits" },
      { name: "Pricing", href: "/membership/pricing" },
      { name: "FAQ", href: "/membership/faq" },
    ],
  },
  {
    name: "MY DD ACCOUNT",
    href: "/account",
    submenu: [
      { name: "Login", href: "/account/login" },
      { name: "Register", href: "/account/register" },
      { name: "My Profile", href: "/account/profile" },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
    }
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 lg:px-8 border-b border-gray-200">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image7-vSIgtR83QL8pdO0YWqc84luCA59jGc.png"
            alt="Difference Driven Community Center Logo"
            width={48}
            height={48}
            className="mr-3"
          />
          <div className="flex flex-col">
            <span className="text-lg font-montserrat font-bold text-dark-gray uppercase leading-tight">
              Difference Driven
            </span>
            <span className="text-sm font-montserrat text-dark-gray uppercase leading-tight">Community Center</span>
          </div>
        </Link>

        <div className="hidden lg:flex lg:items-center">
          <nav className="flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={cn(
                    "text-sm font-semibold leading-6 transition-colors hover:text-accent px-2 py-2",
                    pathname.startsWith(item.href) ? "text-accent" : "text-dark-gray",
                  )}
                  onClick={() => toggleSubmenu(item.name)}
                >
                  {item.name}
                </button>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 hidden group-hover:block">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-dark-gray hover:bg-gray-100"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-dark-gray hidden lg:block">
            <Link href="/donate">DONATE TODAY</Link>
          </Button>
          <button
            type="button"
            className="ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-dark-gray lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-dark-gray/20" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image7-vSIgtR83QL8pdO0YWqc84luCA59jGc.png"
                alt="Difference Driven Community Center Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <div className="flex flex-col">
                <span className="text-base font-montserrat font-bold text-dark-gray uppercase leading-tight">
                  Difference Driven
                </span>
                <span className="text-xs font-montserrat text-dark-gray uppercase leading-tight">Community Center</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50",
                        pathname.startsWith(item.href) ? "text-accent" : "text-dark-gray",
                      )}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      {item.name}
                      {item.submenu && <span className="ml-2">{activeSubmenu === item.name ? "-" : "+"}</span>}
                    </button>
                    {item.submenu && activeSubmenu === item.name && (
                      <div className="mt-2 space-y-2 pl-7">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-dark-gray hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-dark-gray">
                  <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                    DONATE TODAY
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
