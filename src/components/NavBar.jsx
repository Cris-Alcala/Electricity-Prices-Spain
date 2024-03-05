import { NavLink } from "react-router-dom";
import { todayDate } from "../utils";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/alerts"}>Alerts</NavLink>
      <NavLink to={"/graphic"}>Graphic</NavLink>
      <div className="date">
        <h1>{todayDate()}</h1>
      </div>
    </nav>
  );
};
