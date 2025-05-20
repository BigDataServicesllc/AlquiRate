import React from 'react';
import { auth } from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function UserPanel() {
  const [user] = useAuthState(auth);
  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <img src={user.photoURL} alt="avatar" className="h-8 w-8 rounded-full" />
      <span className="font-medium">{user.displayName}</span>
      <button
        className="text-xs text-blue-600 hover:underline"
        onClick={() => auth.signOut()}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
