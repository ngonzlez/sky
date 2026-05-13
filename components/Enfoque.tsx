'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from '@/lib/animations'
import { Microscope, Award, CheckCircle2 } from 'lucide-react'

const pillars = [
  {
    icon: Microscope,
    title: 'Tecnología seca',
    desc: 'Equipos alemanes de última generación para mediciones altamente precisas de composición corporal.',
  },
  {
    icon: Award,
    title: 'Estándares internacionales',
    desc: 'Parte del equipo internacional de instituciones especializadas en composición corporal, alineadas con los más altos estándares de calidad y excelencia médica.',
  },
  {
    icon: CheckCircle2,
    title: 'Atención personalizada',
    desc: 'Cada paciente recibe un análisis completo adaptado a sus objetivos de salud y bienestar.',
  },
]

export default function Enfoque() {
  return (
    <motion.section
      id="enfoque"
      className="py-14 md:py-20 bg-primary-50"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div className="max-w-2xl mb-10 md:mb-14" variants={fadeInUp}>
          <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 block">
            Nuestro enfoque
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight">
            Ciencia, innovación y atención personalizada
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
            Combinamos ciencia, innovación y atención personalizada, brindando herramientas concretas
            para mejorar la calidad de vida, prevenir enfermedades y potenciar el bienestar de cada paciente.
          </p>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Sky Clínica Metabólica forma parte de un equipo internacional de instituciones especializadas
            en composición corporal, alineadas con los más altos estándares de calidad, innovación y excelencia médica.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeInUp}
              className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-dark text-sm sm:text-base mb-2">{title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
