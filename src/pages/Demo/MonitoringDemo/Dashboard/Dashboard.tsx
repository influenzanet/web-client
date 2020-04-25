import React from 'react';

import { VegaLite } from 'react-vega';


const spec = JSON.stringify({
  "description": "A simple bar chart with embedded data.",
  "mark": "bar",
  data: { name: 'values' },
  "encoding": {
    "x": { "field": "a", "type": "ordinal" },
    "y": { "field": "b", "type": "quantitative" }
  }
})

const barData = {
  "values": [
    { "a": "A", "b": 20 }, { "a": "B", "b": 34 }, { "a": "C", "b": 55 },
    { "a": "D", "b": 19 }, { "a": "E", "b": 40 }, { "a": "F", "b": 34 },
    { "a": "G", "b": 91 }, { "a": "H", "b": 78 }, { "a": "I", "b": 25 }
  ]
};

const Dashboard = () => {
  return (
    <div>
      <VegaLite spec={JSON.parse(spec)} data={barData} />
    </div>

  );
};

export default Dashboard;
