'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, stagger } from '@/lib/animations'
import { CheckCircle2, Award, Microscope } from 'lucide-react'

const pillars = [
  {
    icon: Microscope,
    title: 'Tecnología seca',
    desc: 'Equipos alemanes de última generación para mediciones altamente precisas de composición corporal.',
  },
  {
    icon: Award,
    title: 'Estándares internacionales',
    desc: 'Parte de la red global de centros especializados en composición corporal con los más altos estándares.',
  },
  {
    icon: CheckCircle2,
    title: 'Atención personalizada',
    desc: 'Cada paciente recibe un análisis completo adaptado a sus objetivos de salud y bienestar.',
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-14 md:py-20 bg-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp}>
            <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 block">
              Quiénes somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight">
              El primer centro de composición corporal en Paraguay
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
              Es el primer centro especializado en análisis de composición corporal en Paraguay,
              enfocado en la evaluación precisa del estado metabólico y la optimización de la salud integral.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
              Trabajamos de la mano con la prestigiosa marca alemana <strong className="text-dark">seca</strong>,
              líder mundial en tecnología médica, cuyos equipos permiten obtener mediciones altamente precisas
              y confiables de la masa muscular, grasa corporal total, grasa visceral, estado de hidratación
              y otros parámetros útiles para el manejo integral del paciente.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Nuestro enfoque combina <strong className="text-dark">ciencia, innovación y atención personalizada</strong>,
              brindando herramientas concretas para mejorar la calidad de vida, prevenir enfermedades y
              potenciar el bienestar de cada paciente.
            </p>
          </motion.div>

          <div>
            <motion.div
              className="flex flex-col gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pillars.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeInUp}
                  className="flex gap-4 p-5 rounded-2xl bg-primary-50 border border-primary-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark text-sm sm:text-base mb-1">{title}</h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
