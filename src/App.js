import React from 'react';
import KontakPage from './components/KontakPage';
import AllService from './components/AllService';
import FaceService from './components/FaceService';
import Reserved from './components/Reserved';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<KontakPage/>} />
        <Route path="/all-service" element={<AllService />} />
        <Route path="/face-service" element={<FaceService />} />
        <Route path="/reserved" element={<Reserved />} />
        
      </Routes> 
    </Router>
  );
}

export default App
