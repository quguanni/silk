import React, { useState } from 'react';
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
  const [responses, setResponses] = useState([false, false, false, false, false]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    "Do they make you doubt your memory?",
    "Do they isolate you from support?",
    "Do they switch from kind to cruel suddenly?",
    "Do you feel guilty saying no to them?",
    "Do you feel smaller around them?"
  ];

  const handleChange = (index) => {
    const newResponses = [...responses];
    newResponses[index] = !newResponses[index];
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = responses.filter(Boolean).length;

  return (
    <div style={{ maxWidth: '600px', margin: '80px auto', padding: '20px' }}>
      <h2>🧠 Web Detector Quiz</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {questions.map((q, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={responses[idx]}
                onChange={() => handleChange(idx)}
              />
              {' '}{q}
              <br />
            </label>
          ))}
          <button type="submit" style={{ marginTop: '20px' }}>
            See Results
          </button>
        </form>
      ) : (
        <div>
          <h3>Your Results:</h3>
          <p>You checked <strong>{score}</strong> out of {questions.length} red flags.</p>
          {score === 0 && <p>You're probably safe in this situation. But trust your instincts.</p>}
          {score >= 1 && score <= 2 && <p>There may be mild manipulation patterns. Stay aware.</p>}
          {score >= 3 && score <= 4 && <p>You're likely experiencing manipulative behavior. Trust your gut. Set boundaries.</p>}
          {score === 5 && <p>This shows strong signs of emotional manipulation. You deserve safety and clarity. Reach out for support if needed.</p>}
          <br />
          <Link to="/">
            <button>Go Back Home</button>
          </Link>
        </div>
      )}
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
