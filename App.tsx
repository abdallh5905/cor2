import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Set initial route
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#login':
        return <LoginPage />;
      case '#signup':
        return <SignupPage />;
      default:
        return <HomePage />;
    }
  };


  return (
    <div className="bg-white font-sans">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;