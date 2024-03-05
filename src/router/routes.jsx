import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Home, Alerts, Graphic } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/alerts",
    element: <Alerts />,
  },
  {
    path: "/graphic",
    element: <Graphic />,
  },
  {
    path: "/*",
    element: <Navigate to={"/home"} />,
  },
]);
