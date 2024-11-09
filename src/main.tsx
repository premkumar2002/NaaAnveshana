import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import VideoArchive from './components/VideoArchive.tsx'; // Import your VideoArchive component
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videos" element={<VideoArchive />} />
      </Routes>
    </Router>
  </StrictMode>
);