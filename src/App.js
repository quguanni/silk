import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Welcome to Silk 🕸️</h1>
      <p>You’re safe here. Let’s begin cutting through the web.</p>
      <Link to="/quiz">
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            marginTop: '20px',
            cursor: 'pointer'
          }}
        >
          Start
        </button>
      </Link>
    </div>
  );
}

function WebDetectorQuiz() {
  return (
    <div style={{ maxWidth: '600px', margin: '80px auto', padding: '20px' }}>
      <h2>🧠 Web Detector Quiz</h2>
      <p>Check all that apply:</p>
      <form>
        <label><input type="checkbox" /> Do they make you doubt your memory?</label><br />
        <label><input type="checkbox" /> Do they isolate you from support?</label><br />
        <label><input type="checkbox" /> Do they switch from kind to cruel suddenly?</label><br />
        <label><input type="checkbox" /> Do you feel guilty saying no to them?</label><br />
        <label><input type="checkbox" /> Do you feel smaller around them?</label><br />
        <button type="submit" style={{ marginTop: '20px' }}>See Results</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/quiz" element={<WebDetectorQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
