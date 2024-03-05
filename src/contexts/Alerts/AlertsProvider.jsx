import { useState } from "react";
import { AlertsContext } from "./AlertsContext";
import PropTypes from "prop-types";

export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  return (
    <AlertsContext.Provider value={{ alerts, setAlerts }}>
      {children}
    </AlertsContext.Provider>
  );
};

AlertsProvider.propTypes = {
  children: PropTypes.node,
};
