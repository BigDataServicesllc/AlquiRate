<section className="py-16 px-4 bg-gray-50">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona AlquiRate?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
          title: "Calificá tu propiedad",
          description:
            "Contanos cómo fue tu experiencia como inquilino. Valorá al propietario, al inmueble y ayudá a otros a tomar mejores decisiones.",
        },
        {
          iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
          title: "Consultá el ranking por zona",
          description:
            "Mirá qué barrios tienen los mejores precios y calificaciones. Accedé a información real, basada en experiencias reales.",
        },
        {
          iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          title: "Decidí informado",
          description:
            "Usá AlquiRate como guía. Leé comentarios, compará zonas y elegí tu próximo alquiler con confianza.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-[1.03] duration-300"
        >
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={card.iconPath}
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
