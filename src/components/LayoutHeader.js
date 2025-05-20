import React from "react";

const LayoutHeader = ({
  currentPage,
  setCurrentPage,
  isLoggedIn = false,
  onLogout = () => {},
  onLoginClick = () => setCurrentPage && setCurrentPage("login"),
}) => (
  <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
    {/* Logo/Naming */}
    <div className="flex items-center">
      <span
        className="text-2xl font-extrabold text-blue-600 cursor-pointer"
        onClick={() => setCurrentPage && setCurrentPage("home")}
      >
        Alqui<span className="text-gray-800">Rate</span>
      </span>
    </div>

    {/* Navigation */}
    <nav className="flex items-center space-x-6">
      <button
        className={`font-semibold ${currentPage === "home" ? "text-blue-600" : "text-gray-700"}`}
        onClick={() => setCurrentPage && setCurrentPage("home")}
      >
        Inicio
      </button>
      <button
        className={`font-semibold ${currentPage === "rankings" ? "text-blue-600" : "text-gray-700"}`}
        onClick={() => setCurrentPage && setCurrentPage("rankings")}
      >
        Rankings
      </button>
      <button
        className={`font-semibold ${currentPage === "addReview" ? "text-blue-600" : "text-gray-700"}`}
        onClick={() => setCurrentPage && setCurrentPage("addReview")}
      >
        Calificar
      </button>
      {/* Botón de login/logout */}
      {!isLoggedIn ? (
        <button
          className="ml-6 px-4 py-2 rounded bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
          onClick={onLoginClick}
        >
          Iniciar sesión
        </button>
      ) : (
        <button
          className="ml-6 px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold shadow hover:bg-gray-300 transition"
          onClick={onLogout}
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  </header>
);

export default LayoutHeader;
