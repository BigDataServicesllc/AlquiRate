import React from 'react';
import { motion } from 'framer-motion';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tu aliado al alquilar.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Calificá propiedades, consultá precios y decidí con datos reales.
          </p>
          <button 
            onClick={() => setCurrentPage('addReview')}
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Calificar una propiedad
          </button>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona AlquiRate?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        index === 0
                          ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          : index === 1
                          ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          : "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      }
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {index === 0
                    ? 'Consulta propiedades'
                    : index === 1
                    ? 'Decidí informado'
                    : 'Compartí tu experiencia'}
                </h3>
                <p className="text-gray-600">
                  {index === 0
                    ? 'Encontrá propiedades en alquiler y accedé a sus calificaciones y reseñas de inquilinos anteriores.'
                    : index === 1
                    ? 'Conocé la experiencia real de otros inquilinos y tomá decisiones con información transparente.'
                    : 'Después de alquilar, calificá la propiedad y al propietario para ayudar a futuros inquilinos.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-blue-600 text-white"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">¿Has alquilado recientemente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compartí tu experiencia y ayudá a otros inquilinos a tomar mejores decisiones.
          </p>
          <button 
            onClick={() => setCurrentPage('addReview')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Calificar una propiedad
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
