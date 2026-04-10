import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
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
        <h2>Welcome Back</h2>
        <p>Log in to explore and manage startup ideas.</p>
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
            <span>Login as</span>
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
            Login
          </button>
        </form>
        <p className="sw-footnote">
          New to StartWise? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
