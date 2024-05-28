import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Text } from 'recharts';
import '../App.css';

const leaders = [
  { rank: 1, name: 'Selling with re entr', calmarRatio: '3.96', overallProfit: '381845', avgDailyProfit: '319.54', winPercentDay: '0.65', action: 'View' },
  { rank: 2, name: 'strategy_name', calmarRatio: '3.62', overallProfit: '268872.5', avgDailyProfit: '216.31', winPercentDay: '0.64', price: '500', action: 'Buy' },
  { rank: 3, name: 'Based on premium and', calmarRatio: '3.42', overallProfit: '255425', avgDailyProfit: '208.51', winPercentDay: '0.64', action: 'View' },
  { rank: 4, name: 'strategy_name', calmarRatio: '3.22', overallProfit: '370845', avgDailyProfit: '303.47', winPercentDay: '0.65', action: 'View' },
  { rank: 5, name: 'strategy_name', calmarRatio: '3.22', overallProfit: '370845', avgDailyProfit: '303.47', winPercentDay: '0.65', action: 'View' },
  { rank: 6, name: 'Based on premium wit', calmarRatio: '3.01', overallProfit: '135980', avgDailyProfit: '185.77', winPercentDay: '0.49', action: 'View' },
  { rank: 7, name: 'strategy_name', calmarRatio: '2.76', overallProfit: '267867.5', avgDailyProfit: '218.49', winPercentDay: '0.6', action: 'View' },
  { rank: 8, name: 'Wait and trade_Save', calmarRatio: '2.62', overallProfit: '178252.5', avgDailyProfit: '161.9', winPercentDay: '0.63', action: 'View' },
  { rank: 9, name: 'iron condor', calmarRatio: '2.44', overallProfit: '176420', avgDailyProfit: '137.51', winPercentDay: '0.65', action: 'View' },
  { rank: 10, name: 'strategy_name', calmarRatio: '2.04', overallProfit: '244555', avgDailyProfit: '198.66', winPercentDay: '0.62', action: 'View' },
];

const overallProfitData = leaders.map(leader => ({
  name: leader.name,
  value: parseFloat(leader.overallProfit),
}));

const avgDailyProfitData = leaders.map(leader => ({
  name: leader.name,
  avgDailyProfit: parseFloat(leader.avgDailyProfit),
}));

const COLORS = ['#e27598', '#c0607d', '#a04d6d', '#803a5c', '#60284c'];

const CustomizedAxisTick = ({ x, y, payload }) => {
  const maxChars = 10;
  const displayName = payload.value.length > maxChars ? `${payload.value.slice(0, maxChars)}...` : payload.value;
  return (
    <Text x={x} y={y + 10} textAnchor="middle" verticalAnchor="start" title={payload.value} className="axis-tick">
      {displayName}
    </Text>
  );
};

function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>LeaderBoard</h1>
        <div className="filter-buttons">
          <button className="filter-button">Historical Trading▾</button>
          <button className="filter-button">Historical Chart</button>
          <button className="filter-button">Scanners</button>
          <button className="filter-button">Alerts</button>
          <button className="nav-button">Basic Backtest</button>
        <button className="nav-button">Advanced Backtest</button>
        <button className="nav-button">Pricing</button>
        <button className="nav-button">My Earnings</button>
        </div>
      </div>
      
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win %(Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader) => (
            <tr key={leader.rank} className="leaderboard-row">
              <td>{leader.rank}</td>
              <td>{leader.name}</td>
              <td>{leader.calmarRatio}</td>
              <td>{leader.overallProfit}</td>
              <td>{leader.avgDailyProfit}</td>
              <td>{leader.winPercentDay}</td>
              <td>{leader.price}</td>
              <td>
                <button className="action-button">{leader.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <h2>Overall Profit Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={overallProfitData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {overallProfitData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <h2>Average Daily Profit</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={avgDailyProfitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="avgDailyProfit" fill="#e27598" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Leaderboard;
