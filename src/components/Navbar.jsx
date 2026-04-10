import { useNavigate } from "react-router-dom";

function Navbar({ title }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="sw-navbar">
      <div className="sw-brand">{title}</div>
      <button className="sw-button ghost" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
