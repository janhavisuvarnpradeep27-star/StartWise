import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

const dummyIdeas = [
  {
    id: 1,
    title: "EcoTrack AI",
    description: "AI-powered platform to monitor and reduce carbon footprints.",
    domain: "Sustainability",
    score: 86,
    investors: 4,
  },
  {
    id: 2,
    title: "MediBridge",
    description:
      "Telehealth marketplace connecting specialists with rural clinics.",
    domain: "HealthTech",
    score: 91,
    investors: 6,
  },
  {
    id: 3,
    title: "CampusFlow",
    description:
      "Smart campus operations suite for scheduling and asset tracking.",
    domain: "EdTech",
    score: 79,
    investors: 2,
  },
];

const dummyInvestors = [
  { id: 1, name: "Nova Capital", focus: "SaaS, AI", interest: "High" },
  {
    id: 2,
    name: "Greenline Ventures",
    focus: "Sustainability",
    interest: "Medium",
  },
  { id: 3, name: "FutureSeed", focus: "HealthTech", interest: "High" },
];

function StudentDashboard() {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [ideaDomain, setIdeaDomain] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIdeaTitle("");
    setIdeaDescription("");
    setIdeaDomain("");
  };

  return (
    <div className="sw-dashboard">
      <Navbar title="Student Dashboard" />
      <div className="sw-dashboard-content">
        <section className="sw-section">
          <div className="sw-section-header">
            <h2>Submit Your Idea</h2>
            <p>Share your startup concept with investors.</p>
          </div>
          <form className="sw-card sw-form" onSubmit={handleSubmit}>
            <label>
              Title
              <input
                type="text"
                placeholder="Your idea title"
                value={ideaTitle}
                onChange={(event) => setIdeaTitle(event.target.value)}
                required
              />
            </label>
            <label>
              Description
              <textarea
                placeholder="Describe your startup idea"
                value={ideaDescription}
                onChange={(event) => setIdeaDescription(event.target.value)}
                required
              />
            </label>
            <label>
              Domain
              <input
                type="text"
                placeholder="FinTech, HealthTech, EdTech..."
                value={ideaDomain}
                onChange={(event) => setIdeaDomain(event.target.value)}
                required
              />
            </label>
            <button className="sw-button primary" type="submit">
              Submit Idea
            </button>
          </form>
        </section>

        <section className="sw-section">
          <div className="sw-section-header">
            <h2>All Ideas</h2>
            <p>Discover what other students are building.</p>
          </div>
          <div className="sw-grid">
            {dummyIdeas.map((idea) => (
              <div className="sw-card" key={idea.id}>
                <div className="sw-card-title">{idea.title}</div>
                <p>{idea.description}</p>
                <div className="sw-card-meta">
                  <span>{idea.domain}</span>
                  <span>Score: {idea.score}</span>
                </div>
                <div className="sw-chip">
                  Interested Investors: {idea.investors}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sw-section">
          <div className="sw-section-header">
            <h2>Investor Highlights</h2>
            <p>Quick snapshot of active investors.</p>
          </div>
          <div className="sw-grid">
            {dummyInvestors.map((investor) => (
              <div className="sw-card" key={investor.id}>
                <div className="sw-card-title">{investor.name}</div>
                <p>Focus: {investor.focus}</p>
                <div className="sw-chip">Interest: {investor.interest}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard;
