/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import LoginsPage from "./components/LoginsPage";
import Registration from "./components/Registration";
import ContactUsPage from "./Pages/ContactUs";
import PropertyDetails from "./components/PropertyDetails";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/login",
    element: <LoginsPage />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
  },
  {
    path: "/properties/:id",
    element: <PropertyDetails />,
  },
]);
