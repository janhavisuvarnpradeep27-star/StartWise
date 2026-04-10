import { Navigate } from "react-router-dom";

const getRole = () => {
  return localStorage.getItem("role");
};

function ProtectedRoute({ allowedRole, children }) {
  const role = getRole();

  if (!role || role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
