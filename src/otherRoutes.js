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

import ChildDetails from "./views/ChildDetails/ChildDetails";
import StaffDetails from "./views/staffDetails/staffDetails";

// core components views for Main layout


const otherRoutes = [
    {
        path: "/childDetails",
        name: "Child Details",
        component: ChildDetails,
        layout: "/main/childList",
    },
    {
        path: "/staffDetails",
        name: "Child Details",
        component: StaffDetails,
        layout: "/main/staffList",
    }
];

export default otherRoutes;
