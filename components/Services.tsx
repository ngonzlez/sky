'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from '@/lib/animations'
import { BarChart3, Dna, Utensils, CalendarCheck, Scale, HeartPulse, Microscope, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import servicesData from '@/content/services.json'

const iconMap: Record<string, LucideIcon> = {
  BarChart3, Dna, Utensils, CalendarCheck, Scale, HeartPulse, Microscope, Activity,
}

const colorMap: Record<string, string> = {
  BarChart3:    'bg-sky-50 text-sky-600 border-sky-100',
  Dna:          'bg-indigo-50 text-indigo-600 border-indigo-100',
  Scale:        'bg-teal-50 text-teal-600 border-teal-100',
  Utensils:     'bg-green-50 text-green-600 border-green-100',
  HeartPulse:   'bg-rose-50 text-rose-600 border-rose-100',
  CalendarCheck:'bg-amber-50 text-amber-600 border-amber-100',
  Microscope:   'bg-purple-50 text-purple-600 border-purple-100',
  Activity:     'bg-cyan-50 text-cyan-600 border-cyan-100',
}

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-14 md:py-20 bg-gray-50"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-10 md:mb-14" variants={fadeInUp}>
          <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 block">
            Nuestros servicios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-3">
            Tecnología de punta para tu salud
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
            Todos nuestros análisis utilizan equipos seca certificados internacionalmente
            para garantizar la máxima precisión en cada medición.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.items.map(({ icon, title, desc }) => {
            const Icon = iconMap[icon] ?? BarChart3
            const color = colorMap[icon] ?? 'bg-sky-50 text-sky-600 border-sky-100'
            return (
              <motion.div key={title} variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-dark text-base mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
