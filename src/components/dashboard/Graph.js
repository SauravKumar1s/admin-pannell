import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, LinearScale, CategoryScale, PointElement } from 'chart.js';

Chart.register(LineController, LineElement, LinearScale, CategoryScale, PointElement);

const Graph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Data for Line Graph 1
    const data1 = [10, 20, 45, 48, 50];
    // Data for Line Graph 2
    const data2 = [15, 25, 35, 20, 55];

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Line Graph 1',
            data: data1,
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Line Graph 2',
            data: data2,
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

  return (
    <div className="mt-0 w-full max-w-full lg:w-full lg:flex-none">
      <div className="border-black-125 shadow-soft-xl dark:shadow-soft-dark-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl bg-gray-100 border border-gray-300 shadow-sm bg-clip-border">
        <div className="border-black-125 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
          <h6 className="sm:text-2xl">No of clicks Report</h6>
        
        </div>
        <div className="flex-auto p-4">
          <div>
            <canvas ref={chartRef} id="chart-line" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
