import Navbar from '@/components/Navbar'
import StaffList from '@/components/StaffList'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

export default async function StaffPage() {
  const reader = createReader(process.cwd(), keystaticConfig)
  const entries = await reader.collections.staff.all()

  const team = entries.map((entry) => ({
    name: typeof entry.entry.name === 'string' ? entry.entry.name : (entry.entry.name as { name: string }).name,
    role: entry.entry.role,
    photo: entry.entry.photo ?? null,
    schedule: entry.entry.schedule,
    modality: entry.entry.modality,
    services: entry.entry.services,
  }))

  return (
    <main>
      <Navbar />
      <div className="pt-14 md:pt-16">
        <StaffList team={team} />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
