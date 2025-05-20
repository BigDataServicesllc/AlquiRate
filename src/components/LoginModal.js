import React, { useState } from 'react'

const LoginModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-80 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Ingresar a tu cuenta</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Continuar
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">ó ingresá con</div>
        <div className="flex justify-center mt-3 space-x-4">
          <button onClick={() => onSubmit({ provider: 'google' })}>
            <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
          </button>
          <button onClick={() => onSubmit({ provider: 'facebook' })}>
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </button>
          <button onClick={() => onSubmit({ provider: 'apple' })}>
            <img src="/icons/apple.svg" alt="Apple" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
