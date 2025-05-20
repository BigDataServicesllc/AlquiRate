import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

export default function LoginModal({ onClose }) {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then(onClose);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-3 text-gray-400 text-xl">&times;</button>
        <div className="flex flex-col items-center mb-4">
          <img src="/logo192.png" alt="AlquiRate" className="h-12 mb-2" />
          <h2 className="font-bold text-xl mb-2 text-blue-700">Iniciá sesión en AlquiRate</h2>
          <p className="text-gray-500 mb-4 text-center">Ingresá para calificar propiedades y ver tus reviews.</p>
        </div>
        <div className="flex flex-col gap-2">
          <input disabled className="p-2 border border-gray-300 rounded w-full mb-2 bg-gray-100" placeholder="Email (próximamente)" />
          <button disabled className="w-full bg-blue-300 py-2 rounded text-white font-semibold mb-2 cursor-not-allowed">
            Continuar
          </button>
          <div className="text-center text-gray-400 my-2">o ingresá con</div>
          <button
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded hover:bg-blue-50 transition font-medium"
            onClick={handleGoogleLogin}
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5" />
            Google
          </button>
          <button disabled className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-2 rounded text-gray-400 cursor-not-allowed">
            <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="h-5" /> Facebook
          </button>
          <button disabled className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-2 rounded text-gray-400 cursor-not-allowed">
            <img src="https://www.svgrepo.com/show/452211/apple.svg" alt="Apple" className="h-5" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}
