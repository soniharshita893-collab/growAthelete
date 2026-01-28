import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Redirecting to dashboard...');
    navigate('/dashboard');
  };

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="page">
      <header>
        <div className="logo">GrowAthlete</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogin}>Sign Up</button>
        </nav>
      </header>
      <section className="hero">
        <h1>Empower Your Athletic Career with Data</h1>
        <p>Build profiles, navigate paths, and analyze ROI for long-term growth.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Start Your Journey</button>
        </form>
      </section>
      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">👤</div>
            <h3>Digital Athlete Profile</h3>
            <p>Showcase your career like a LinkedIn for sports.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🧭</div>
            <h3>Career Navigation</h3>
            <p>Get personalized recommendations for progression.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Competition ROI Analysis</h3>
            <p>Track if events boost your career.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 GrowAthlete. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;