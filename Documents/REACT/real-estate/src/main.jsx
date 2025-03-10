import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // ✅ Correct place for Router
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>  {/* ✅ Router should ONLY be here */}
            <App />
        </Router>
    </StrictMode>
);
