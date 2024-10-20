import { ResponsiveBar } from "@nivo/bar";
import React from "react";

function BarWithoutMarker({ data }) {
  return (
    <ResponsiveBar
      data={data}
      keys={["NAdown", "completed", "worksheetsNeeded", "NAup"]}
      indexBy="Category"
      margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
      padding={0.2}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      defs={[
        {
          id: "NAdown",
          type: "patternLines",
          size: 2,
          padding: 0,
          stagger: true,
          background: "#C0C5CE",
          color: "#C0C5CE",
        },
        {
          id: "NAup",
          type: "patternLines",
          size: 2,
          padding: 0,
          stagger: true,
          background: "#45687B",
          color: "#45687B",
        },
        {
          id: "completed",
          type: "patternLines",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#00DA9D",
          color: "#00DA9D",
        },
        {
          id: "worksheetsNeeded",
          type: "patternLines",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#FF3838",
          color: "#FF3838",
        },
        {
          id: "done",
          type: "patternDots",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#93b5e1",
          color: "#93b5e1",
        },

        {
          id: "dots",
          type: "patternDots",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#a61717",
          color: "#a61717",
        },
      ]}
      fill={[
        {
          match: {
            id: "NAdown",
          },
          id: "NAdown",
        },
        {
          match: {
            id: "NAup",
          },
          id: "NAup",
        },
        {
          match: {
            id: "completed",
          },
          id: "completed",
        },
        {
          match: {
            id: "worksheetsNeeded",
          },
          id: "worksheetsNeeded",
        },
      ]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Category",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickValues: Array.from({ length: data[0].sections + 1 }, (v, i) => i),
        tickPadding: 5,
        tickRotation: 0,
        legend: "Section",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}
function BarWithMarker({ data }) {
  console.log(data);
  return (
    <ResponsiveBar
      data={data}
      keys={["NAdown", "completed", "worksheetsNeeded", "NAup"]}
      indexBy="Category"
      margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
      padding={0.2}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      markers={[
        {
          axis: "y",
          value: `${data[0].expected}`,
          lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
          legend: "Expected",
          legendOrientation: "horizontal",
        },
      ]}
      defs={[
        {
          id: "NAdown",
          type: "patternLines",
          size: 2,
          padding: 0,
          stagger: true,
          background: "#C0C5CE",
          color: "#C0C5CE",
        },
        {
          id: "NAup",
          type: "patternLines",
          size: 2,
          padding: 0,
          stagger: true,
          background: "#45687B",
          color: "#45687B",
        },
        {
          id: "completed",
          type: "patternLines",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#00DA9D",
          color: "#00DA9D",
        },
        {
          id: "worksheetsNeeded",
          type: "patternLines",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#FF3838",
          color: "#FF3838",
        },
        {
          id: "done",
          type: "patternDots",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#93b5e1",
          color: "#93b5e1",
        },
        {
          id: "dots",
          type: "patternDots",
          size: 1,
          padding: 0,
          stagger: true,
          background: "#a61717",
          color: "#a61717",
        },
      ]}
      fill={[
        {
          match: {
            id: "NAdown",
          },
          id: "NAdown",
        },
        {
          match: {
            id: "NAup",
          },
          id: "NAup",
        },
        {
          match: {
            id: "completed",
          },
          id: "completed",
        },
        {
          match: {
            id: "worksheetsNeeded",
          },
          id: "worksheetsNeeded",
        },
      ]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Category",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickValues: Array.from({ length: data[0].sections + 1 }, (v, i) => i),
        tickPadding: 5,
        tickRotation: 0,
        legend: "Section",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}

export { BarWithMarker, BarWithoutMarker };
