"use client";
import ReactEChart from "echarts-for-react";

const Radarchart = () => {
  const option = {
    title: {
      text: "Radar Chart",
      textStyle: {
        fontFamily: "Playfair Display",
        color: "#ffffff",
      },
      subtext: "Rating my soft skills using a radar chart",
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
    tooltip: {},
    radar: {
      bottom: 5,
      shape: "circle",
      splitArea: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
        },
      },
      indicator: [
        { name: "Communication", max: 100 },
        { name: "Teamwork", max: 100 },
        { name: "Problem solving", max: 100 },
        { name: "Creativity", max: 100 },
        { name: "Adaptability", max: 100 },
      ],
    },
    series: [
      {
        name: "Access From",
        type: "radar",
        itemStyle: {
          color: "rgb(255,255,255)",
        },
        areaStyle: {
          color: "rgba(255,255,255,0.2)",
        },
        data: [{ value: [80, 70, 60, 50, 50], name: "My skills" }],
      },
    ],
  };
  return (
    <div>
      <ReactEChart
        style={{
          width: "100%",
          height: 600,
          padding: "10px 15px",
        }}
        option={option}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default Radarchart;
