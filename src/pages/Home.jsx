/* eslint-disable react-hooks/exhaustive-deps */
import { PriceElements } from "../components";
import { useContext } from "react";
import { AlertsContext, PricesContext } from "../contexts";
import { Layout } from "../Layouts";
import { useState } from "react";
import { useEffect } from "react";
import { programAlerts } from "../utils";
import { useRef } from "react";

export const Home = () => {
  const { prices } = useContext(PricesContext);
  const { alerts, setAlerts } = useContext(AlertsContext);
  const [alertConfirms, setAlertConfirms] = useState([]);
  const timer = useRef(0);

  const handlerAlertsConfirms = (alert) => {
    setAlertConfirms([...alert]);
  };
  const handleAlerts = () => {
    setAlerts((prevAlerts) => [
      ...prevAlerts.filter((alert_) => {
        const currentDate = new Date();
        return alert_.date.getHours() > currentDate.getHours();
      }),
    ]);
  };
  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      handleAlerts();
      alertConfirms.forEach((alert) => clearTimeout(alert));
      programAlerts(alerts, handlerAlertsConfirms);
    }, 60000);
  }, [alerts, alertConfirms]);
  return (
    <Layout>{prices.length > 0 && <PriceElements elements={prices} />}</Layout>
  );
};
