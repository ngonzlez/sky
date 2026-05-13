import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-16">
        <Services />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
