import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomePage from './components/HomePage';
// import ListingsPage from './components/ListingsPage';
import RankingsPage from './components/RankingsPage';
import AddReviewPage from './components/AddReviewPage';
import Navbar from './components/Navbar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'rankings': 
        return <RankingsPage />;
      case 'addReview':
        return <AddReviewPage onAddReview={(data) => console.log('Review data:', data)} />; 
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar /> {/* Nuevo navbar con login modal */}
      <LayoutHeader 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={false}
        onLogout={() => {}} 
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;
