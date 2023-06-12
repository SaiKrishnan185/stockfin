import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export const TestChart = () => {
  const [value, setValue] = useState(null);
  const url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&outputsize=full&apikey=1NA7QA63VRGJ7CAG';

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setValue(json);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    }
    fetchStock();
  }, [url]);

  const timeSeriesvalueKeys = value != null ? Object.keys(value['Time Series (1min)']) : [];
  const stockDate = timeSeriesvalueKeys.length !== 0 ? timeSeriesvalueKeys[0].split(' ') : [];
  let currentDay = timeSeriesvalueKeys.length !== 0
    ? timeSeriesvalueKeys.filter((latestDate) => latestDate.split(' ')[0] === stockDate[0])
    : [];
  currentDay = currentDay.reverse();

  const data = {
    labels: currentDay,
    datasets: [
      {
        label: value && value['Meta Data'] && value['Meta Data']['2. Symbol'],
        data: currentDay && currentDay.map((key) => value['Time Series (1min)'][key]['4. close']),
        borderColor: '#28B463',
        pointBackgroundColor: '#28B463',
        borderWidth: 2,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#239B56',
        pointHoverBorderColor: 'blue',
        pointRadius: 2,
        fill: true,
        tension: 0.05,
        delay: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      tooltip: {
        enabled: true,
        backgroundColor: '#000000',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        titleAlign: 'center',
        bodyAlign: 'center',
        displayColors: false,
        callbacks: {
          title: (context) => {
            return context[0].label;
          },
          label: (context) => {
            return `Open: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        offset: true, // Enable offset to add spacing between points
      offsetGridLines: true,
      },
    },
  };

  return (
    <div className='flex flex-row justify-center items-center p-10'>
      {value != null ? (
        <div className='w-11/12 h-4/6' style={{ width: '1200px' }}>
          <Line data={data} options={options}></Line>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
