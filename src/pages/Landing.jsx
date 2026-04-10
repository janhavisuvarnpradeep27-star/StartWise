import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="sw-landing">
      <div className="sw-landing-card">
        <span className="sw-badge">Cloud Platform</span>
        <h1>StartWise</h1>
        <p>Turn Ideas into Funded Startups</p>
        <div className="sw-actions">
          <button
            className="sw-button primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="sw-button ghost"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
