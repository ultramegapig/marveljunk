import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CharactersPage from './components/CharactersPage';
import ComicsPage from './components/ComicsPage';
import DetailsPage from './components/DetailsPage';
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<DetailsPage entityType="character" />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:id" element={<DetailsPage entityType="comics" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
