import React, { useState } from 'react'
import LoginModal from './LoginModal'

const LayoutHeader = ({ currentPage, setCurrentPage, isLoggedIn, onLogin, onLogout }) => {
  const [showLogin, setShowLogin] = useState(false)

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

        {/* Nav */}
        <nav className="space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className={currentPage === 'home' ? 'text-blue-600' : 'hover:underline'}
          >
            Inicio
          </button>
          <button
            onClick={() => setCurrentPage('rankings')}
            className={currentPage === 'rankings' ? 'text-blue-600' : 'hover:underline'}
          >
            Rankings
          </button>
          <button
            onClick={() => setCurrentPage('addReview')}
            className={currentPage === 'addReview' ? 'text-blue-600' : 'hover:underline'}
          >
            Calificar
          </button>
        </nav>

        {/* Login/Logout */}
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        )}
      </div>

      {/* Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSubmit={(userData) => {
            onLogin(userData)
            setShowLogin(false)
          }}
        />
      )}
    </header>
  )
}

export default LayoutHeader
