import Navbar from '@/components/Navbar'
import Staff from '@/components/Staff'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function StaffPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-16">
        <Staff />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
