'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, fadeIn } from '@/lib/animations'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/fotosinterior/foto1.jpeg', alt: 'Equipo seca de análisis de composición corporal' },
  { src: '/fotosinterior/foto2.jpeg', alt: 'Sala de espera Sky Clínica Metabólica' },
  { src: '/fotosinterior/foto3.jpeg', alt: 'Recepción Sky Clínica Metabólica' },
]

export default function About() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + photos.length) % photos.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % photos.length)
  }

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
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text */}
          <motion.div variants={fadeInUp}>
            <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-widest mb-3 block">
              Quiénes somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-5 leading-tight">
              El primer centro de composición corporal en Paraguay
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
              Somos el primer centro especializado en análisis de composición corporal en Paraguay,
              enfocado en la evaluación precisa del estado metabólico y la optimización de la salud integral.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Trabajamos con la prestigiosa marca alemana <strong className="text-dark">seca</strong>,
              líder mundial en tecnología médica, que permite medir con alta precisión la masa muscular,
              grasa corporal, grasa visceral, hidratación y más parámetros clave para el manejo integral del paciente.
            </p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
                  exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.35 } }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={photos[current].src}
                  alt={photos[current].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <button onClick={prev} aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow">
              <ChevronLeft size={16} className="text-dark" />
            </button>
            <button onClick={next} aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow">
              <ChevronRight size={16} className="text-dark" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button key={i} onClick={() => go(i)} aria-label={`Foto ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/50'}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
