import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
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
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona AlquiRate?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulta propiedades</h3>
              <p className="text-gray-600">
                Encontrá propiedades en alquiler y accedé a sus calificaciones y reseñas de inquilinos anteriores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Decidí informado</h3>
              <p className="text-gray-600">
                Conocé la experiencia real de otros inquilinos y tomá decisiones con información transparente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compartí tu experiencia</h3>
              <p className="text-gray-600">
                Después de alquilar, calificá la propiedad y al propietario para ayudar a futuros inquilinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
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
      </section>
    </div>
  );
};

export default HomePage;
