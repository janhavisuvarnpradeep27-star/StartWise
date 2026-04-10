import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("role", role);
    navigate(role === "student" ? "/student" : "/investor");
  };

  return (
    <div className="sw-auth">
      <div className="sw-auth-card">
        <h2>Create Account</h2>
        <p>Join StartWise and start building your future.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <div className="sw-role">
            <span>Select Role</span>
            <div className="sw-role-options">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="investor"
                  checked={role === "investor"}
                  onChange={() => setRole("investor")}
                />
                Investor
              </label>
            </div>
          </div>
          <button className="sw-button primary" type="submit">
            Signup
          </button>
        </form>
        <p className="sw-footnote">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
