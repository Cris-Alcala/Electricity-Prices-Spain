import PropTypes from "prop-types";
import { average, cheap, cheapestHours, expensive } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

export const Stats = ({ elements }) => {
  const [cheapestHour, setCheapestHour] = useState();
  useEffect(() => {
    setCheapestHour(cheapestHours(elements));
  }, [elements]);
  return (
    elements.length > 0 && (
      <div className="stats">
        <p>
          <span>Average:</span> {average(elements)}€
        </p>
        <p>
          <span>Most expensive:</span> {expensive(elements)} h
        </p>
        <p>
          <span>Cheapest:</span> {cheap(elements)} h
        </p>
        {cheapestHour !== null && (
          <p>
            <span>Three Cheapest hours:</span> {cheapestHour} h -{" "}
            {cheapestHour + 2} h
          </p>
        )}
      </div>
    )
  );
};

Stats.propTypes = {
  elements: PropTypes.array,
};
