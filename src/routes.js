/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Accessibility from "@material-ui/icons/Accessibility";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Assessment from "@material-ui/icons/Assessment";
import Assignment from "@material-ui/icons/Assignment";
// core components views for Main layout
import DashboardPage from "./views/dashboard/dashboard";
import TaskList from "./views/TaskList/TaskList";
import AreaList from "./views/AreaList/areaList";
import List from "@material-ui/icons/List";
import ChildList from "./views/ChildList/ChildList";
import StaffList from "./views/StaffList/staffList";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",  
    icon: Dashboard,
    component: DashboardPage,
    layout: "/main"
  },
  {
    path: "/childList",
    name: "Child List",
    icon: Accessibility,
    component: ChildList,
    layout: "/main"
  },  
  {
    path: "/staffList",
    name: "Staff List",
    icon: SupervisorAccount,
    component: StaffList,
    layout: "/main"
  },  
  {
    path: "/taskList",
    name: "Task List",
    icon: Assignment,
    component: TaskList,
    layout: "/main"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: Assessment,
    component: TaskList,
    layout: "/main"
  },
  {
    path: "/areaList",
    name: "Area List",
    icon: List,
    component: AreaList,
    layout: "/main"
  }
];

export default routes;
