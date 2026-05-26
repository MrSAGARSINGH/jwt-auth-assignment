import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" />;
  }

  return allowedRoles.includes(user.role)
    ? children
    : <Navigate to="/" />;
};

export default ProtectedRoute;