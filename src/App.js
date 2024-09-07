// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Access from './components/Access';

const App = () => {
  return (
    <Router basename="/nambpig">
      <div>
        <Header />
        <RedirectHandler />
        <div className="routes-container">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/access" element={<Access />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default App;