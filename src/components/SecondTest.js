import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

export const SecondTest = () => {
  const [value, setValue] = useState(null);
  const url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&outputsize=full&apikey=1NA7QA63VRGJ7CAG';

  useEffect(() => {
    async function fetchStock() {
      const response = await fetch(url);
      const json = await response.json();
      setValue(json);
    }
    fetchStock();
  }, [url]);

  const timeSeriesvalueKeys =
    value != null ? Object.keys(value['Time Series (1min)']) : [];
  const stockDate = timeSeriesvalueKeys.length !== 0 ? timeSeriesvalueKeys[0].split(' ') : [];
  let currentDay =
    timeSeriesvalueKeys.length !== 0
      ? timeSeriesvalueKeys.filter((latestDate) => latestDate.split(' ')[0] === stockDate[0])
      : [];
  currentDay = currentDay.reverse();

  const chartData = [
    ['Date', 'Open', 'High', 'Low', 'Close'],
    ...currentDay.map((key) => [
      key,
      parseFloat(value['Time Series (1min)'][key]['1. open']),
      parseFloat(value['Time Series (1min)'][key]['2. high']),
      parseFloat(value['Time Series (1min)'][key]['3. low']),
      parseFloat(value['Time Series (1min)'][key]['4. close']),
    ]),
  ];

  const options = {
    legend: 'none',
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#EF5350' }, // red candles
      risingColor: { strokeWidth: 0, fill: '#26A69A' }, // green candles
    },
  };

  return (
    <div className="flex flex-row justify-center items-center p-10">
      {value != null ? (
        <div className="w-screen h-screen">
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={options}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
