import React from 'react';

const LoginModal = ({ isOpen, onClose, onGoogleLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <p className="mb-6 text-gray-600">
          Ingresa con tu cuenta para consultar y dejar reseñas.
        </p>
        <button
          onClick={onGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mb-4 hover:bg-gray-100"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="w-6 h-6 mr-2"
          />
          Continuar con Google
        </button>
        <button
          onClick={onClose}
          className="w-full text-center text-blue-600 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
