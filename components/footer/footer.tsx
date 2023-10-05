import { memo } from 'react'

import { LogoSymbol } from '@/components/logo/logo'
import { Link } from '@ui/link/link'

export type FooterProps = Record<string, unknown>

export const Footer = memo(function Footer() {
  return (
    <footer className="mt-auto">
      <div className=" bg-neutral-lightest justify-between px-20 py-24 laptop:flex"></div>

      <div className="bg-brand-black flex flex-col items-center justify-center gap-3 py-8 laptop:py-9">
        <Link href="/" title="Spencer and Williams">
          <LogoSymbol />
        </Link>

        <ul className="text-white text-center laptop:hidden">
          <li>
            <Link href="/" title="Home" className="block p-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" title="About Us" className="block p-4">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" title="Contactanos" className="block p-4">
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
})
