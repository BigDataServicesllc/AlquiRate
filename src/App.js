import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomePage from './components/HomePage';
import RankingsPage from './components/RankingsPage';
import AddReviewPage from './components/AddReviewPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':     return <HomePage setCurrentPage={setCurrentPage} />;
      case 'rankings': return <RankingsPage />;
      case 'addReview':return <AddReviewPage onAddReview={data => console.log(data)} />;
      default:         return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const handleLogin = () => {
    // aquí dispararías tu modal de login o redirección a Google
    setIsLoggedIn(true);
  };
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LayoutHeader
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;
