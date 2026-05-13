'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from '@/lib/animations'

const team = [
  { name: 'Dr. Nombre Apellido', role: 'Médico especialista en metabolismo', initials: 'NA' },
  { name: 'Dra. Nombre Apellido', role: 'Nutricionista clínica', initials: 'NA' },
  { name: 'Lic. Nombre Apellido', role: 'Especialista en composición corporal', initials: 'NA' },
  { name: 'Lic. Nombre Apellido', role: 'Coordinadora médica', initials: 'NA' },
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
            Contamos con un equipo multidisciplinario de especialistas comprometidos con
            la salud metabólica y el bienestar integral de cada paciente.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div key={member.name + member.role} variants={fadeInUp} className="text-center">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 overflow-hidden bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                <span className="text-white text-2xl sm:text-3xl font-bold">{member.initials}</span>
              </div>
              <p className="font-semibold text-dark text-sm sm:text-base">{member.name}</p>
              <p className="text-muted text-xs sm:text-sm mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-xs text-muted mt-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          * Nombres del equipo se actualizarán con la información real del staff.
        </motion.p>
      </div>
    </motion.section>
  )
}
