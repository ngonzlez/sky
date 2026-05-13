'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from '@/lib/animations'
import Image from 'next/image'
import { Clock, Video } from 'lucide-react'

const team = [
  {
    name: 'Dr. Isaac Benítez',
    role: 'Esp. Clínica Médica y Ecografía Cardiovascular · Medicina del Deporte',
    photo: '/staff/isaac.png',
    schedule: 'Martes y Jueves · 15:00 a 20:30 hs',
    modality: 'Presencial y teleconsulta',
    services: [
      'Asesoramiento y seguimiento en descenso de peso con inyectables',
      'Consultas clínicas y para deportistas',
      'Ecodoppler de vasos de cuello',
      'Ecocardiografías',
      'Electrocardiogramas',
    ],
  },
]

export default function Staff() {
  return (
    <motion.section
      id="staff"
      className="py-14 md:py-20 bg-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-10 md:mb-14" variants={fadeInUp}>
          <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 block">
            Nuestro equipo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-3">
            Profesionales apasionados por tu salud
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
            Equipo médico especializado con atención presencial y teleconsulta disponible.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Photo */}
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 flex items-end justify-center min-h-56 md:min-h-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={280}
                    height={320}
                    className="object-contain object-bottom w-full max-h-72 md:max-h-full"
                  />
                </div>

                {/* Info */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark mb-1">{member.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{member.role}</p>
                  </div>

                  {/* Schedule + modality */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2 bg-primary-50 rounded-xl px-4 py-2.5 border border-primary-100">
                      <Clock size={15} className="text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-dark font-medium">{member.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 rounded-xl px-4 py-2.5 border border-green-100">
                      <Video size={15} className="text-green-600 flex-shrink-0" />
                      <span className="text-sm text-green-700 font-medium">{member.modality}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-xs font-semibold text-dark uppercase tracking-wider mb-2">Servicios</p>
                    <ul className="flex flex-col gap-1.5">
                      {member.services.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
