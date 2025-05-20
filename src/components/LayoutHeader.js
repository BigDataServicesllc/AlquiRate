import React, { useState } from 'react';

+ import LoginModal from './LoginModal';

const LayoutHeader = ({ currentPage, setCurrentPage, isLoggedIn, onLogin, onLogout }) => {
+ const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            AlquiRate
          </div>

          <nav className="flex space-x-6">
            {/* … tus botones de navegación … */}
          </nav>

          <div>
-           {isLoggedIn ? (
-             <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
-               Cerrar sesión
-             </button>
-           ) : (
-             <button onClick={onLogin} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
-               Iniciar sesión
-             </button>
-           )}
+           {isLoggedIn ? (
+             <button
+               onClick={onLogout}
+               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
+             >
+               Cerrar sesión
+             </button>
+           ) : (
+             <button
+               onClick={() => setShowLogin(true)}
+               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
+             >
+               Iniciar sesión
+             </button>
+           )}
          </div>
        </div>
      </header>

+     <LoginModal
+       isOpen={showLogin}
+       onClose={() => setShowLogin(false)}
+       onGoogleLogin={() => {
+         setShowLogin(false);
+         onLogin(); // aquí disparas tu flujo de Google
+       }}
+     />
    </>
  );
};

export default LayoutHeader;
