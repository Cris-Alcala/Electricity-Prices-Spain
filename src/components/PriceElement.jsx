import PropTypes from "prop-types";
import { AlertsContext } from "../contexts";
import { useContext } from "react";
import { earlierThanNow, equalsToNow, formatHour, indicator } from "../utils";
import { v4 as uuid } from "uuid";

export const PriceElement = ({ element, onClick }) => {
  const { alerts, setAlerts } = useContext(AlertsContext);
  return (
    <div
      className={`priceElement ${
        earlierThanNow(element.date) ? "disabled" : ""
      } ${equalsToNow(element.date) ? "now" : ""}`}
      key={uuid()}
      onClick={() => onClick(alerts, element, setAlerts)}
    >
      <p>{indicator(element.price)}</p>
      <p className="priceElement__price">{element.price}€ Kw/h</p>
      <p className="priceElement__date">
        {formatHour(element.date.getHours())} h{" "}
      </p>
    </div>
  );
};

PriceElement.propTypes = {
  element: PropTypes.object,
  onClick: PropTypes.func,
};
