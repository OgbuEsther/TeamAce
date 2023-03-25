import React from 'react'
import {useRoutes} from "react-router-dom"
import Dashboard from './Dashboards/Dashboard'
import Payments from './Dashboards/payments'
import Product from './Dashboards/Product'
import Homescreen from "./Homescreen"
import Transaction from "./Dashboards/Transaction"
import Staffdash from "./StaffDashboard/Staffdash"



const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <Homescreen />,
      },
      {
            path: "/dashboard",
            element: <Dashboard />,
      },
      {
            path: "/staffs",
            element: <Product />,
      },
      {
            path: "/payroll",
            element: <Payments />,
          },
      {
            path: "/transaction",
            element: <Transaction />,
          },
      {
            path: "/staffdashboard",
            element: <Staffdash />,
        },
])
  return element
}

export default AllRoutes