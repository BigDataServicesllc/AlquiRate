import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomePage from './components/HomePage';
import RankingsPage from './components/RankingsPage';
import AddReviewPage from './components/AddReviewPage';

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
      case 'listings':
        return (
          <div className="text-center py-20 text-gray-600 text-xl">
            Próximamente podrás ver las propiedades disponibles.
          </div>
        );
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
