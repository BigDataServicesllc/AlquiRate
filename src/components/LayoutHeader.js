import React, { useState } from 'react';
import LoginModal from './LoginModal'; // asegúrate de tener este componente

const LayoutHeader = ({ currentPage, setCurrentPage, isLoggedIn, onLogin, onLogout }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleCloseModal = () => {
    setShowLogin(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          AlquiRate
        </h1>

        {/* Navegación */}
        <nav className="space-x-6">
          <button onClick={() => setCurrentPage('home')} className="hover:underline">
            Inicio
          </button>
          <button onClick={() => setCurrentPage('rankings')} className="hover:underline">
            Rankings
          </button>
          <button onClick={() => setCurrentPage('addReview')} className="hover:underline">
            Calificar
          </button>
        </nav>

        {/* Botón de login / logout */}
        {isLoggedIn ? (
          <button onClick={onLogout} className="bg-red-500 text-white px-4 py-1 rounded">
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        )}
      </div>

      {/* Renderiza el modal sólo si showLogin === true */}
      {showLogin && <LoginModal onClose={handleCloseModal} />}
    </header>
  );
};

export default LayoutHeader;
