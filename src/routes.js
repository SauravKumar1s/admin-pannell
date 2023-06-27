import React from "react";


import Dashboard from "./views/admin/dashboard";



import {
  MdHome,

} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },

  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <MdHome className="h-6 w-6" />,
    // component: <MainDashboard />,
    secondary: true,
  },

  {
    name: "Test drives Booking",
    layout: "/admin",
    path: "test-drives",
    icon: <MdHome className="h-6 w-6" />,
    // component: <MainDashboard />,
    secondary: true,
  },
  {
    name: "Payments",
    layout: "/admin",
    path: "payments",
    icon: <MdHome className="h-6 w-6" />,
    // component: <MainDashboard />,
    secondary: true,
  },
];
export default routes;
