
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

export default function LoginButton() {
  const login = () => {
    signInWithPopup(auth, provider).catch(console.error);
  };

  return (
    <button onClick={login} style={{ padding: '10px 20px', fontWeight: 'bold' }}>
      Iniciar sesión con Google
    </button>
  );
}
