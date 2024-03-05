import PropTypes from "prop-types";
import { NavBar } from "../components";

export const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
