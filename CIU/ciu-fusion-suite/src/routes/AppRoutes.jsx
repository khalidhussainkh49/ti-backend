import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import IntelligenceReports from "../pages/IntelligenceReports";
import EntityProfiles from "../pages/EntityProfiles";
import CaseManagement from "../pages/CaseManagement";
import CargoProfiling from "../pages/CargoProfiling";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ROLES } from "./config/roles";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<IntelligenceReports />} />
      <Route path="/entities" element={<EntityProfiles />} />
      <Route path="/cases" element={<CaseManagement />} />
      <Route path="/cargo" element={<CargoProfiling />} />
    </Routes>
  );
}

<Route
  path="/dashboard"
  element={
    <ProtectedRoute
      allowedRoles={[
        ROLES.CIU_ANALYST,
        ROLES.CIU_SUPERVISOR,
        ROLES.SUPER_ADMIN,
      ]}
    >
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>