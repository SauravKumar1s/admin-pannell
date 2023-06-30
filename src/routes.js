import React from "react";


import Dashboard from "./views/admin/dashboard";



import {
  MdHome,
  MdOutlineProductionQuantityLimits

} from "react-icons/md";
import { BiBarChartAlt } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import Products from "./views/admin/products";
import TestDrive from "./views/admin/testdrive";
import Payment from "./views/admin/payment";


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
    icon: <MdOutlineProductionQuantityLimits className="h-6 w-6" />,
    component: <Products />,
    secondary: true,
  },

  {
    name: "Test drives Booking",
    layout: "/admin",
    path: "test-drives",
    icon: <BiBarChartAlt className="h-6 w-6" />,
    component: <TestDrive />,
    secondary: true,
  },
  {
    name: "Payments",
    layout: "/admin",
    path: "payments",
    icon: <TbReportMoney className="h-6 w-6" />,
    component: <Payment />,
    secondary: true,
  },
];
export default routes;
