import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthCtx } from "../context/AuthCtxProvider";

const ProtectedRoutes = ({ allowedRoles }) => {
  const { authenticated, user } = useContext(AuthCtx);
  const location = useLocation();

  if (!authenticated && !allowedRoles.includes(user?.role)) {
    return <Navigate to="*" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
