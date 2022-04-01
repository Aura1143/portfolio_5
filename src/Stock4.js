import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-basic-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";

const Plot = createPlotlyComponent(Plotly);

function Stock4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Amazon
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&outputsize=compact&apikey=${process.env.REACT_APP_API_KEY}"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data["Time Series (Daily)"]);
        console.log(data);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Loading spinner
  if (loading) {
    return (
      <div className="min-h-full flex justify-center items-center">
        <div className="w-6 h-6 border-4 border-white border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  const X = Object.keys(data);
  const Y = X.map((date) => {
    return data[date]["1. open"];
  });

  return (
    // Plotly.jsを使用してグラフを描画
    <Plot
      data={[
        {
          x: X,
          y: Y,
          // fill: "tonexty",
          type: "scatter",
          mode: "lines",
          marker: { color: "red" },
        },
      ]}
      layout={{
        autosize: true,
        paper_bgcolor: "rgba(255,255,255,0.1)",
        plot_bgcolor: "rgba(255,255,255,0.1)",
        title: "Amazon.com, Inc.",
      }}
      useResizeHandler
      className="w-full h-full sm:h-80"
    />
  );
}

export default Stock4;
