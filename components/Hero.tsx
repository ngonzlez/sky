'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, BarChart3, HeartPulse } from 'lucide-react'
import Image from 'next/image'

const WA_LINK = 'https://wa.me/595972324258'

const stats = [
  { icon: Activity, label: 'Composición corporal', value: 'mBCA seca' },
  { icon: BarChart3, label: 'Mediciones precisas', value: '+10 parámetros' },
  { icon: HeartPulse, label: 'Centro especializado', value: 'N°1 Paraguay' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-14 md:pt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #bae6fd 80%, #7dd3fc 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} />
      <div className="absolute bottom-10 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-primary-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-5 border border-primary-200"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              mBCA seca Center Paraguay
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tu salud metabólica,{' '}
              <span className="text-primary-600">medida con precisión científica</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              El primer centro especializado en análisis de composición corporal en Paraguay,
              enfocado en la evaluación precisa de tu estado metabólico.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-5 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all shadow-md hover:shadow-lg">
                Reservá tu consulta <ArrowRight size={17} />
              </a>
              <a href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm text-dark px-5 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white transition-all border border-primary-200">
                Conocernos más
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-sm border border-white/60" />
              <Image
                src="/logo.png"
                alt="Sky Clínica Metabólica"
                fill
                className="object-contain p-12"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/80">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Icon size={18} className="text-primary-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-dark">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
