import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { indicatorHistory } from "../farmer_data/farmer_mockData";

export default function FarmerIndicatorTrendChart() {
  return (
    <div
      style={{
        width: "100%",
        height: "360px",
        minHeight: "360px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={indicatorHistory}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis
            domain={[0, 100]}
            tickCount={6}
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="completeness"
            name="資料完整度"
            stroke="#16a34a"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="credibility"
            name="資料可信度"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="management"
            name="經營成熟度"
            stroke="#ca8a04"
            strokeWidth={2}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="green"
            name="綠色成熟度"
            stroke="#9333ea"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}