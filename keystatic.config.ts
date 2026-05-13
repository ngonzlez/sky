import { config, collection, fields, singleton } from '@keystatic/core'

export default config({
  storage:
    process.env.KEYSTATIC_STORAGE === 'github'
      ? { kind: 'github', repo: { owner: 'ngonzlez', name: 'sky' } }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Sky Clínica Metabólica' },
    navigation: {
      'Equipo médico': ['staff'],
      Contenido: ['services', 'gallery'],
      Configuración: ['siteConfig'],
    },
  },

  collections: {
    staff: collection({
      label: 'Staff médico',
      slugField: 'name',
      path: 'content/staff/*',
      format: { data: 'json' },
      entryLayout: 'content',
      schema: {
        name: fields.slug({ name: { label: 'Nombre completo' } }),
        role: fields.text({ label: 'Especialidad / Rol' }),
        photo: fields.image({
          label: 'Foto',
          directory: 'public/staff',
          publicPath: '/staff/',
        }),
        schedule: fields.text({ label: 'Horario de atención', description: 'Ej: Martes y Jueves · 15:00 a 20:30 hs' }),
        modality: fields.text({ label: 'Modalidad', description: 'Ej: Presencial y teleconsulta' }),
        services: fields.array(
          fields.text({ label: 'Servicio' }),
          { label: 'Servicios que ofrece', itemLabel: (props) => props.value }
        ),
      },
    }),
  },

  singletons: {
    services: singleton({
      label: 'Servicios de la clínica',
      path: 'content/services',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Nombre del servicio' }),
            desc: fields.text({ label: 'Descripción', multiline: true }),
            icon: fields.select({
              label: 'Ícono',
              options: [
                { label: 'Gráfico de barras', value: 'BarChart3' },
                { label: 'ADN / Genética', value: 'Dna' },
                { label: 'Balanza / Peso', value: 'Scale' },
                { label: 'Nutrición', value: 'Utensils' },
                { label: 'Corazón / Salud', value: 'HeartPulse' },
                { label: 'Calendario / Seguimiento', value: 'CalendarCheck' },
                { label: 'Microscopio', value: 'Microscope' },
                { label: 'Actividad', value: 'Activity' },
              ],
              defaultValue: 'BarChart3',
            }),
          }),
          { label: 'Servicios', itemLabel: (props) => props.fields.title.value }
        ),
      },
    }),

    gallery: singleton({
      label: 'Fotos de la clínica',
      path: 'content/gallery',
      format: { data: 'json' },
      schema: {
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: 'Foto',
              directory: 'public/fotosinterior',
              publicPath: '/fotosinterior/',
            }),
            alt: fields.text({ label: 'Descripción de la foto' }),
          }),
          { label: 'Fotos', itemLabel: (props) => props.fields.alt.value }
        ),
      },
    }),

    siteConfig: singleton({
      label: 'Configuración general',
      path: 'content/config',
      format: { data: 'json' },
      schema: {
        whatsapp: fields.text({
          label: 'Número de WhatsApp',
          description: 'Sin + ni espacios. Ej: 595972324258',
        }),
        address: fields.text({
          label: 'Dirección',
          multiline: true,
        }),
        instagram: fields.url({ label: 'Link de Instagram' }),
        instagramHandle: fields.text({ label: 'Nombre en Instagram', description: 'Ej: @skyclinicametabolica' }),
      },
    }),
  },
})
