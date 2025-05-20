import React, { useState } from 'react';
import LoginModal from './LoginModal';
import UserPanel from './UserPanel';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      <div className="text-2xl font-bold text-blue-700">AlquiRate</div>
      <div className="flex items-center gap-4">
        <UserPanel />
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          onClick={() => setShowLogin(true)}
        >
          Iniciar sesión
        </button>
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </div>
    </nav>
  );
}
