import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatSystem from './components/ChatSystem';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 
  const changeFontSize = (size) => {
    setFontSize(size);
  };
 
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''} font-${fontSize}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        fontSize={fontSize}
        changeFontSize={changeFontSize}
      />
      <div className="main-content">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'chat' && <ChatSystem />}
      </div>
    </div>
  );
};

export default App;