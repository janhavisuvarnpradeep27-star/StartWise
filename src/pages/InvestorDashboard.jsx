import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

const ideaFeed = [
  {
    id: 101,
    title: "Luna Logistics",
    description: "AI dispatch optimization for last-mile delivery fleets.",
    domain: "Logistics",
    score: 88,
  },
  {
    id: 102,
    title: "SkillBridge",
    description:
      "Micro-credential platform connecting students to internships.",
    domain: "EdTech",
    score: 82,
  },
  {
    id: 103,
    title: "PulsePath",
    description: "Wearable analytics to predict chronic health risks early.",
    domain: "HealthTech",
    score: 94,
  },
];

function InvestorDashboard() {
  const [interests, setInterests] = useState({});

  const toggleInterest = (id) => {
    setInterests((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="sw-dashboard">
      <Navbar title="Investor Dashboard" />
      <div className="sw-dashboard-content">
        <section className="sw-section">
          <div className="sw-section-header">
            <h2>Startup Ideas</h2>
            <p>Explore high-potential ideas from students.</p>
          </div>
          <div className="sw-grid">
            {ideaFeed.map((idea) => (
              <div className="sw-card" key={idea.id}>
                <div className="sw-card-title">{idea.title}</div>
                <p>{idea.description}</p>
                <div className="sw-card-meta">
                  <span>{idea.domain}</span>
                  <span>Score: {idea.score}</span>
                </div>
                <button
                  className={`sw-button ${interests[idea.id] ? "ghost" : "primary"}`}
                  onClick={() => toggleInterest(idea.id)}
                >
                  {interests[idea.id] ? "Interested ✓" : "Interested"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InvestorDashboard;
