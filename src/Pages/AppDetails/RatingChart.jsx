import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ data }) => {
  // ✅ Sort ratings so 5-star appears first
  const sortedData = [...data].sort((a, b) => {
    const aNum = parseInt(a.name);
    const bNum = parseInt(b.name);
    return bNum - aNum; // descending order
  });

  // ✅ Format label with a small gap (e.g. "5 ★")
  const formatLabel = (label) => label.replace("star", " ★");

  return (
    
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 5, bottom: 20 }}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={(v) => `${v / 1000}K`} />
          <YAxis
            type="category"
            dataKey="name"
            tickFormatter={formatLabel}
            tick={{ fontSize: 14, fontWeight: 600 }}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#FF8811"
            background={{ fill: "#f0f0f0" }}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
