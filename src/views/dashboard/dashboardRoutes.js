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
import Accessibility from "@material-ui/icons/Accessibility";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Assessment from "@material-ui/icons/Assessment";
import Assignment from "@material-ui/icons/Assignment";
// core components views for Main layout
import TaskList from "../TaskList/TaskList";


const dashboardRoutes = [
    {
        path: "/childList",
        name: "Child List",
        icon: Accessibility,
        component: TaskList,
        layout: "/main",
        color: "info",
        title: "Children",
        count: "240"
      },  
      {
        path: "/staffList",
        name: "Staff List",
        icon: SupervisorAccount,
        component: TaskList,
        layout: "/main",
        color: "warning",
        title: "Staff",
        count: "50"
      },  
      {
        path: "/taskList",
        name: "Task List",
        icon: Assignment,
        component: TaskList,
        layout: "/main",
        color: "success",
        title: "Tasks",
        count: "100"
      },
      {
        path: "/reports",
        name: "Reports",
        icon: Assessment,
        component: TaskList,
        layout: "/main",
        color: "danger",
        title: "Reports",
        count: "80"
      }
];

export default dashboardRoutes;
