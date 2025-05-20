// src/components/LayoutHeader.js
import React from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage, isLoggedIn, onLogin, onLogout }) => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo / Home */}
      <div
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => setCurrentPage('home')}
      >
        AlquiRate
      </div>

      {/* Navegación */}
      <nav className="flex space-x-6">
        <button
          className={`hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Inicio
        </button>
        <button
          className={`hover:text-blue-600 ${currentPage === 'rankings' ? 'text-blue-600' : ''}`}
          onClick={() => setCurrentPage('rankings')}
        >
          Rankings
        </button>
        <button
          className={`hover:text-blue-600 ${currentPage === 'addReview' ? 'text-blue-600' : ''}`}
          onClick={() => setCurrentPage('addReview')}
        >
          Calificar
        </button>
      </nav>

      {/* Botón de sesión */}
      <div>
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  </header>
);

export default LayoutHeader;
