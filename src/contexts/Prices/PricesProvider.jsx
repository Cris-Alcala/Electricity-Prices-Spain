import { useState } from "react";
import { PricesContext } from "./PricesContext";
import { getAll } from "../../services";
import { mwToKW } from "../../utils";
import { useEffect } from "react";
import PropTypes from "prop-types";

export const PricesProvider = ({ children }) => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    getAll()
      .then((response) => response.json())
      .then((data) => {
        let newPrices = [];
        data.indicator.values.forEach((element_) => {
          const date = new Date(element_.datetime);
          const newElement = {
            date: date,
            price: mwToKW(element_.value),
          };
          newPrices = [...newPrices, newElement];
        });
        setPrices([...newPrices]);
      });
  }, []);
  return (
    <PricesContext.Provider value={{ prices, setPrices }}>
      {children}
    </PricesContext.Provider>
  );
};

PricesProvider.propTypes = {
  children: PropTypes.node,
};
