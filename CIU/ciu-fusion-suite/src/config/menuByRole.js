// src/config/menuByRole.js
export const menuByRole = {
  SUPER_ADMIN: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Admin", path: "/admin" },
  ],

  CIU_ANALYST: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reports", path: "/reports" },
    { name: "Entities", path: "/entities" },
  ],

  CIU_SUPERVISOR: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Reports Review", path: "/reports/review" },
    { name: "Cases", path: "/cases" },
  ],
};