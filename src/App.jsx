import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Scan from './pages/Scan';
import ScanInterface from './pages/ScanInterface';
import ProductAnalysis from './pages/ProductAnalysis';
import EcoAlternatives from './pages/EcoAlternatives';
import Learn from './pages/Learn';
import History from './pages/History';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/scan-interface" element={<ScanInterface />} />
            <Route path="/product-analysis" element={<ProductAnalysis />} />
            <Route path="/eco-alternatives" element={<EcoAlternatives />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/history" element={<History />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
