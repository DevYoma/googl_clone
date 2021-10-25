import React, { useState } from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className="">
        
      </div>
    </div>
  );
}

export default App;
