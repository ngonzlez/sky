import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Enfoque from '@/components/Enfoque'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-16">
        <About />
        <Enfoque />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
