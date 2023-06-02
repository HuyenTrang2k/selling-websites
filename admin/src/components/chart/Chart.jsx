import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  // Dummy data
  const dummyData = [
    { name: "Jan", [dataKey]: 100 },
    { name: "Feb", [dataKey]: 150 },
    { name: "Mar", [dataKey]: 200 },
    { name: "Apr", [dataKey]: 180 },
    { name: "May", [dataKey]: 120 },
    { name: "Jun", [dataKey]: 250 },
    { name: "Jul", [dataKey]: 210 },
    { name: "Aug", [dataKey]: 300 },
    { name: "Sep", [dataKey]: 280 },
    { name: "Oct", [dataKey]: 320 },
    { name: "Nov", [dataKey]: 290 },
    { name: "Dec", [dataKey]: 350 },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={dummyData}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
