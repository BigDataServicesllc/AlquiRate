import React from 'react';
// No necesitamos mock data ni formatters por ahora
// import { properties } from '../mock/properties';
// import { formatPrice, formatRating } from '../utils/formatters';

const HomePage = ({ setCurrentPage }) => {
  // No necesitamos featuredProperties por ahora
  // const featuredProperties = properties.slice(0, 3);

  return (
    <div className="pt-16"> {/* Add padding top to account for fixed header */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alquila con confianza, decide informado
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              La plataforma más sencilla para alquileres en Argentina. {/* Texto corregido a Argentina */}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={() => setCurrentPage('listings')}
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Buscar propiedades
              </button>
              <button 
                onClick={() => setCurrentPage('addReview')}
                className="bg-transparent hover:bg-blue-700 border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Calificar una propiedad
              </button>
            </div>
          </div>
          
          {/* Quitamos la búsqueda rápida por ahora */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Búsqueda rápida</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Selecciona una ciudad</option>
                  <option value="buenos-aires">Buenos Aires</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="rosario">Rosario</option>
                  <option value="mendoza">Mendoza</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Selecciona un barrio</option>
                  <option value="palermo">Palermo</option>
                  <option value="recoleta">Recoleta</option>
                  <option value="belgrano">Belgrano</option>
                  <option value="caballito">Caballito</option>
                </select>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Buscar
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona AlquiRate?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Busca propiedades</h3>
              <p className="text-gray-600">
                Encuentra propiedades en alquiler y consulta sus calificaciones y reseñas de inquilinos anteriores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Decide informado</h3>
              <p className="text-gray-600">
                Conoce la experiencia real de otros inquilinos y toma decisiones basadas en información transparente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Comparte tu experiencia</h3>
              <p className="text-gray-600">
                Después de alquilar, califica la propiedad y al propietario para ayudar a futuros inquilinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quitamos propiedades destacadas y testimonios por ahora */}
      {/* Featured Properties */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Propiedades destacadas</h2>
            <button 
              onClick={() => setCurrentPage('listings')}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              Ver todas
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="relative h-48">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
                    {formatPrice(property.price)}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-500 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1 font-semibold">{formatRating(property.propertyRating)}</span>
                      <span className="text-gray-500 ml-1">({property.reviews.length} reseñas)</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        {property.bedrooms}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {property.bathrooms}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path>
                        </svg>
                        {property.area}m²
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setCurrentPage('propertyDetail');
                      // Aquí podrías establecer la propiedad seleccionada
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/12.jpg" 
                  alt="Usuario" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Laura Fernández</h4>
                  <p className="text-gray-500 text-sm">Buenos Aires</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Gracias a AlquiRate pude evitar alquilar una propiedad con problemas de humedad. Las reseñas de otros inquilinos me salvaron de un mal momento y encontré un lugar mucho mejor."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Usuario" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Martín Rodríguez</h4>
                  <p className="text-gray-500 text-sm">Córdoba</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Como estudiante con presupuesto limitado, el ranking de precios por zona me ayudó a encontrar opciones accesibles en buenos barrios. Ahora califico todas las propiedades donde vivo para ayudar a otros."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">¿Has alquilado recientemente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comparte tu experiencia y ayuda a otros inquilinos a tomar mejores decisiones.
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

// DONE