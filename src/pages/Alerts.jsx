import { useContext } from "react";
import { Layout } from "../Layouts/Layout";
import { AlertsContext } from "../contexts";
import { NoAlerts, PriceElement } from "../components";
import { manageAlert } from "../utils";
import { v4 as uuid } from "uuid";

export const Alerts = () => {
  const { alerts, setAlerts } = useContext(AlertsContext);
  return (
    <Layout>
      <div className="alerts">
        {alerts.length > 0 &&
          alerts.map((element_) => (
            <PriceElement
              element={element_}
              key={uuid()}
              onClick={() => manageAlert(alerts, element_, setAlerts)}
            />
          ))}
        {alerts.length === 0 && <NoAlerts />}
      </div>
    </Layout>
  );
};
