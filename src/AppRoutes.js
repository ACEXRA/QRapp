import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Employee from "./pages/Employee";
import Employer from "./pages/Employer";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/UnAuthorized";

const AppRoutes = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<ProtectedRoutes allowedRoles={["Employee"]} />}>
          <Route path="/employee" element={<Employee />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={["Employer"]} />}>
          <Route path="/employer" element={<Employer />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
