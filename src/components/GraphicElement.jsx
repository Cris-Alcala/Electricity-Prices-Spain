import PropTypes from "prop-types";
import Chart from "react-google-charts";

export const GraphicElement = ({ data, options }) => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

GraphicElement.propTypes = {
  data: PropTypes.array,
  options: PropTypes.object,
};
