
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import LoginsPage from "./components/LoginsPage";
import Registration from "./components/Registration";
import ContactUsPage from "./Pages/ContactUs";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element:
    <Home/>
  },
  {
    path: "/Properties",
    element: 
    <Properties/>
  },
  {
    path : "/login",
    element : 
    <LoginsPage/>
  },
  {
    path : "/Registration",
    element :
    <Registration/>
  },
  {
    path : "/Contactus",
    element:
    <ContactUsPage/>
  }
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
//  );