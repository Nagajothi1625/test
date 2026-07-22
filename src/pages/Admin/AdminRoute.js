import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role?.toUpperCase() !== "ADMIN") {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminRoute;