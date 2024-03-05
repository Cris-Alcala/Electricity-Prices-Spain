/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { PricesContext } from "../contexts";
import { useEffect } from "react";
import { GraphicElement, Stats } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Layouts";

export const Graphic = () => {
  const { prices } = useContext(PricesContext);
  const navigate = useNavigate();
  const [data, setData] = useState([["Hour", "Price"]]);
  const [options] = useState({
    title: "Electricity rate price per hour (Kw/h)",
    width: "80%",
    height: 400,
    backgroundColor: "transparent",
    legend: { textStyle: { color: "white" } },
    hAxis: {
      textStyle: { color: "white" },
      gridlines: { color: "transparent" },
    },
    vAxis: {
      textStyle: { color: "white" },
      gridlines: { color: "rgb(36, 36, 36)" },
    },
    titleTextStyle: { color: "white" },
  });

  useEffect(() => {
    if (prices.length === 0) {
      navigate("/home");
    } else {
      setData([
        ["Hour", "Price"],
        ...prices.map((price_) => {
          return [Number(price_.date.getHours()), Number(price_.price)];
        }),
      ]);
    }
  }, []);
  return (
    <Layout>
      <div className="graphic__data">
        <div className="graphic">
          <GraphicElement options={options} data={data} />
        </div>
        <Stats elements={prices} />
      </div>
    </Layout>
  );
};
