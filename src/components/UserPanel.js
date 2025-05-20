
import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function UserPanel() {
  const [user] = useAuthState(auth);

  if (!user) return null;

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <img src={user.photoURL} alt="Perfil" style={{ width: 60, borderRadius: '50%' }} />
      <p>Hola, {user.displayName}</p>
      <button onClick={() => auth.signOut()}>Cerrar sesión</button>
    </div>
  );
}
