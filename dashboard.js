import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const navigate = useNavigate();

  // Mock initial state (can be replaced with API data)
  const [careerLevel, setCareerLevel] = useState('Beginner');
  const [readiness, setReadiness] = useState(50);
  const [recommendation, setRecommendation] = useState('Start with local meets to build experience.');
  const [pbTime, setPbTime] = useState('');
  const [trainingHours, setTrainingHours] = useState('');

  // Mock ROI data (static for now, but can be updated based on navigation)
  const roiData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'ROI Score',
      data: [70, 75, 80, 85, 90],
      borderColor: '#28A745',
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      fill: true,
    }]
  };

  // Simple mock logic for career assessment (replace with real AI/ML later)
  const assessCareer = () => {
    const pb = parseFloat(pbTime);
    const hours = parseInt(trainingHours);
    let level = 'Beginner';
    let ready = 50;
    let rec = 'Focus on building fundamentals.';

    if (pb < 11.0 && hours > 10) {
      level = 'Intermediate';
      ready = 70;
      rec = 'Target regional competitions for growth.';
    }
    if (pb < 10.5 && hours > 15) {
      level = 'Elite';
      ready = 85;
      rec = 'Target: National Championships. Est. ROI: High.';
    }

    setCareerLevel(level);
    setReadiness(ready);
    setRecommendation(rec);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    assessCareer();
  };

  return (
    <div className="page">
      <header>
        <div className="logo">GrowAthlete</div>
        <nav>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </nav>
      </header>
      <main className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        
        {/* Career Navigation Section */}
        <section className="career-nav">
          <h2>Career Navigation</h2>
          <p>Input your metrics to assess your level and get personalized recommendations.</p>
          <form onSubmit={handleSubmit} className="assessment-form">
            <label>
              Personal Best Time (e.g., 10.5 for 100m):
              <input
                type="number"
                step="0.1"
                value={pbTime}
                onChange={(e) => setPbTime(e.target.value)}
                required
              />
            </label>
            <label>
              Weekly Training Hours:
              <input
                type="number"
                value={trainingHours}
                onChange={(e) => setTrainingHours(e.target.value)}
                required
              />
            </label>
            <button type="submit">Assess Career</button>
          </form>
        </section>

        {/* Existing Widgets */}
        <div className="widgets">
          <div className="widget">
            <h3>Career Level</h3>
            <p className={`badge ${careerLevel.toLowerCase()}`}>{careerLevel}</p>
          </div>
          <div className="widget">
            <h3>Readiness Score</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${readiness}%` }}></div>
              <span>{readiness}%</span>
            </div>
          </div>
          <div className="widget">
            <h3>Recommendation</h3>
            <p>{recommendation}</p>
            {careerLevel === 'Elite' && <p className="roi">Est. ROI: High</p>}
          </div>
          <div className="widget chart">
            <h3>ROI Over Time</h3>
            <Line data={roiData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;