import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import GetLoading from "../components/Loading/GetLoading";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../others/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <GetLoading></GetLoading>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
