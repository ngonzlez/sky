'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/about' },
  { label: 'Servicios', href: '/services' },
  { label: 'Equipo', href: '/staff' },
]

const WA_LINK = 'https://wa.me/595972324258'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/90 backdrop-blur-sm'
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Sky Clínica Metabólica" width={140} height={40} className="h-9 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-sm font-medium text-dark hover:text-primary-600 transition-colors">
                {l.label}
              </Link>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors">
              Reservá tu consulta
            </a>
          </div>
          <button className="md:hidden p-2 text-dark" onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)}
              className="text-sm font-medium py-2 border-b border-gray-100 last:border-0 text-dark">
              {l.label}
            </Link>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
            className="bg-primary-500 text-white px-4 py-3 rounded-full text-center text-sm font-medium mt-1">
            Reservá tu consulta
          </a>
        </div>
      )}
    </nav>
  )
}
