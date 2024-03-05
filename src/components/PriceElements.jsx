import { PriceElement } from "./PriceElement";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { manageAlert } from "../utils";

export const PriceElements = ({ elements }) => {
  const elements_1 = elements.slice(0, 12);
  const elements_2 = elements.slice(12, Infinity);
  return (
    <>
      <div className="prices">
        <div className="prices__1">
          {elements_1.map((element_) => (
            <PriceElement
              element={element_}
              key={uuid()}
              onClick={manageAlert}
            />
          ))}
        </div>
        <div className="prices__2">
          {elements_2.map((element_) => (
            <PriceElement
              element={element_}
              key={uuid()}
              onClick={manageAlert}
            />
          ))}
        </div>
      </div>
    </>
  );
};

PriceElements.propTypes = {
  elements: PropTypes.array,
};
