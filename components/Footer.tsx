import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import siteConfig from '@/content/config.json'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/about' },
  { label: 'Servicios', href: '/services' },
  { label: 'Equipo', href: '/staff' },
]

const WA_LINK = `https://wa.me/${siteConfig.whatsapp}`

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.png" alt="Sky Clínica Metabólica" width={140} height={40}
              className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-white/60 leading-relaxed">
              El primer centro especializado en análisis de composición corporal en Paraguay.
              mBCA seca Center Paraguay.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Navegación</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Contacto</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-primary-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={15} className="flex-shrink-0 text-primary-400" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  0{siteConfig.whatsapp.slice(3)}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-primary-400 flex-shrink-0">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Sky Clínica Metabólica. Todos los derechos reservados.</p>
          <p className="text-xs text-white/40">mBCA seca Center Paraguay</p>
        </div>
      </div>
    </footer>
  )
}
