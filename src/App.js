import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="maya0.svg" alt="MayaGPT Logo" className="logo gpt-logo" />
          <a href="https://www.mayagpt.ai/login" target="_blank" rel="noopener noreferrer">
            <img src="maya1.svg" alt="Chat" className="icon gpt-chat" />
          </a>
        </div>

        <div className="logo-container">
          <img src="maya2.svg" alt="MayaStudio Logo" className="logo studio-logo" />
          <a href="https://www.mayastudio.ai/" target="_blank" rel="noopener noreferrer">
            <img src="maya3.svg" alt="Create" className="icon studio-create" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
