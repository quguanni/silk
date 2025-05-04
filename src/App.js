import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Welcome to Silk 🕸️</h1>
      <p>You’re safe here. Let’s begin cutting through the web.</p>
      <button
        onClick={() => alert('Web Detector coming soon')}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Start
      </button>
    </div>
  );
}

export default App;
