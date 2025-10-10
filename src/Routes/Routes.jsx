import React from 'react';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllAppsPage from '../Pages/AllAppsPage/AllAppsPage';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstallApps from '../Pages/InstallApps/InstallApps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch('/appsData.json') ,
            path: "/",
            Component: Home,
        },
        {
          loader: () => fetch('/appsData.json') ,
          path: "/apps",
          Component: AllAppsPage,
        },
        {
          loader: () => fetch('/appsData.json') ,
          path: "appDetails/:id",
          Component: AppDetails,
        },
        {
          loader: () => fetch('/appsData.json'),
          path: "/installApp",
          Component: InstallApps,
        }
    ]
  },
]);