"use client";
import ReactEChart from "echarts-for-react";

export default function BarChart() {
  const eChartsOption = {
    dataset: [
      {
        dimensions: ["name", "Tool"],
        source: [
          ["JS", 40],
          ["R", 45],
          ["Python", 50],
          ["CSS", 60],
          ["HTML", 70],
          ["Power BI", 70],
          ["M.Excel", 80],
        ],
      },
      {
        transform: {
          type: "sort",
          config: { dimension: "name", order: "desc" },
        },
      },
    ],
    title: {
      text: "Bar Chart",
      textStyle: {
        fontFamily: "Playfair Display",
        color: "#ffffff",
      },
      subtext:
        "The tools that I use based on how proficient I am with the tool",
      subtextStyle: {
        fontFamily: "Playfair Display",
        color: "rgba(255,255,255,0.7)",
      },
    },
    textStyle: {
      fontFamily: "Playfair Display",
      color: "#ffffff",
      fontSize: 11,
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
      delay: 500,
    },
    yAxis: [
      {
        type: "category",
        nameLocation: "center",
        color: "rgba(255,255,255,0.7)",
      },
    ],
    xAxis: {
      type: "value",
      max: 100,
      min: 0,
      show: true,
      splitLine: {
        show: false,
      },
    },
    showBackground: true,
    tooltip: {},
    series: {
      type: "bar",
      encode: { y: "name", x: "Tool" },
      datasetIndex: 0,
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
        color: "rgba(255,255,255,0.7)",
      },
      itemStyle: {
        color: "rgba(255,255,255,0.7)",
      },
      emphasis: {
        focus: "series",
      },
    },
  };

  return (
    <div>
      <ReactEChart
        style={{
          width: "100%",
          height: 500,
          padding: "10px 15px",
        }}
        option={eChartsOption}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
