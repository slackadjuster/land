import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Container for the first logo and chat icon, with separate links */}
        <div className="logo-container">
          <a href="https://www.mayagpt.ai/login" target="_blank" rel="noopener noreferrer">
            <img src="gptlogo.svg" alt="MayaGPT Logo" className="logo gpt-logo" />
          </a>
          <a href="https://www.mayagpt.ai/chat" target="_blank" rel="noopener noreferrer">
            <img src="gptchat.svg" alt="Chat" className="icon gpt-chat" />
          </a>
        </div>

        {/* Container for the second logo and create icon, with separate links */}
        <div className="logo-container">
          <a href="https://www.mayastudio.ai/generate" target="_blank" rel="noopener noreferrer">
            <img src="studiologo.svg" alt="MayaStudio Logo" className="logo studio-logo" />
          </a>
          <a href="https://www.mayastudio.ai/create" target="_blank" rel="noopener noreferrer">
            <img src="studiocreate.svg" alt="Create" className="icon studio-create" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
